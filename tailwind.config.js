/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      primary: "#6941C6",
      secondary: "#D6BBFB",
      // success: "#219653",
      danger: "#FDA29B",
      warning: "#FFA70B",
      gray: {
        700: "#344054",
        200: "#EAECF0",
        100: "#F2F4F7",
        900: "#101828",
        500: "#667085",
      },
      success: {
        50: "#ECFDF3",

        700: "#027A48",
      },
      secondaryText: "#B0B7C3",
      borderGray: "#EEE",
      error: {
        300: "#FDA29B",
        500: "#F04438",
      },

      blue: "#377DFF",
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontSize: {
        "title-xxl": ["44px", "55px"],
        "title-xl": ["36px", "45px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm": ["20px", "26px"],
        "title-xsm": ["18px", "24px"],
      },

      boxShadow: {
        xl: "0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)",
        button: "0px 1px 2px 0px rgba(16, 24, 40, 0.05) ",
        inputShadow:
          "0px 0px 0px 4px #F4EBFF, 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
      },
      maxWidth: {
        444: "444px",
      },
      maxHeight: {
        576: "576px",
      },
      minWidth: {
        22.5: "5.625rem",
        42.5: "10.625rem",
        47.5: "11.875rem",
        75: "18.75rem",
      },
      zIndex: {
        999999: "999999",
        99999: "99999",
        9999: "9999",
        999: "999",
        99: "99",
        9: "9",
        1: "1",
      },
      opacity: {
        65: ".65",
      },
      backgroundImage: {
        video: "url('../images/video/video.png')",
      },
      content: {
        "icon-copy": 'url("../images/icon/icon-copy-alt.svg")',
      },
      transitionProperty: { width: "width", stroke: "stroke" },
      borderWidth: {
        6: "6px",
      },

      dropShadow: {
        1: "0px 1px 0px #E2E8F0",
        2: "0px 1px 4px rgba(0, 0, 0, 0.12)",
      },
      keyframes: {
        rotating: {
          "0%, 100%": { transform: "rotate(360deg)" },
          "50%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        "ping-once": "ping 5s cubic-bezier(0, 0, 0.2, 1)",
        rotating: "rotating 30s linear infinite",
        "spin-1.5": "spin 1.5s linear infinite",
        "spin-2": "spin 2s linear infinite",
        "spin-3": "spin 3s linear infinite",
      },
    },
  },
  plugins: [],
};
