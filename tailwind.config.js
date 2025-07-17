// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "blue-100": "#EEFE0FE",
                "blue-200": "#D6DBFD",
                "blue-300": "#7A88F7",
                "blue-400": "#FC6BF5",
                "blue-500": "#5C6BF5",
                "blue-600": "#3E4ADB",
                "blue-700": "#2F39B3",
                "blue-800": "#252C8A",
                "blue-900": "#1C2266",
            },
        },
    },
    plugins: [],
};
