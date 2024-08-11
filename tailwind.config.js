/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight: {
        heightHome: "calc(100vh - 70px)",
        heightDetails: "calc(100vh - 203px)",
      },
      boxShadow: {
        shadowButton: "0 0 10px #0ef",
        shadowAbout: "0 0 0 195px #0d1519 inset;",
      },
      gridTemplateColumns: {
        projectCard: "repeat(auto-fill , minmax(300px , 1fr));",
      },
    },
  },
  plugins: [],
};
