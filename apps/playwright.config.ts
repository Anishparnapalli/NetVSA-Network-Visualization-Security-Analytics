import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright config for the Phase 1 e2e harness.
 * Boots the real Vite dev server and runs against it, per Implementation
 * Plan Phase 1 exit criteria ("pnpm e2e (Playwright)").
 */
export default defineConfig({
  testDir: "../../e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:5173",
    trace: "on-first-retry"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],
  webServer: {
    command: "pnpm dev",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
    timeout: 60_000
  }
});
