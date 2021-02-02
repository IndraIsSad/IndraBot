const { ShardingManager } = require('discord.js')
//require('dotenv').config();
const manager = new ShardingManager('./index.js', {
  token: "ODA1MDI2MDc5NTkyNDE1MjYy.YBU49g.G39kMpuhiOu4Z2LqPYKFRD-4xfM",
  totalShards: parseInt(process.env.SHARD_COUNT) || 'auto'
})

manager.spawn()
manager.on('shardCreate', shard => console.log(`Launching shard ${shard.id}`))
