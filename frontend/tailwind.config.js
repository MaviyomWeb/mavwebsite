/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d69e7",
        secondary: "#0F172A",
        "text-primary": "#101828",
        "text-secondary": "#667085",
        "badge-bg": "#ecfdf3",
        "badge-text": "#027a48",
        "dropdown-bg": "#fcfdfb",
      },
      boxShadow: {
        "shadow-1": "0px 2px 8px #20074124",
        "shadow-2": "#0000001E 0px 1px 3px, #0000003D 0px 1px 2px",
        "shadow-3": "0px 7px 15px 0px #00000021, 0px 1px 4px 0px #0000001C",
        "blog-card-shadow-1":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "blog-card-shadow-2":
          "0px 19px 38px  #00000003 ,0px 15px 12px  #00000022 ",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-blue": "linear-gradient(120deg, #9795f0 0%, #fbc8d4 100%)",
        blueLightGradient:
          "linear-gradient(-135deg,rgba(47,62,124,0) 20%,#151d34)",
      },
      gridTemplateColumns: {
        "service-2xl": "1fr repeat(3, 0.9fr)",
        "service-sm": "1fr 1fr",
        "footer-lg": "2fr 1fr 1fr 2fr",
      },
      fontFamily: {
        sensation: "'Sansation'",
        roboto: "'Roboto', sans-serif",
        poppins: "'Poppins', sans-serif",
        deca: "'Lexend Deca', sans-serif",
        michroma: "'Michroma', sans-serif",
        dmSans: "'DM Sans', sans-serif",
        grotesk: "'Space Grotesk', sans-serif",
        openSans: "'Open Sans', sans-serif",
        nunitoSans: "'Nunito Sans', sans-serif",
      },
      screens: {
        xs: "360px",
        tablet: "824px",
        "964Screen": "964px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      animation: {
        bubble: "bubble 800ms ease  infinite alternate",
        CompanySlider_slider: "CompanySlider_slider 15s linear infinite",
        slideIn: "slideIn 500ms ease forwards",
        slideRight: "slideRight 600ms   linear infinite",
        customBounce: "customBounce 800ms ease-in-out infinite alternate",
        sliderReveal: "sliderReveal 1s ease forwards",
      },
      keyframes: {
        bubble: {
          "0%, ": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0.0" },
        },
        CompanySlider_slider: {
          "0%": {
            transform: "translateX(75%)",
          },
          "100%": {
            transform: "translateX(-25%)",
          },
        },

        slideIn: {
          "0%": {
            transform: "translateY(-100px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        slideRight: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(10px)",
          },
        },
        customBounce: {
          "0%": {
            transform: "translateY(16px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        sliderReveal: {
          "0%": {
            transform: "translateY(30px)",
            opacity: 0,
          },

          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
