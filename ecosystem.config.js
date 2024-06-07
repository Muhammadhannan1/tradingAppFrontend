/* eslint-disable no-undef */

// module.exports = {
//   name: 'NMO Teachers',
//   script: 'serve',
//   env: {
//     PM2_SERVE_PATH: 'build',
//     PM2_SERVE_PORT: 3200,
//   },
// };

module.exports = {
    apps: [
      {
        name: 'KuCoin trading analytics',
        script: './server.js',
      },
    ],
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
  };
  