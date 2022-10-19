/** @type {import("prettier").Config} */
module.exports = {
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
  semi: false,
  trailingComma: "es5",
  singleQuote: true,
  tabWidth: 2,
  useTabs: false
};
