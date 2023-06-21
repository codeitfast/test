/*
npx tailwindcss -i ./src/styles/globals.css -o ./src/styles/output.css --watch
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%": { transform: "translate(0px, 0px)", opacity: .5 },
          "50%": { color: 'blue', transform: "translate(100px, -100px)", opacity: .6, width:'0px' },
          "100%": {color: 'blue', transform: "translate(100px, -100px)", opacity: "0", width: "0px"}
        }
      },
      animation: {
        wiggle: "wiggle 400ms ease-in"
      }
    }
  },
  plugins: [],
}
