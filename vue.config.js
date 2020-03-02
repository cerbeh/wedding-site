module.exports = {
  publicPath: '',
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3030',
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
