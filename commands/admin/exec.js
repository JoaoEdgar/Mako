const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'exec',
	async execute(message, args, client) {

        let admin = await db.fetch(`admins_${message.author.id}`)

        if(message.author.id != admin) return message.reply("Você não tem permissão para usar esse cmd!")
        try {
        const code = args.slice(0).join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
            evaled = require("util").inspect(evaled);

        message.channel.send(`\`\`${evaled}\`\``);
        } catch (err) {
            
        }
    }
}