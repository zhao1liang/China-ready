import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A1628",
        china: {
          red: "#DC2626",
        },
        success: {
          green: "#16A34A",
        },
        hero: {
          muted: "#94A3B8",
        },
        warn: {
          bg: "#FEF9C3",
          text: "#713F12",
        },
        tip: {
          bg: "#EFF6FF",
          text: "#1E40AF",
        },
        error: {
          bg: "#FEE2E2",
          title: "#991B1B",
        },
        section: {
          muted: "#F8FAFC",
        },
        slate: {
          text: "#0F172A",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
