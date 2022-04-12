module.exports = {
  content: ["./src/**/*.{html,js,vue}"],
  theme: {
    spacing: {
      0: "4px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "64px",
      8: "96px",
    },
    fontSize: {
      Display1: "3.2rem",
      Display2: "2.75rem",
      Display3: "2.25rem",
      Body1: "2rem",
      Body2: "1.75rem",
      Body3: "1.5rem",
      Sub1: "1.4rem",
      Sub2: "1.25rem",
      Sub3: "1.125rem",
    },
    screens: {
      Standard: "690px",
      // => @media (min-width: 690px) { ... }

      Wide: "930px",
      // => @media (min-width: 930px) { ... }

      ExtraWide: "1280px",
      // => @media (min-width: 1280px) { ... }

      SuperWide: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    colors: {
      Background: {
        0: "#000000",
        1: "#17181B",
        2: "#202124",
        3: "#282A2D",
      },
      OpacityBlack: {
        1: "rgba(0, 0, 0, 0.84)",
        2: "rgba(0, 0, 0, 0.78)",
        3: "rgba(0, 0, 0, 0.6)",
      },
      OpacityWhite: {
        1: "#FFFFFF",
        2: "rgba(255, 255, 255, 0.72)",
        3: "rgba(255, 255, 255, 0.56)",
      },
      Line: {
        1: "rgba(255, 255, 255, 0.46)",
        2: "rgba(255, 255, 255, 0.24)",
      },
      // ...
    },
  },
  plugins: [],
};
