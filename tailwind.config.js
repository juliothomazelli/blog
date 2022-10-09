/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  theme => ({
        // "logo": "url(foto.jpeg)"
      }),
    },
  },
  plugins: [],
}
