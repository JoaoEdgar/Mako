const Discord = require('discord.js')
const lol = require('riot-lol')

module.exports = {
    name: 'lolruna',
	description: 'Veja informação sobre uma runa no lol',
    aliases: ['lolrune'],
    usage: '$lolruna',
    cooldown: 5,
	async execute(message, args, client) {

        if(!message.member.roles.cache.some(r => r.id === '730947659329962044')) return message.channel.send("Apenas pessoas com o cargo **viado do lol** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))
        
        const runinha = args.join(" ")
        if(!runinha) return message.reply("Cadê a runa para eu procurar sobre?").then(msg => msg.delete({timeout: 35000}))
        lol.getRune(runinha).then(rune => {
        const embed = new Discord.MessageEmbed()
        .setTitle(`Descrição para a runa ${runinha}`)
        .addField("Atributos", rune.description)
        message.channel.send(embed)
        })
        .catch(e => {
            message.channel.send("Opa! " + e)
        })
    }
}