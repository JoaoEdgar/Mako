
const Discord = require("discord.js");
const cliente = require('nekos.life');
const neko = new cliente();

module.exports = {
    name: 'slap',
	description: 'Bata em alguém!',
    aliases: ['tapa'],
    usage: '$slap',
    cooldown: 5,
	async execute(message, args, client) {

        let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

        let body = await neko.sfw.slap()

        const embed2 = new Discord.MessageEmbed()
        .setTitle("Opa")
        .setDescription(`O bot da panelinha bateu em ${message.author} :open_mouth:  `)
        .setImage(body.url);

        if(!user) return message.channel.send(embed2)

        const embed = new Discord.MessageEmbed()
        .setTitle("Opa")
        .setDescription(`${message.author} bateu em ${user}! :rage:  `)
        .setImage(body.url);
        message.channel.send(embed)

        

        

    }
}