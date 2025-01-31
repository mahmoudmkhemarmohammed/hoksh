/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        heightLayout: "calc(100vh - 70px)",
        heightDetails: "calc(100vh - 203px)",
      },
      boxShadow: {
        shadowButton: "0 0 10px #0ef",
        shadowAbout: "0 0 0 195px #0d1519 inset;",
      },
      gridTemplateColumns: {
        projectCard: "repeat(auto-fill , minmax(300px , 1fr));",
      },

      animation: {
        rotate1: "rotate1 2s linear infinite",
        rotate2: "rotate2 2s linear infinite",
        rotate3: "rotate3 2s linear infinite",
        rotate4: "rotate4 2s linear infinite",
        rotBGimg: "rotBGimg 3s linear infinite",
      },

      keyframes: {
        rotate1: {
          "0%": { transform: "rotateX(50deg) rotateZ(110deg)" },
          "100%": { transform: "rotateX(50deg) rotateZ(470deg)" },
        },
        rotate2: {
          "0%": { transform: "rotateX(20deg) rotateY(50deg) rotateZ(20deg)" },
          "100%": {
            transform: "rotateX(20deg) rotateY(50deg) rotateZ(380deg)",
          },
        },
        rotate3: {
          "0%": { transform: "rotateX(40deg) rotateY(130deg) rotateZ(450deg)" },
          "100%": {
            transform: "rotateX(40deg) rotateY(130deg) rotateZ(90deg)",
          },
        },
        rotate4: {
          "0%": { transform: "rotateX(70deg) rotateZ(270deg)" },
          "100%": { transform: "rotateX(70deg) rotateZ(630deg)" },
        },
        rotBGimg: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
