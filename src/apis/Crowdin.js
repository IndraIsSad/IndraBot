const { APIWrapper } = require('../')
const Crowdin = require('crowdin-without-vulnerability')

module.exports = class CrowdinAPI extends APIWrapper {
  constructor () {
    super({
      name: 'crowdin',
      envVars: ['CROWDIN_API_KEY', 'CROWDIN_PROJECT_ID']
    })
  }

  load () {
    return new Crowdin({
      apiKey: "1DT16vcCjfAS79Ar6sybJfAt23ay2Cko",
      endpointUrl: `https://api.crowdin.net/api/project/example`
    })
  }
}
