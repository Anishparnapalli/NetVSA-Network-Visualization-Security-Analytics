/**
 * Left nav rail destinations, per Technical Architecture §8.1's
 * information architecture:
 *   Overview · Real Network · Simulation · Protocols · Security ·
 *   Analytics · Replay
 *
 * Phase 1: every destination is a placeholder screen (Implementation Plan
 * Phase 1 scope: "links can be placeholder screens"). Exported as data so
 * both the nav component and the Playwright/Vitest tests share one
 * definition instead of duplicating route strings.
 */
export interface NavItem {
  path: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { path: "/", label: "Overview" },
  { path: "/real-network", label: "Real Network" },
  { path: "/simulation", label: "Simulation" },
  { path: "/protocols", label: "Protocols" },
  { path: "/security", label: "Security" },
  { path: "/analytics", label: "Analytics" },
  { path: "/replay", label: "Replay" }
];
