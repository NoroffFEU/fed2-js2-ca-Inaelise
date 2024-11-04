/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js,ts}", "!./node_modules/**/*"],
  theme: {
    extend: {
      colors: {
        main: "#ACE3D6",
        secondary: "#1A362F",
        faded: "rgba(0, 0, 0, 0.350)",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
      },
      fontSize: {
        sm: "0.9rem",
      },
      boxShadow: {
        box: "5px 5px 0px 0px rgb(172, 227, 214)",
      },
    },
  },
  plugins: [],
};
