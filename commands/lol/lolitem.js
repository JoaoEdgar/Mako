const Discord = require('discord.js')
const lol = require('riot-lol')

module.exports = {
    name: 'lolitem',
	description: 'Veja informação sobre um item no lol',
    aliases: ['lolitem'],
    usage: '$lolitem',
    cooldown: 5,
	async execute(message, args, client) {
        if(!message.member.roles.cache.some(r => r.id === '730947659329962044')) return message.channel.send("Apenas pessoas com o cargo **viado do lol** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))

        const argumento = args.join(" ")
        if(!argumento) return message.reply("Cadê o item para eu procurar sobre?").then(msg => msg.delete({timeout: 35000}))
        lol
        .getItem(argumento)
        .then(item => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Informação sobre o item ${argumento}`)
            .addField("Resumo dos stats", item.plaintext)
            .addField("Descrição", item.description)
            .addField("Ouro", item.gold.total)
            .addField("Valor de venda", item.gold.sell)
            
            message.channel.send(embed)
        })
        .catch(e => {
            message.channel.send("Opa! " + e)
        })

    }
}