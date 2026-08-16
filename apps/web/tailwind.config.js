/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark "control room" base palette + security/status color language,
        // per Technical Architecture §8.8. These map 1:1 onto the CSS
        // variables defined in src/styles/tokens.css so the same palette
        // can later be imported into 3D materials (Phase 4+).
        netvsa: {
          bg: "var(--netvsa-bg)",
          "bg-raised": "var(--netvsa-bg-raised)",
          "bg-panel": "var(--netvsa-bg-panel)",
          border: "var(--netvsa-border)",
          text: "var(--netvsa-text)",
          "text-muted": "var(--netvsa-text-muted)",
          idle: "var(--netvsa-idle)",
          active: "var(--netvsa-active)",
          warning: "var(--netvsa-warning)",
          threat: "var(--netvsa-threat)",
          resolved: "var(--netvsa-resolved)"
        }
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
        sans: ["'Inter'", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
