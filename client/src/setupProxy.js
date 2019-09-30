const proxy = require("http-proxy-middleware");

// module.exports = app => {
//   app.use(proxy("/api/*", { target: "http://localhost:3001/" }));
// };

// module.exports = function(app) {
//   app.use('/api', proxy({
//     target: 'https://safe-crag-59591.herokuapp.com/',
//     changeOrigin: true,
//     router: {
//       // when request.headers.host == 'dev.localhost:3000',
//       // override target 'http://www.example.org' to 'http://localhost:8000'
//       'dev.localhost:3000': 'http://localhost:3001'
//     }
//   }));

// module.exports = function(app) {
//   app.use(proxy('/api/**', { 
//     target: 'http://localhost:3001',
//     router: {
//       'https://safe-crag-59591.herokuapp.com/api/**': "https://safe-crag-59591.herokuapp.com/"
//   } 
//   }));

module.exports = function(app) {
  app.use(proxy('/api/**', { 
    target: 'https://safe-crag-59591.herokuapp.com/*',
    router: {
      'http://localhost:3001/**': "http://localhost:3001"
  } 
  })); 
};