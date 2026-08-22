#!/usr/bin/env node

import { createHash } from "node:crypto";

const BASE =
  "https://raw.githubusercontent.com/plastic-dude/stitch-and-scale-pro/main/docs/source-bundle/stitch_scale_bundle-2026-08-22";
const EXPECTED_ARCHIVE_SHA256 =
  "c19b71cdd06d250326d80eddc27685cbb627f91b03d85a624f0bb4894ba2a082";
const EXPECTED_SOURCES = {
  "stitch_scale_risk_pricing.md":
    "2fb721a288eaa5657a18229a159a82a86b8ecd64a494014e9d42e4264f14502f",
  "stitch_scale_economics.py":
    "3162586192102c56b9d07b7693410eb012d79add37f342936122f12037f203d2",
  "stitch_scale_access_research.md":
    "4696ac6473fcad834c0fa7eb76b39c69c467ab333cb5ccb5505fb0e76c7e1943",
  "README.txt":
    "71bcd9e8fade9d48d6d759de51dc029c3a682ea1c5d9da7f7c3c1daa3978e895",
  "stitch_scale_observations.md":
    "744c33f0874ce51a0f70dac79804abf3fdc9b97eb5c2df6dc2d1a329c1f4a2d2",
  "stitch_scale_beta_research.md":
    "85692c1e718025f0a2c8a6cf3700a35d851dc4f07f8160e59b0b4e34f8303b42",
  "stitch_scale_feedback_system_recommendation.md":
    "87da7000a590edb49f8620e918578083e4f7d646c4dc56674fecaf64fd3d5663",
  "stitch_scale_beta_launch_playbook.md":
    "94b2c7eea130f62a6dfc23fb05518fc63813d8ebe1c11dfa8b5c72bc799cc1b4",
  "stitch_scale_pricing_model.py":
    "b480ebf505b5eb56b91a64f75bc3026591ac3848fd35820af258eb4d246e7ca3",
  "stitch_scale_risk_pricing_report.md":
    "b849a7610f4033185916ebb5048f2de9f3259d0a0d4531aa82e743bfe7b49903",
  "stitch_scale_beta_access_architecture.md":
    "ca4b5d6e3d371814649084fa18a69d6d20ace3a06a67cc1fe3a90926ad2d8eb2",
  "stitch_scale_validation_report.md":
    "d565ddb6fa53e7e7bce06c5991d9df142a5db7282e75bc97aa17405b4dc573e2",
  "calc_yarn_scenarios.py":
    "d5ebde0edf2d578cd8f3c6920d09a31030cdece000fb549a823ca666c19301ba",
  "yarn_shopping_findings.md":
    "f65d5d838da29ac2f4383da4f481a2f1b7e0e435faca1e7ee510e46260ff3e01",
  "stitch_scale_research.md":
    "fbf6d9632a008d2ae844f75b8900c9cf4810cada9dc68e877bebbf6143f314fb",
};

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function fetchBytes(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(20_000) });
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${url}`);
  }
  return Buffer.from(await response.arrayBuffer());
}

function parseManifest(manifestText) {
  const entries = {};
  for (const line of manifestText.split(/\r?\n/)) {
    const match = line.match(/^([0-9a-f]{64})\s+(.+)$/);
    if (match) entries[match[2]] = match[1];
  }
  return entries;
}

const failures = [];
const archive = await fetchBytes(`${BASE}/stitch_scale_bundle.zip`);
const archiveSha256 = sha256(archive);
if (archiveSha256 !== EXPECTED_ARCHIVE_SHA256) {
  failures.push(`archive SHA-256 mismatch: ${archiveSha256}`);
}

const readme = (await fetchBytes(`${BASE}/README.md`)).toString("utf8");
for (const requiredText of [EXPECTED_ARCHIVE_SHA256, "1sM4MMceHQiKIP3GNPSi_v8P8l9D2LSJ1", "original/"]) {
  if (!readme.includes(requiredText)) failures.push(`README missing required provenance text: ${requiredText}`);
}

const manifestText = (await fetchBytes(`${BASE}/source-sha256s.txt`)).toString("utf8");
const manifest = parseManifest(manifestText);
const expectedNames = Object.keys(EXPECTED_SOURCES).sort();
const manifestNames = Object.keys(manifest).sort();
if (JSON.stringify(manifestNames) !== JSON.stringify(expectedNames)) {
  failures.push(`manifest source set mismatch: expected ${expectedNames.length}, received ${manifestNames.length}`);
}

const checked = [];
for (const [name, expectedSha256] of Object.entries(EXPECTED_SOURCES)) {
  if (manifest[name] !== expectedSha256) {
    failures.push(`manifest SHA-256 mismatch for ${name}`);
    continue;
  }
  const bytes = await fetchBytes(`${BASE}/original/${encodeURIComponent(name)}`);
  const actualSha256 = sha256(bytes);
  checked.push({ name, bytes: bytes.length, sha256: actualSha256 });
  if (actualSha256 !== expectedSha256) failures.push(`raw source SHA-256 mismatch for ${name}`);
}

const result = {
  status: failures.length === 0 ? "PASS" : "BLOCKED",
  bundle: "stitch_scale_bundle.zip",
  archiveSha256,
  expectedArchiveSha256: EXPECTED_ARCHIVE_SHA256,
  sourceCount: checked.length,
  sources: checked,
  failures,
};
process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
if (failures.length > 0) process.exit(1);
