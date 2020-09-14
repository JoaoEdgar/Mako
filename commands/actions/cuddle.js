
const Discord = require("discord.js");
const cliente = require('nekos.life');
const neko = new cliente();

module.exports = {
    name: 'cuddle',
	description: 'Acarinhe em alguém!',
    aliases: ['acarinhar'],
    usage: '$cuddle',
    cooldown: 5,
	async execute(message, args, client) {

        let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

        let body = await neko.sfw.cuddle()

        const embed2 = new Discord.MessageEmbed()
        .setTitle("Opa")
        .setDescription(`O bot da panelinha acarinhou  ${message.author} :smiling_face_with_3_hearts:`)
        .setImage(body.url);

        if(!user) return message.channel.send(embed2)

        const embed = new Discord.MessageEmbed()
        .setTitle("Opa")
        .setDescription(`${message.author} acarinhou ${user}! :smiling_face_with_3_hearts:`)
        .setImage(body.url);
        message.channel.send(embed)

        

        

    }
}