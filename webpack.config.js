module.exports = {
  entry: './js/script.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.png$/,
      loader: 'file?name=images/[path][name].[ext]',
      includePaths: 'node_modules'
    }]
  },
  externals: {
    'leaflet': 'L',
    'leaflet-geosearch': 'L.Control.GeoSearch',
    'leaflet-geosearch-provider': 'L.GeoSearch.Provider.Google',
    'esri-leaflet': 'L.esri'
  },
  node: {
    fs: 'empty' // this is needed for Handlebars to work
  }
};
