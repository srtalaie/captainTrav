const proxy = require("http-proxy-middleware");

// module.exports = app => {
//   app.use(proxy("/api", { target: "http://localhost:3001/" }));
// };

module.exports = function(app) {
  app.use('/api', proxy({
    target: 'http://localhost:3001',
    changeOrigin: true,
  }));
};