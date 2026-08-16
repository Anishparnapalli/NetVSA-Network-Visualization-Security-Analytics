# NetVSA — Architecture Decisions Log

Per the Implementation Plan's "Adaptive rule" (Principles That Apply to
Every Phase, #4): if a better technical approach is discovered during a
phase than what the plan/architecture doc describes, it may be adopted,
but the change and its reasoning are recorded here so later phases' chats
have the context.

---

## Phase 1

### Decision: pnpm hoisted node-linker (`.npmrc`)

**What changed:** added `node-linker=hoisted` / `shamefully-hoist=true` to
`.npmrc`, rather than relying on pnpm's default strict, symlinked
`node_modules` layout.

**Why:** the Technical Architecture's folder structure (§11) puts `e2e/`
at the repository root (not nested inside `apps/web`), specifically
because later phases need it to hold specs that span multiple workspace
packages (the Phase 5 two-Agent real-communication test spans
`apps/agent` and `apps/web`). Root-level spec files resolving
`@playwright/test` (a devDependency of `apps/web`, not the root package)
under pnpm's default strict linking would require extra workspace
plumbing for no real benefit in a single-developer, single-machine
project. Hoisted linking makes plain Node module resolution work
uniformly regardless of which package "owns" a given devDependency,
which matches goal #12 (no unnecessarily complicated infrastructure)
better than the strict default here.

**Impact:** no change to workspace package boundaries, `packages/*`
public APIs, or any Phase 1 Exit Criteria. Purely a local tooling
resolution detail.

---

(Further phases append entries below this line, oldest first.)
