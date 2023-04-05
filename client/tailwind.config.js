/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx,ts}"],
  corePlugins: {
    preflight: false, // リセットCSSの無効化
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
