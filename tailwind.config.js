/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: "#0C1024", // page background
        surface: "#151A3A", // cards and panels
        raised: "#1C2248", // hovered / elevated surfaces
        line: "#272E57", // borders and dividers
        ink: "#ECEBFA", // primary text
        mute: "#9A9DC0", // secondary text
        violet: "#8B6CFF", // brand accent
        marigold: "#FFB547", // secondary accent, used sparingly
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "76rem",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        "spin-reverse": {
          to: { transform: "rotate(-360deg)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(6%, -4%) scale(1.08)" },
          "66%": { transform: "translate(-5%, 5%) scale(0.95)" },
        },
        ping: {
          "75%, 100%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "spin-slow": "spin 14s linear infinite",
        orbit: "spin 40s linear infinite",
        "orbit-counter": "spin-reverse 40s linear infinite",
        drift: "drift 22s ease-in-out infinite",
        "drift-slow": "drift 30s ease-in-out infinite reverse",
        ping: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
    },
  },
  plugins: [],
};
