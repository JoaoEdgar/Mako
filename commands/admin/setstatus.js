const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setstatus',
	description: 'Muda o status do bot',
    aliases: ['activity'],
    usage: '$status',
    cooldown: 5,
	async execute(message, args, client) {

        let admin = await db.fetch(`admins_${message.author.id}`)

        if(message.author.id != admin) return message.reply("Você não tem permissão para usar esse cmd!")

        client.user.setActivity(`${args.join(" ")}`)
        message.channel.send(`Meu status foi mudado para ${args.join(" ")} por ${message.author}`)




    }
}