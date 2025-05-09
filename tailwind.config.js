export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                brand: '"Stalinist One", sans-serif;',
                secondary: 'Michroma, sans-serif;',
                simple: 'Arial, Helvetica, sans-serif',
                base: 'Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            },
            colors: {
                dark: '#030304',
                coverColor: '#161415',
                warning: '#FE5900',
                secondary: '#898585',
                'secondary-100': '#908888',
                neutral: '#615D5D',
                'button-bg': '#302D2D',
            },
            boxShadow: {
                'progress-loader': '0px 0px 15px 0 #FE5900',
            },
        },
    },
    plugins: [],
};
