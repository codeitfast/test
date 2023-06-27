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
      colors: {
        'Atom': '#282C34',
      },
      animationIterationCount: {
        '2': '2',
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translate(0px, 0px)", opacity: 1 },
          "50%": { color: 'blue', transform: "translate(100px, -100px)", opacity: .6, width:'0px' },
          "100%": {color: 'blue', transform: "translate(100px, -100px)", opacity: 1, width: "0px"}
        },
        appear: {
          "0%": {transform: "translate(0px, 0px)", opacity: 0, width: "0px"},
          "100%": {width: "100%", opacity: 1}
        }
      },
      animation: {
        wiggle: "wiggle 400ms ease-in",
        appear: "appear 400ms ease-out 2s" //ahhhh this isn't running and I have no idea why
      }
    }
  },
  plugins: [require("daisyui")],
}
