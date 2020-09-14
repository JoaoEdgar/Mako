const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'handholding',
	description: 'Segure as mãos de alguém!',
    aliases: ['segurarmao', 'hh'],
    usage: '$handholding',
    cooldown: 3,
	async execute(message, args, client) {

    let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

    let random = ['https://cdn.discordapp.com/attachments/506326252689555468/751851536241393794/tenor.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751851796124926132/tenor.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751852726618685561/tenor_1.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751852868696277012/tenor.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751852967640170596/tenor_1.gif']
    let img = Math.floor(Math.random() * random.length)

    const solo = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`O bot da panelinha segurou as mãos de ${message.author}! :handshake:`)
    .setImage(random[img])
    .setFooter("Gifs por Fernanda ✾")


    if(!user) return message.channel.send(solo)

    const embed = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`${message.author} segurou as mãos de ${user} :handshake: `)
    .setImage(random[img])
    message.channel.send(embed)
    .setFooter("Gifs por Fernanda ✾")






    }
}