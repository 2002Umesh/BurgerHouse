/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        "custom-white": "1px 1px 20px white",
      },
    },
  },

  plugins: [],
};
