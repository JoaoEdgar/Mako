
const Discord = require("discord.js");
const cliente = require('nekos.life');
const neko = new cliente();

module.exports = {
    name: 'hug',
	description: 'Abrace alguém!',
    aliases: ['abraçar'],
    usage: '$hug',
    cooldown: 5,
	async execute(message, args, client) {



        let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

        let body = await neko.sfw.hug()

        const embed2 = new Discord.MessageEmbed()
        .setTitle("Opa")
        .setDescription(`O bot da panelinha abraçou ${message.author} :pleading_face:`)
        .setImage(body.url);

        if(!user) return message.channel.send(embed2)






        const embed = new Discord.MessageEmbed()
        .setTitle("Opa")
        .setDescription(`${message.author} abraçou ${user} :pleading_face:`)
        .setImage(body.url);
        message.channel.send(embed)

        

        

    }
}