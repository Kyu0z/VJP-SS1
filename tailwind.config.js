module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-navbar-player": "calc(100vh - 6rem - 6rem)",
      },
      shadow: {
        sidebar: "box-shadow: 26px 19px 25px -20px rgba(0,0,0,0.77);",
      },
    },
  },
  plugins: [],
};
