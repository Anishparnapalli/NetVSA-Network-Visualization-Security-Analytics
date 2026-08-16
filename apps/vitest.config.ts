import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Separate from vite.config.ts so `vitest` config additions never affect
// the dev/build config, per standard Vite+Vitest practice.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test-setup.ts"],
    exclude: ["**/node_modules/**", "**/e2e/**"]
  }
});
