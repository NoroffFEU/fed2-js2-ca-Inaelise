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
    },
  },
  plugins: [],
};
