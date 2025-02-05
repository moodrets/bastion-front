export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                brand: '"Stalinist One", sans-serif;',
                secondary: 'Michroma, sans-serif;',
                base: 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            },
            colors: {
                dark: '#030304',
                secondary: '#898585',
                neutral: '#615D5D',
                'button-bg': '#302D2D66',
            },
        },
    },
    plugins: [],
};
