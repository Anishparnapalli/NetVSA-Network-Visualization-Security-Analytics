interface LabPlaceholderProps {
  title: string;
  description: string;
}

/**
 * Shared placeholder content for every lab screen, per Implementation
 * Plan Phase 1 scope ("links can be placeholder screens"). Each lab gets
 * its real content in a later phase (see per-screen comments in
 * `apps/web/src/labs/*`).
 */
export function LabPlaceholder({ title, description }: LabPlaceholderProps) {
  return (
    <div className="pointer-events-none absolute left-6 top-6 max-w-sm rounded-lg border border-netvsa-border bg-netvsa-bg-panel/90 p-4 backdrop-blur">
      <h1 className="text-sm font-semibold text-netvsa-text">{title}</h1>
      <p className="mt-1 text-xs leading-relaxed text-netvsa-text-muted">{description}</p>
    </div>
  );
}
