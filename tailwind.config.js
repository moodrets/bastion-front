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
                dark: '#030304', // ранее: dark
                accent: '#FE5900', // ранее warning
                'ash-900': '#161415', // ранее coverColor
                'ash-800': '#191818', // ранее dark-100
                'ash-700': '#302D2D', // ранее button-bg
                'ash-600': '#615D5D', // ранее neutral
                'ash-500': '#898585', // ранее secondary
                'ash-400': '#908888', // ранее secondary-100
            },
            boxShadow: {
                'progress-loader': '0px 0px 15px 0 #FE5900',
            },
        },
    },
    plugins: [],
};
