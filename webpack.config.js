module.exports = {
  entry: "./js/script.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  node: {
    fs: 'empty' // this is needed for Handlebars to work
  }
};
