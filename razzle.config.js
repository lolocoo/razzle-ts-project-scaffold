const Dotenv = require('dotenv-webpack')

module.exports = {
  options: {
    buildType: 'single-page-application',
  },
  plugins: ['typescript', new Dotenv()],
}
