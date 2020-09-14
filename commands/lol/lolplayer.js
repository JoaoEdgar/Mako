const Discord = require('discord.js')
const opggScrape = require('opgg-scrape');


module.exports = {
    name: 'lolplayer',
	description: 'Veja informação sobre um player no lol',
    aliases: ['loljogador'],
    usage: '$lolplayer',
    cooldown: 5,
	async execute(message, args, client) {
        if(!message.member.roles.cache.some(r => r.id === '730947659329962044')) return message.channel.send("Apenas pessoas com o cargo **viado do lol** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))
        const user = args.join(" ")
        if(!user) return message.reply("Cade o usuário para eu procurar?").then(msg => msg.delete({timeout: 35000}))

        opggScrape.getStats(`${user}`, {region: 'br', refresh: true}).then(stats => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Status de ${user}`)
            .addField("Level", stats.level)
            .addField("Rank", stats.rank)
            .addField("Rank", stats.KDARatio)
            .addField("PDL", stats.rankedLP)
            .addField("Kills", stats.KDA.kills)
            .addField("Mortes", stats.KDA.deaths)
            .addField("Assistências", stats.KDA.assists)
            .setThumbnail(stats.avatarURL)
            message.channel.send(embed)
        })
        .catch(e => {
            message.channel.send("Opa! " + e)
        })
    }
}