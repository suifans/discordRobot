const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            screens:{
                "small":"375px",
                "xs" :"400px",
            },
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            height: {
                lg: '30rem',
                xl:'34rem',
                big:'40rem',
            },
            spacing:{
                '18':'4.5rem',
                "85":"21.5rem",
                '90':"23rem",
                "97":"28rem",
                '99': "32rem",
                '100':"33rem",
                '104':"38rem",
            },
            colors:{
                transparent: 'transparent',
                current: 'currentColor',
                custom:{
                    DEFAULT:'#292828',
                    light:"#292828",
                    dark:"#292828",
                },
            }

        },
        variants: {
            extend: {},
        },

    },
    plugins: [
        require('tailwind-scrollbar'),
        require('@tailwindcss/line-clamp'),
    ],
    variants: {
        scrollbar: ['rounded']
    }
}
