module.exports = {
  entry: './js/script.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  externals: {
    'leaflet': 'L'
  },
  node: {
    fs: 'empty' // this is needed for Handlebars to work
  }
};
