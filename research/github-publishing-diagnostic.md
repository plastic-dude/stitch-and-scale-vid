# GitHub Sandbox Device-Auth Diagnostic

Updated: 2026-08-19

The sandbox GitHub CLI device-auth session generated one-time code `C147-89BE` and remained waiting for authorization. The connected My Browser was opened at `https://github.com/login/device`, but GitHub redirected to `https://github.com/login/device/authorize` and displayed a 404 page. The sandbox polling session did not report successful authentication.

Interpretation: the code/authorization route was not accepted, likely because the route expired, the authorization page was opened in the wrong session/state, or GitHub required a fresh device code after sign-in. No token was exposed. The safe recovery is to terminate the stale CLI session, generate a fresh code, and use the exact current device page in the authenticated GitHub browser session.


A fresh noninteractive flow generated code `FAF5-701C`; the browser is confirmed as `plastic-dude`, and the device page is now ready for code entry. The earlier shell Enter issue was bypassed by piping the initial prompts noninteractively.

The code itself is ephemeral and is not a repository credential.


The final fresh flow reached GitHub’s `Authorize GitHub CLI` screen for `plastic-dude`. The page lists GitHub CLI existing access including private-repository control and workflow updates. The user has been informed and requested proceeding. The final Authorize button is below the current viewport and must be explicitly confirmed before clicking.
