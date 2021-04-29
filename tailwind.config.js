module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      body: ['Open Sans'],
    },
    extend: {
      colors: {
        custom: '#232323',
        box: {
          default: '#373737',
          disabled: '#500707',
        },

        send: '#4c4c4b',
        '#3bbf74': '#3bbf74',
        '#589aaa': '#589aaa',
        '#e76f68': '#e76f68',
        '#facf5a': '#facf5a',
        '#df8649': '#df8649',
      },
      textColor: {
        grayish: '#656565',
      },
      flex: {
        daniel: '1 0 100%',
      },
      padding: {
        squared: '',
      },
    },
  },
  variants: {
    extend: {},
  },
};
