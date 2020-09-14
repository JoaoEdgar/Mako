const Discord = require('discord.js')

module.exports = {
    name: 'morder',
	description: 'Morda alguém! Muhuauahua',
    aliases: ['morder', 'bite'],
    usage: '$morder',
    cooldown: 3,
	async execute(message, args, client) {

    let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

    let random = ['https://cdn.discordapp.com/attachments/506326252689555468/751854769194401952/tenor.gif', 'https://cdn.discordapp.com/attachments/490611405813448706/751854989600620705/tenor_1.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751855141912576050/tenor_2.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751855280953753750/tenor.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751855388391112815/tenor_1.gif']
    let img = Math.floor(Math.random() * random.length)

    const solo = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`O bot da panelinha mordeu ${message.author}! :man_vampire:`)
    .setImage(random[img])
    .setFooter("Gifs por Fernanda ✾")


    if(!user) return message.channel.send(solo)

    const embed = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`${message.author} mordeu ${user}! :man_vampire: `)
    .setImage(random[img])
    .setFooter("Gifs por Fernanda ✾")
    message.channel.send(embed)





    }
}