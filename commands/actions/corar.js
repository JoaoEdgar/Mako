const Discord = require('discord.js')

module.exports = {
    name: 'corar',
	description: 'Fique corado!',
    aliases: ['blush'],
    usage: '$morder',
    cooldown: 3,
	async execute(message, args, client) {

    let random = ['https://cdn.discordapp.com/attachments/506326252689555468/751855888721248296/tenor_3.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751856198487113778/tenor.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751856296549941370/tenor_1.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751856428536430748/tenor_2.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751856525496287352/tenor_4.gif']
    let img = Math.floor(Math.random() * random.length)

    const solo = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`${message.author} está corando! :grimacing: `)
    .setImage(random[img])
    .setFooter("Gifs por Fernanda ✾")

        message.channel.send(solo)





    }
}