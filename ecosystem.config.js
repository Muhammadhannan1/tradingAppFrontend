/* eslint-disable no-undef */

// module.exports = {
//   name: 'NMO Teachers',
//   script: 'serve',
//   env: {
//     PM2_SERVE_PATH: 'build',
//     PM2_SERVE_PORT: 3200,
//   },
// };

// module.exports = {
//     apps: [
//       {
//         name: 'KuCoin trading analytics',
//         script: './server.js',
//       },
//     ],
//     resolve: {
//       fallback: {
//         path: require.resolve('path-browserify'),
//       },
//     },
//   };
  
module.exports = {
  apps: [
    {
      name: "KuCoin trading analytics",
      script: "npm",
      args: "run prod",
      instances: "1",
      exec_mode: "fork",  // if there is only one instance, use cluster otherwise
    }
  ]
}

// module.exports = {
//   apps: [
//     {
//       name: 'KuCoin trading analytics',
//       script: 'npm',
//       args: 'run serve',
//       env: {
//         NODE_ENV: 'production',
//       },
//     },
//   ],
// };
