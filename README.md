# Akroven canary

Disposable test site for Akroven's release pipeline. It holds nothing private.

| Folder | Akroven project | Preset | Output | What it proves |
|---|---|---|---|---|
| `static/` | canary-static | Static | `static` | Build, protected Preview, A → B → A traffic rollback at one hostname |
| `worker/` | canary-worker | Worker adapter | `worker` | Runtime variables reach the right environment |

## A → B → A

1. Build commit A (`marker` = A), open Preview, promote, check the hostname shows A and its `/.well-known/onyx-release` stamp matches release A.
2. Change the marker to B in a new commit, build, promote, check B at the same hostname.
3. Roll traffic back to release A from Deployments (no new commit) and check A and its stamp again.

## Environment canary

In Akroven → Environment Variables for canary-worker, set `AKROVEN_CANARY` to a different non-secret value for Preview and for Production. Build once. The Preview URL must return the Preview value and the production hostname the Production value. Then add a Preview branch override, rotate the value, and roll back, checking which value each release reports.
