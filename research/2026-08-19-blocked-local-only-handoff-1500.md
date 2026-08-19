# Director Research and Blocker — GitHub Publication Authentication

research_id: RESEARCH-20260819-local-only-handoff-1500
run_role: temporary-director
run_time: 2026-08-19T15:00:00+01:00
parent_brief: PLAN-20260819-local-only-001
local_head_before_new_record: 8d457c3
remote_head: 63f66c1
status: blocked

## Fresh research question

What is the least-privilege GitHub authentication needed to publish the already-complete Director handoff to `plastic-dude/stitch-and-scale-vid`, and what limitation must be checked before retrying?

## Current first-party findings

GitHub’s authentication guidance says HTTPS command-line access requires a personal access token rather than a password when GitHub CLI is not used. GitHub recommends fine-grained personal access tokens where possible.[1]

GitHub’s token-management guidance says a fine-grained token can be limited to one resource owner, selected repositories, and specific permissions; the repository permission needed for pushing these planning files is `Contents: write`. The same guidance notes a limitation: fine-grained tokens cannot contribute to public repositories where the user is not the owner or organization member. Because this repository is owned by `plastic-dude`, the token’s resource owner and selected-repository settings must be checked before use.[2]

GitHub also warns that tokens must be treated like passwords and recommends short expiration and least privilege. No token value is stored in this research note or repository.[2]

## Reconciled queue decision

The existing `privacy-by-default` brief remains the only unconsumed, current, product-proof-backed Director contract. The remote Generator continues to report no eligible newer approved-for-generation pair because the complete Director package is not on `origin/main`. No open `REMAKE_REQUIRED` order exists. Creating another campaign would not solve the authentication blocker and would create duplicate queue noise.

## Precise blocker

The local Director branch contains six commits beyond remote `63f66c1`, including the complete brief and the successive durable blocker/research handoffs. The GitHub connector is currently disabled, and no sandbox token is present. Therefore, the Generator cannot discover `MSG-20260819T131500-temporary-director-003.yml`.

## Exact next action

Enable the existing GitHub connector, or provide a short-lived token through the established secure file path. If using a fine-grained token, restrict it to resource owner `plastic-dude`, repository `stitch-and-scale-vid`, `Contents: write`, and a short expiration; then push the local branch to `origin/main` and revoke/expire the token afterward. Do not create another brief, regenerate DIR-001, or use `small-test.mp4`.

## References

[1]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/about-authentication-to-github "About authentication to GitHub — GitHub Docs"
[2]: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens "Managing your personal access tokens — GitHub Docs"
