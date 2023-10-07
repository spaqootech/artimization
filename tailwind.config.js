/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        whitesmoke: {
          "100": "#f9f9f9",
          "200": "#f7f5f0",
          "300": "#f4f4f4",
          "400": "#efefef",
        },
        limegreen: "#0cd70c",
        darkslategray: {
          "100": "#454249",
          "200": "#333",
          "300": "#182d42",
        },
        gray: {
          "100": "#828282",
          "200": "#797979",
          "300": "#262626",
          "400": "#131924",
          "500": "#0e1b23",
          "600": "#0c0f15",
          "700": "#0c0c0c",
          "800": "#000630",
          "900": "#090909",
          "1000": "rgba(0, 0, 0, 0.61)",
          "1100": "rgba(255, 255, 255, 0)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#e1e1e1",
          "300": "#dfdfdf",
          "400": "#ddd",
          "500": "#d8d8d8",
        },
        lightgray: "#d2d2d2",
        black: "#000",
        tomato: {
          "100": "#ed5e2d",
          "200": "#ee5523",
          "300": "#e43b34",
        },
        silver: {
          "100": "#bbb",
          "200": "#bababa",
        },
        darkgray: {
          "100": "#b2b2b2",
          "200": "#acacac",
        },
        salmon: {
          "100": "#f2645e",
          "200": "#f26160",
        },
        indianred: {
          "100": "#f25c64",
          "200": "#f25b65",
        },
        mediumseagreen: {
          "100": "#37d28e",
          "200": "#20cb98",
        },
        darkorange: "#ff8500",
        dimgray: {
          "100": "#6f6f6f",
          "200": "#555",
        },
        goldenrod: "#e8b954",
        orangered: "#ff6600",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "font-awesome-5-free": "'Font Awesome 5 Free'",
        anton: "Anton",
      },
      borderRadius: {
        "10xs": "3px",
        mini: "15px",
        "181xl": "200px",
        "231xl": "250px",
        "3xs": "10px",
        "25xl": "44px",
        "11xl": "30px",
        xl: "20px",
      },
    },
    fontSize: {
      smi: "13px",
      mini: "15px",
      sm: "14px",
      lgi: "19px",
      "4xs": "9px",
      xl: "20px",
      "13xl-5": "32.5px",
      "lg-9": "18.9px",
      base: "16px",
      "24xl": "43px",
      "3xl": "22px",
      lg: "18px",
      xs: "12px",
      mid: "17px",
      "25xl": "44px",
      "23xl": "42px",
      "19xl": "38px",
      "31xl": "50px",
      "17xl": "36px",
      "9xl": "28px",
      "5xl": "24px",
      "2xl": "21px",
      "16xl": "35px",
      "6xl": "25px",
      "131xl": "150px",
      "43xl": "62px",
      "18xl": "37px",
      "77xl": "96px",
      "26xl": "45px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
