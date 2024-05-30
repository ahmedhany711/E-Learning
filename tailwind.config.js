/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    important: true,
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                //Heading
                heading: ["Montserrat", " sans-serif"],
                //content
                content: ["Lato", "sans-serif"],
                // font-headingFont
                headingFont: ["Playfair Display", "serif"],
                // font-contentFont
                contentFont: ["Noto Sans", "sans-serif"],
            },
            textAlignment: ["responsive"],
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
            },
            colors: {
                primaryColor: "#ff6575",
                firstButton: "#f4f4f4",
                SecondButton: "#B4A7F5",
                buttonHover: "##e72f41",
                headerText: "#685f78 ",
                title: "#002058",
                homeOverly: "#180e0e", //0.6  opacity
                active: "#ebdad0",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem",
                },
            },
        },
    },
    plugins: [],
};