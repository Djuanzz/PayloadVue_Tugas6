module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        ws: true,
        changeOrigin: true,
      },
      "/foo": {
        target: "http://localhost:5000",
      },
    },
  },
};
