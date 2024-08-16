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
        second_color: "##f97d36",
        pallet_navy_blue: "#113065",
        pallet_yellow: "#c3d91e",
        pallet_orange: "#f29f05",
        pallet_green: "#749f82",
        pallet_beige: "#eeeee2",
        pallet_salmon: "#f25749",
        pallet_bg_logo: "#12376d",
        pallet_bg_gold_don: "#f8e231",
        pallet_bg_silver_don: "#b1b1b1",
        pallet_bg_bronze_don: "#cd7F32",
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
      keyframes: {
        ...keyframes,
        don_animation_down: {
          "0%": { transform: "translateY(0) translateX(-1.5rem)" },
          // "50%": { transform: "translateY(-1.5rem)" },
          "100%": { transform: "translateY(8rem) translateX(-1.5rem)" },
        },
        don_animation_up: {
          "0%": { transform: "translateY(8rem) translateX(-1rem)" },

          "100%": { transform: "translateY(-1rem) translateX(-1rem)" },
        },
      },

      animation: {
        ...animations,
        don_animation_up: "don_animation_up 0.9s ease-out",
        don_animation_down: "don_animation_down 0.9s ease-out",
      },

      transitionDelay: animationDelay,

      fontFamily: {
        clash: ["var(--font-clash)"],
      },

      touchScreen: {
        deslize: "touchmove",
      },
    },
  },
  plugins: [],
};
export default config;
