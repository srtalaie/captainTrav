const proxy = require("http-proxy-middleware");

// module.exports = app => {
//   app.use(proxy("/api/*", { target: "https://safe-crag-59591.herokuapp.com/", changeOrigin: true, }));
// };

module.exports = function(app) {
  app.use('/api/*', proxy({
    target: 'http://localhost:3001',
    changeOrigin: true,
    logLevel: 'debug',
    router: {
      'safe-crag-59591.herokuapp.com': 'https://safe-crag-59591.herokuapp.com'
    }
  }));

// module.exports = app => {
//   app.use(proxy('/api/**', { 
//     target: 'https://safe-crag-59591.herokuapp.com',
//     changeOrigin: true,
//     router: function(req) {
//       console.log(req.headers.host);
//       if(req.headers.host !== 'localhost:3000'){
//         return 'https://safe-crag-59591.herokuapp.com'
//       } else {
//         return 'http://localhost:3001'
//       }
//     }
//   }));

// module.exports = (app) => {
//   app.use(proxy('/api/**', { 
//     target: 'https://safe-crag-59591.herokuapp.com',
//     changeOrigin: true,
//     router: {
//       'localhost:3000/api/**': "http://localhost:3001/api/**"
//     } 
//   })); 
};