module.exports = {
  apps: [
    {
      name: 'hotdog',
      script: './dist/server.js',
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'one two',
      instances: 1,
      autorestart: true,
      watch: false,
      // eslint-disable-next-line @typescript-eslint/camelcase
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],

  deploy: {
    production: {
      user: 'root',
      host: [
        {
          host: '111.229.70.117',
          port: 5000
        }
      ],
      ref: 'origin/master',
      repo: 'https://github.com/liangxinwei/hotdog-backend.git',
      path: '/data/hotdog_backend',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
