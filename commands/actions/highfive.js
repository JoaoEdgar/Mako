const Discord = require('discord.js')

module.exports = {
    name: 'highfive',
	description: 'Faça um toca aqui com alguém!',
    aliases: ['tocaaqui', 'ta'],
    usage: '$handholding',
    cooldown: 3,
	async execute(message, args, client) {

    let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

    let random = ['https://cdn.discordapp.com/attachments/506326252689555468/751858844896067675/tenor.gif?size=2048', 'https://cdn.discordapp.com/attachments/506326252689555468/751859173142036521/tenor_1.gif?size=2048', 'https://cdn.discordapp.com/attachments/506326252689555468/751859402830512138/tenor_2.gif?size=2048', 'https://cdn.discordapp.com/attachments/506326252689555468/751859688475197510/tenor_3.gif?size=2048', 'https://cdn.discordapp.com/attachments/506326252689555468/751859916712575016/tenor_4.gif?size=2048']
    let img = Math.floor(Math.random() * random.length)

    const solo = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`O bot da panelinha fez um toca aqui com ${message.author}! :pray:`)
    .setImage(random[img])
    .setFooter("Gifs por Fernanda ✾")


    if(!user) return message.channel.send(solo)

    const embed = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`${message.author} fez um toca aqui com ${user} :pray: `)
    .setImage(random[img])
    message.channel.send(embed)
    .setFooter("Gifs por Fernanda ✾")






    }
}