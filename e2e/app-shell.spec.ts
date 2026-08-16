import { expect, test } from "@playwright/test";

/**
 * Phase 1 exit criteria covered here:
 *   - "3D scene renders and camera orbit works" (canvas presence + a drag
 *     interaction that must not error)
 *   - "Nav rail navigates between placeholder screens"
 *
 * This is deliberately the one Playwright test required by Phase 1
 * ("Add ... one Playwright test (app loads, nav rail renders) to prove
 * the test harness works end to end").
 */
test("app loads, nav rail renders, and navigation works", async ({ page }) => {
  await page.goto("/");

  // App shell loaded — exact match to avoid ambiguity with the parent
  // element, whose full text content ("NETVSAPhase 1 · Foundation")
  // also contains "NETVSA" as a substring under Playwright's default
  // substring-matching getByText() semantics.
  await expect(page.getByText("NETVSA", { exact: true })).toBeVisible();

  // 3D scene rendered a canvas
  const canvas = page.getByTestId("netvsa-canvas").locator("canvas");
  await expect(canvas).toBeVisible();

  // Nav rail renders all seven lab destinations
  const nav = page.getByRole("navigation", { name: "NetVSA labs" });
  await expect(nav).toBeVisible();
  for (const label of [
    "Overview",
    "Real Network",
    "Simulation",
    "Protocols",
    "Security",
    "Analytics",
    "Replay"
  ]) {
    await expect(nav.getByText(label, { exact: true })).toBeVisible();
  }

  // Navigating changes the placeholder content and the URL
  await nav.getByText("Simulation", { exact: true }).click();
  await expect(page).toHaveURL(/\/simulation$/);
  await expect(page.getByRole("heading", { name: "Simulation" })).toBeVisible();

  await nav.getByText("Security", { exact: true }).click();
  await expect(page).toHaveURL(/\/security$/);
  await expect(page.getByRole("heading", { name: "Security Lab" })).toBeVisible();

  // The 3D canvas persists across navigation (single persistent instance,
  // per Technical Architecture §8.5) rather than being remounted per route.
  await expect(canvas).toBeVisible();

  // Camera orbit: dragging over the canvas should not throw/crash the app.
  const box = await canvas.boundingBox();
  if (box) {
    const cx = box.x + box.width / 2;
    const cy = box.y + box.height / 2;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx + 120, cy - 60, { steps: 10 });
    await page.mouse.up();
  }
  await expect(canvas).toBeVisible();
});