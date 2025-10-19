/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-bg) / <alpha-value>)",
        foreground: "rgb(var(--color-fg) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--color-primary) / <alpha-value>)",
          foreground: "rgb(var(--color-primary-foreground) / <alpha-value>)",
        },
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
      },
      spacing: {
        xs: "var(--space-1)",
        sm: "var(--space-2)",
        md: "var(--space-3)",
        lg: "var(--space-4)",
        xl: "var(--space-5)",
        "2xl": "var(--space-6)",
      },
      fontSize: {
        "step--2": "clamp(0.64rem, calc(0.61rem + 0.12vw), 0.70rem)",
        "step--1": "clamp(0.80rem, calc(0.77rem + 0.16vw), 0.90rem)",
        "step-0": "clamp(1.00rem, calc(0.96rem + 0.21vw), 1.13rem)",
        "step-1": "clamp(1.25rem, calc(1.19rem + 0.27vw), 1.41rem)",
        "step-2": "clamp(1.56rem, calc(1.49rem + 0.35vw), 1.76rem)",
        "step-3": "clamp(1.95rem, calc(1.86rem + 0.46vw), 2.20rem)",
        "step-4": "clamp(2.44rem, calc(2.32rem + 0.60vw), 2.75rem)",
        "step-5": "clamp(3.05rem, calc(2.90rem + 0.78vw), 3.43rem)",
      },
      borderRadius: {
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "9999px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: [
          "var(--font-display)",
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "3rem",
        },
        screens: {
          "2xl": "var(--container-max)",
        },
      },
    },
  },
  plugins: [],
};
