/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            primary: {
                // 100: "#ff6b35",
                // 200: "#ff7d4b",
                300: "#e1e7f0",
                // 400: "#66b2b2",
                400: "#ff948f",
                500: "#ff948f",
                // 600: "#ffc0a3",
            },
            surface: {
                100: "#272833",
                // 200: "#1f1e42",
                // 300: "#393658",
                // 400: "#524f6e",
                500: "#d6d5dd",
                600: "#80869c",
            },
            "on-background": "#e1e7f0",
        },
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
        fontFamily: {
            body: ['"Inter"', "Helvetica", "sans-serif"],
        },
    },
    plugins: [],
};
