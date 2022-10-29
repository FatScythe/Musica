/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        light: "#EFEEE0",
        dark: "#1D2123",
        dark3: "#1c1e1e",
        dark2: "#A4C7C6",
        primary: "#3671E9",
        secondary: "#FACD66",
        darkglass: "rgba(255,255,255,0.07)",
        glass2: "rgba(255,255,255,0)",
      },
      dropShadow: {
        "text-sm": "1px 1px 0px rgba(0, 0, 0, 0.90)",
        "text-md": "1px 2px 0px rgba(0, 0, 0, 0.90)",
        "text-lg": "1px 4px 0px rgba(0, 0, 0, 0.90)",
        "text-sh": "7px 5px 5px rgba(0, 0, 0, 0.90)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sx: "0.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      height: {
        xs: "2px",
        "5vh": "5vh",
        "10vh": "10vh",
        "15vh": "15vh",
        "20vh": "20vh",
        "25vh": "25vh",
        "30vh": "30vh",
        "35vh": "35vh",
        "40vh": "40vh",
        "45vh": "45vh",
        "50vh": "50vh",
        "55vh": "55vh",
        "60vh": "60vh",
        "65vh": "65vh",
        "70vh": "70vh",
      },
      minWidth: {
        xs: "320px",
      },
      fontSize: {
        xs: "0.7rem",
        xss: "0.9rem",
        sm: ["clamp(1.00rem, calc(0.92rem + 0.39vw), 1.20rem)", "1.4"],
        base: ["clamp(1.13rem, calc(0.98rem + 0.73vw), 1.50rem)", "1.5"],
        lg: ["clamp(1.27rem, calc(1.03rem + 1.19vw), 1.88rem)", "1.4"],
        xl: ["clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)", "1.4"],
        "2xl": ["clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)", "1.2"],
        "3xl": ["clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)", "1.1"],
        "4xl": ["clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)", "1"],
        "5xl": ["clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)", "1"],
        "6xl": ["clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)", "1"],
        normal: "0.875rem",
      },
      transitionDuration: {
        slow: "1500ms",
      },
    },
  },
  plugins: [],
};
