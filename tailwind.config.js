module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, 
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('images/hero-flowers.jpg')",
        'white-wedding': "url('images/white-wedding.jpg')",
        'footer-flowers': "url('images/footer-bg.jpg')",
      }),
      colors: {
        'calm-peach': '#fff7f2',
        'light-peach': '#fffbf9',
        'calm-text': '#beb7b0',
        'bold-calm': '#978b82',
        'slight-brown': '#392e26',
        'grey-brown': '#a99e96',
        'chocolate': '#5a4d44',
        'footer': '#fbf6fa',
      },
      fontFamily: {
        'display-fair': ["Playfair Display", "sans-serif"],
        'lato': ["Lato", "sans-serif"],
        'formal-script': ["Petit Formal Script", "sans-serif"],
        'jose': ["Josefin Sans", "sans-serif"]
      },
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
