var path = require('path');

module.exports = {
  entry: './js/script.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: ['js', 'node_modules'],
    alias: {
      'esri-leaflet': path.resolve(__dirname, './node_modules/esri-leaflet/dist/esri-leaflet-src.js'),
      'leaflet-geosearch': path.resolve(__dirname, './node_modules/leaflet-geosearch/src')
    }
  },
  module: {
    loaders: [{
      test: /\.(png|gif)$/,
      loader: 'file?name=[path][name].[ext]',
      includePaths: 'node_modules'
    }, {
      test: /\.css$/,
      loaders: ['style', 'css'],
    }, {
      test: /^leaflet$/,
      loader: 'exports?L'
    }, {
      test: /leaflet-geosearch.\.js$/,
      loader: 'exports'
    }, {
      test: /esri-leaflet$/,
      loader: 'exports'
    }]
  },
  node: {
    fs: 'empty' // this is needed for Handlebars to work
  }
};
