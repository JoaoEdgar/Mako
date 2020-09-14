const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'setprefix',
	async execute(message, args, client) {

        let admin = await db.fetch(`admins_${message.author.id}`)

        if(message.author.id != admin) return message.reply("Você não tem permissão para usar esse cmd!")
        
        else {
            db.set(`prefix_${message.guild.id}`, args.join(" "))
            message.channel.send(`O prefix foi mudado para ${args.join(" ")}`)
        }



    }
}