import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from './webpack.config.babel.js'

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  noInfo: false,
  historyApiFallback: true
}).listen(3000, '127.0.0.1', function (err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:3001');
});
