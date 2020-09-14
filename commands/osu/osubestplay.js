const Discord = require('discord.js')
const osu = require('node-osu');
const osuApi = new osu.Api("c911b36c834e5c17bffdce0bc07995319f0cf23d", {
    notFoundAsError: true, 
    completeScores: true, 
    parseNumeric: false
})
const fs = require('fs')

module.exports = {
    name: 'osubestplay',
	description: 'Veja informações do melhor recorde de uma pessoa',
    aliases: ['osubest'],
    usage: '$osubestplay',
    cooldown: 5,
	async execute(message, args, client) {

        if(!message.member.roles.cache.some(r => r.id === '747120803853631568')) return message.channel.send("Apenas pessoas com o cargo **Osu!** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))

        osuApi.getUserBest({ u: args }).then(scores => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Melhor play de ${args}`)
            .addField("Nome do map", scores[0].beatmap.title)
            .addField("Pontuação", scores[0].score)
            .addField("Precisão", scores[0].accuracy)
            .addField("Rank", scores[0].rank)
            .addField("PP", scores[0].pp)
            .addField("Data", scores[0].raw_date)
            .addField("Combo máximo", scores[0].maxCombo)
            
            message.channel.send(embed)
        });
    }

}