module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components",
        assets: "@/assets",
        views: "@/views",
        network: "@/network"
      }
    },

    devServer: {
      port: 8089,
      host: "localhost",
      open: true
    }
  }
};
