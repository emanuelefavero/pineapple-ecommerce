/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs5: '150px',
        xs4: '220px',
        xs3: '320px',
        xs2: '430px',
        xs: '570px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },

      wordSpacing: {
        tight: '-0.1em',
      },

      // letterSpacing: {
      //   tighter2: '-0.01em',
      // },

      height: {
        'custom-mobile': '29rem',
      },
    },
  },
  variants: {
    wordSpacing: ['responsive'], // enable responsive variants for word spacing
    //   letterSpacing: ['responsive'],
  },
  plugins: [
    // * CUSTOM UTILITY CLASSES
    // function ({ addUtilities }) {
    //   addUtilities(
    //     {
    //       '.my-custom-color': {
    //         color: '#8d96f2',
    //       },
    //       '.my-custom-bg': {
    //         backgroundColor: '#172275',
    //       },
    //     },
    //     ['responsive']
    //   )
    // },
  ],
}
