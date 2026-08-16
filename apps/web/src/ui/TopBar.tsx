/**
 * Top bar, per Technical Architecture §8.1's floating HUD concept
 * (mode badge, connection status, active session clock).
 *
 * Phase 1: static shell only. Real connection status comes from the
 * Agent in Phase 5; session clock comes from the `session` store slice
 * once sessions are actually started (Phase 2+).
 */
export function TopBar() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-netvsa-border bg-netvsa-bg-raised px-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm font-semibold tracking-widest text-netvsa-text">
          NETVSA
        </span>
        <span className="rounded border border-netvsa-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-netvsa-text-muted">
          Phase 1 · Foundation
        </span>
      </div>
      <div className="flex items-center gap-2 font-mono text-xs text-netvsa-text-muted">
        <span className="inline-block h-2 w-2 rounded-full bg-netvsa-idle" aria-hidden="true" />
        <span>No active session</span>
      </div>
    </header>
  );
}
