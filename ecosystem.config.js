module.exports = {
  apps: [
    {
      name: 'hotdog',
      script: './',
      watch: [
        'dist'
      ],
      env: {
        'PORT': 5000,
        'NODE_ENV': 'development'
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      env_production: {
        'PORT': 5000,
        'NODE_ENV': 'production',
      }
    }
  ]
};
