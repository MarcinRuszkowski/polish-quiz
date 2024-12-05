/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f5cbf",
        "primary-hover": "#2368d9",
        secondary: "#344769",
        "secondary-hover": "#415982",
        locked: "#373738",
        completed: "#009149",
        unlocked: "#2c7bdb",
      },
    },
  },
  plugins: [],
};
