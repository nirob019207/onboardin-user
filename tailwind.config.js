/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Define your "xs" breakpoint here
        'sm': '640px',
        'md': '768px',
        'lg': '991px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

