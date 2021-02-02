const { APIWrapper } = require('../')
const SteamLadder = require('steamladder')

module.exports = class SteamLadderAPI extends APIWrapper {
  constructor () {
    super({
      name: 'steamladder',
      envVars: ['STEAM_LADDER_API_KEY']
    })
    this.name = 'steamladder'
    this.envVars = ['STEAM_LADDER_API_KEY']
  }

  load () {
    return new SteamLadder("72drgt456843455vfdb4d24c8966630e6ed")
  }
}
