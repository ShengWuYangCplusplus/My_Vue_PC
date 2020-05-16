const webpack = require("webpack");
const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");

const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "/",
  outputDir: process.env.outputDir,
  assetsDir: "assets",
  lintOnSave: false,
  css: {
    extract: true,
    sourceMap: false,
    modules: false
  },
  devServer: {
    disableHostCheck: true,
    open: true,
    host: "localhost",
    port: 6001,
    hot: true,
    proxy: {
      '/': {
        target: "http://youziweb.cn:8888"
      }
    }
  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuert: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      }),
      new CompressionWebpackPlugin({
        test: /\.(js|css|svg|woff|ttf|json|html)$/,
        threshold: 30240,
        deleteOriginalAssets: false
      })
    ],
    externals: {
      AMap: "AMap",
      vue: "Vue",
      "vue-router": "VueRouter",
      axios: "axios",
      "echarts": "echarts",
      'viewer':'Viewer',
      'nprogress':'NProgress',
    },
    resolve: {
      alias: {
        "@": resolve("src"),
        component: resolve("src/components"),
        views: resolve("src/views"),
        uitls: resolve("src/utils")
      }
    }
  },
  chainWebpack:config=>{
    config.plugins.delete('prefetch')
    config.module
            .rule('images')
            .use('image-webpack-loader')
            .loader('image-webpack-loader')
            .options({ bypassOnDebug: true })
            .end();
    config.optimization.minimize(true);
    config.optimization.splitChunks({
      chunks:'all'
    })
  },
};