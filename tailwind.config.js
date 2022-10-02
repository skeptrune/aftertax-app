/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sandgold": {
          "50": "#ffd88d",
          "100": "#f8ce83",
          "200": "#eec479",
          "300": "#e4ba6f",
          "400": "#dab065",
          "500": "#d0a65b",
          "600": "#c69c51",
          "700": "#bc9247",
          "800": "#b2883d",
          "900": "#a87e33"
        },
        "gravel": {
          "50": "#777777",
          "100": "#6d6d6d",
          "200": "#636363",
          "300": "#595959",
          "400": "#4f4f4f",
          "500": "#454545",
          "600": "#3b3b3b",
          "700": "#313131",
          "800": "#272727",
          "900": "#1d1d1d"
        },
        "balticsea": {
          "50": "#5b5f62",
          "100": "#515558",
          "200": "#474b4e",
          "300": "#3d4144",
          "400": "#33373a",
          "500": "#292d30",
          "600": "#1f2326",
          "700": "#15191c",
          "800": "#0b0f12",
          "900": "#010508"
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
