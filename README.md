# Interstellar (Large Repo)

This is a large repository illustrating how Nx can speed up CI and local dev for an org.

Repo contains:
1. 5 shared buildable libs with 250 components each
2. 5 next.js applications built out of 20 app-specific libraries. Each app-specific lib has 250 components each. Each library uses the shared components.

Combined there are about 26k components.

Running build/test/lint for the applications takes about 3h 30m on CI if executed on a single agent. 

After enabling Nx Cloud and distribution, the total time goes down to 14 minutes. It can be lowered even further (to under 10 minutes) by adding more agents.

Note, this is the worst case scenario when everything has to be rebuilt/retested etc. Most PRs will only change a small fraction of the repo, so only some apps and libs will have to be retested and rebuilt.