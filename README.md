# NetVSA — Network Visualization & Security Analytics

A 3D interactive network laboratory combining genuinely real network
communication, network simulation, protocol visualization, and security
analytics. See `docs/architecture/` and the project's source documents for
the full design.

**Current status: Phase 1 — Foundation & Monorepo Skeleton.**
This is scaffolding only: an empty but real 3D scene, app navigation, and
the full monorepo/tooling layout. No simulation, no real communication,
and no security logic exist yet — those arrive in Phases 3, 5, and 6
respectively (see `NetVSA_Detailed_Adaptive_Implementation_Plan.md`).

## Requirements

- Node.js 20+
- pnpm (`npm install -g pnpm` if you don't have it)

## Install

From the repository root:

```bash
pnpm install
```

## Run the web app

```bash
pnpm dev
```

Opens the Vite dev server at **http://localhost:5173**. You should see a
dark 3D scene (empty grid, orbit-controllable camera) with a left nav rail
(Overview · Real Network · Simulation · Protocols · Security · Analytics ·
Replay) and a top bar. Click nav items to switch placeholder screens;
drag on the canvas to orbit the camera.

## Run the Agent stub (optional, Phase 1 has nothing for it to do yet)

```bash
pnpm dev:agent
```

Prints a stub message and exits nothing — real socket I/O arrives in
Phase 5.

## Tests

```bash
pnpm test   # Vitest — unit tests (store logic)
pnpm e2e    # Playwright — end-to-end (app loads, nav rail, camera orbit)
```

`pnpm e2e` needs Playwright's browser binaries installed once:

```bash
pnpm --filter @netvsa/web exec playwright install chromium
```

## Lint / format / typecheck

```bash
pnpm lint
pnpm typecheck
pnpm format
```

## Project layout

See `NetVSA_Technical_Architecture (1).md` §11 for the authoritative
folder structure. Summary:

- `apps/web` — the React + R3F frontend (the entire app except real
  sockets).
- `apps/agent` — the local Node.js Agent (real TCP/UDP/TLS + discovery;
  stub until Phase 5).
- `packages/events` — shared event envelope/schemas (populated Phase 2).
- `packages/engine` — simulation engine (populated Phase 3).
- `packages/security` — firewall/IDS logic (populated Phase 6).
- `packages/explain` — deterministic event explanation generators
  (populated Phase 6).
- `packages/scenarios` — data-defined security scenarios (populated
  Phase 9).
- `setup/` — OS setup helpers for the real-comm demo (Phase 5).
- `docs/` — architecture docs, decisions log, demo runbook (Phase 5+).
- `e2e/` — Playwright specs shared across packages.
