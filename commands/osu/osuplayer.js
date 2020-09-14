const Discord = require('discord.js')
const osu = require('node-osu');
const osuApi = new osu.Api("c911b36c834e5c17bffdce0bc07995319f0cf23d", {
    notFoundAsError: true, 
    completeScores: false, 
    parseNumeric: false
})

module.exports = {
    name: 'osuplayer',
	description: 'Veja o perfil de alguém no osu ( apenas com o cargo Osu! )',
    aliases: ['osupl'],
    usage: '$osu',
    cooldown: 5,
	async execute(message, args, client) {

        if(!message.member.roles.cache.some(r => r.id === '747120803853631568')) return message.channel.send("Apenas pessoas com o cargo **Osu!** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))


        osuApi.getUser({u: args}).then(user => {

        const embed = new Discord.MessageEmbed()
        .setTitle(`Data para ${args}`)
        .setDescription("Tudo o que precisa saber!")
        .addField("Nome", user.name)
        .addField("País", user.country)
        .addField("Nível", user.level)
        .addField("Precisão", user.accuracyFormatted)
        .addField("SS's", user.counts.SS)
        .addField("S's", user.counts.S)
        .addField("A's", user.counts.A)
        .addField("Total de partidas", user.counts.plays)
        .addField("PP", user.pp.raw)
        .addField("Rank", user.pp.rank)
        .addField("Rank de país", user.pp.countryRank)

            message.channel.send(embed)

        })
    }
}