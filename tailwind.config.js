/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        main: "#ACE3D6",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: "0.9rem",
      },
    },
  },
  plugins: [],
};
