import { animationDelay, animations, keyframes } from "./src/animations/theme";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: "#FFFF",
        fisrt_color: "#E1E2F3",
        second_color: "##F97D36",
        pallet_navy_blue: "#113065",
        pallet_yellow: "#c3d91e",
        pallet_orange: "#f29f05",
        pallet_green: "#749F82",
        pallet_beige: "#EEEEE2",
        pallet_salmon: "#f25749",
        pallet_bg_logo: "#12376D",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      scale: {
        "-1": "-1", // Enabling negative scaling
      },
      screens: {
        mobS: "320px",
        // => @media (min-width: 320px) { ... }

        mobM: "375px",
        // => @media (min-width: 375px) { ... }

        mobL: "425px",
        // => @media (min-width: 425px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
      keyframes: keyframes,

      animation: animations,

      transitionDelay: animationDelay,

      fontFamily: {
        clash: ["var(--font-clash)"],
      },
    },
  },
  plugins: [],
};
export default config;
