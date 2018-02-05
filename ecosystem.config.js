module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: '54.169.212.231',
      key: '~/.ssh/id_rsa',
      ref: 'origin/master',
      repo: 'git@github.com:JoaquimBellmunt/tutorial-pt-2.git',
      path: '/home/ubuntu/tutorial-2',
      'post-deploy': 'npm install && npm run-script restart'
    }
  }
}
