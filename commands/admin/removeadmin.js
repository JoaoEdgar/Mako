const db = require('quick.db')
const Discord = require('discord.js');

module.exports = {
    name: 'removeadmin',
	description: '',
    aliases: ['adminremove'],
    usage: '$removeuser',
    cooldown: 5,
	async execute(message, args, client) {
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        if(message.author.id != "417381720879529995") return;

        else {
            db.delete(`admins_${user.id}`, user.id)
            message.channel.send(`${user} não é mais um administrador do bot!`)
        }









    }
}