const Discord = require('discord.js')
const osu = require('node-osu');
const osuApi = new osu.Api("c911b36c834e5c17bffdce0bc07995319f0cf23d", {
    notFoundAsError: true, 
    completeScores: true, 
    parseNumeric: true,
})

module.exports = {
    name: 'osubeatmap',
	description: 'Veja as informações de um beatmap',
    aliases: ['osubp'],
    usage: '$osubeatmap',
    cooldown: 5,
	async execute(message, args, client) {

        if(!message.member.roles.cache.some(r => r.id === '747120803853631568')) return message.channel.send("Apenas pessoas com o cargo **Osu!** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))


        osuApi.getBeatmaps({ b: args }).then(beatmaps => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Informações do mapa ${args}`)
            .addField("ID", beatmaps[0].title)
            .addField("Criador", beatmaps[0].creator)
            .addField("Artista", beatmaps[0].artist)
            .addField("Linguagem", beatmaps[0].genre)
            .addField("BPM", beatmaps[0].bpm)
            .addField("Modo", beatmaps[0].mode)
            .addField("Categoria", beatmaps[0].approvalStatus)
            .addField("Combo máximo", beatmaps[0].maxCombo)
            .addField("Dificuldade", beatmaps[0].difficulty.rating + " Estrelas")
            .addField("Jogadas", beatmaps[0].plays)
            message.channel.send(embed)
        });


    }

}