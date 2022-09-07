module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',

  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary) / <alpha-value>)',
        secondary: 'rgba(var(--secondary)/ <alpha-value>)',
        buttonTextPrimary: 'rgba(var(--button-text-primary) / <alpha-value>)'
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
