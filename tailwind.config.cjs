/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#38bdf8",
          gold: "#facc6b"
        }
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "metric-float": {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.96)" },
          "15%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-18px) scale(1)" }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.35s ease-out",
        "metric-float": "metric-float 1.1s ease-out both"
      }
    }
  },
  plugins: []
};

