const { APIWrapper } = require('../')
const Steam = require('steamapi')

module.exports = class SteamAPI extends APIWrapper {
  constructor () {
    super({
      name: 'steam',
      envVars: ['STEAM_API_KEY']
    })
  }

  load () {
    return new Steam("C23F6853AA35F854JHI6J75OKJ5HFHJKM")
  }
}
