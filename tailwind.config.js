module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '0.875rem', // 14px
      default: '1rem', //16px
      lg: '1.125rem', //18px
      mobile: '1.5rem', //24px
      xl: '1.75rem', //28px
      '2xl': '2rem', //32px
      '3xl': '3.5rem', //56px
      tablet: '5rem', //80px
      '4xl': '6.25rem', //100px
      '5xl': '9.375rem', //150px
    },
    fontFamily: {
      main: ['Bellefair', 'serif'],
    },
    colors: {
      transparent: 'hsl(0, 0, 0, 4%)',
      red: 'hsl(0 0% 100%)',
      black: 'hsl(230, 35%, 7%)',
      blue: 'hsl(231, 77%, 90%)',
      white: 'hsl(0, 0%, 100%)',
      tabs: 'rgba(128, 128, 128, 0.075)',
      gray: '#383B4B',
      bright: '#880808',
    },

    extend: {
      backgroundImage: {
        'home-bg-desktop': "url('./assets/home/background-home-desktop.jpg')",
        'home-bg-tablet': "url('./assets/home/background-home-tablet.jpg')",
        'home-bg-mobile': "url('./assets/home/background-home-mobile.jpg')",
        'destination-bg-desktop':
          "url('./assets/destination/background-destination-desktop.jpg')",
        'destination-bg-tablet':
          "url('./assets/destination/background-destination-tablet.jpg')",
        'destination-bg-mobile':
          "url('./assets/destination/background-destination-mobile.jpg')",
        'crew-bg-desktop': "url('./assets/crew/background-crew-desktop.jpg')",
        'crew-bg-tablet': "url('./assets/crew/background-crew-tablet.jpg')",
        'crew-bg-mobile': "url('./assets/crew/background-crew-mobile.jpg')",
        'tech-bg':
          "url('./assets/technology/background-technology-desktop.jpg')",
        'tech-bg-tablet':
          "url('./assets/technology/background-technology-tablet.jpg')",
        'tech-bg-mobile':
          "url('./assets/technology/background-technology-mobile.jpg')",
        'hamburger-bg': "url('./assets/shared/icon-hamburger.svg')",
      },
      spacing: {
        458: '28.625rem',
        475: '29.688rem',
        500: '30.75rem',
        700: '43.75rem',
      },
      plugins: [],
    },
  },
};
