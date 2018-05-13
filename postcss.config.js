const tailwindcss = require("tailwindcss");
const purgecss = require("postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    require("postcss-nested"),
    require("autoprefixer"),
    purgecss({
      content: ["./src/**/*.html"]
    })
  ]
};
