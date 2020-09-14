const Discord = require('discord.js')
const lol = require('riot-lol')
const { sum } = require('mathjs')

module.exports = {
    name: 'lolspell',
	description: 'Veja informação sobre um spell no lol',
    aliases: ['lolfeitiço'],
    usage: '$lolspell',
    cooldown: 5,
	async execute(message, args, client) {
        if(!message.member.roles.cache.some(r => r.id === '730947659329962044')) return message.channel.send("Apenas pessoas com o cargo **viado do lol** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))

        const opa = args.join(" ")
        if(!opa) return message.reply("Cadê o feitiço para eu procurar sobre?").then(msg => msg.delete({timeout: 35000}))
        lol.getSummoner(opa).then(summoner => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Informação sobre o feitiço ${opa}`)
        .setDescription(summoner.description)
        .addField("Dica in-game", summoner.tooltip)
        .addField("Cooldown", summoner.cooldown)
        .addField("Máximo de cargas", summoner.maxammo)
        
        message.channel.send(embed)
  })
  .catch(e => {
      message.channel.send("Opa! " + e)
  })

    }
}