module.exports = {
  apps: [
    {
      name: 'onile-api',
      script: 'dist/index.js',
      instances: 1,
      exec_mode: 'cluster'
    }
  ]
};
