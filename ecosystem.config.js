module.exports = {
  apps: [
    {
      name: 'hotdog',
      script: './dist/server.js',
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'one two',
      instances: 1,
      output: 'logs/out.log',
      error: 'logs/error.log',
      log: 'logs/combined.outerr.log',
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
      host: '111.229.70.117',
      port: '22',
      ref: 'origin/master',
      repo: 'https://github.com/liangxinwei/hotdog-backend.git',
      path: '/data/hotdog_backend',
      'ssh_options': 'StrictHostKeyChecking=no',
      'post-deploy': 'pm2 reload ecosystem.config.js --env production'
    }
  }
};
