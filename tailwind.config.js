/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{ts,tsx,jsx,js}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
        },
        extend: {
            colors: {
                primary: {
                    50: '#ebfaf3',
                    100: '#c2f0dc',
                    200: '#99e6c5',
                    300: '#70dcae',
                    400: '#47d297',
                    500: '#47d297',
                    600: '#238f62',
                    700: '#238f62',
                    800: '#0f3d2a',
                    900: '#05140e',
                    DEFAULT: '#3ccf91',
                },
                appPurple: '#5032c1',
                appOrange: '#fbb348',
                lightRed: '#ff6996',
                appBlue: '#3c5ccf',
                textGray: '#ffffff80',
                dark: '#222',
            },
        },
    },
    plugins: [],
};
