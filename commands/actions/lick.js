const Discord = require('discord.js')

module.exports = {
    name: 'lick',
	description: 'Passa a lambida em alguém',
    aliases: ['lamber'],
    usage: '$lick',
    cooldown: 3,
	async execute(message, args, client) {

        let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();


    let random = ['https://cdn.discordapp.com/attachments/506326252689555468/751857063998652527/tenor.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751857354810720276/tenor_1.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751857483106091088/tenor.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751857604799758356/tenor_3.gif', 'https://cdn.discordapp.com/attachments/506326252689555468/751857757237411870/tenor_4.gif']
    let img = Math.floor(Math.random() * random.length)

    const solo = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`O bot da panelinha lambeu ${message.author}! :flushed:`)
    .setImage(random[img])
    .setFooter("Gifs por Fernanda ✾")

    if(!user) return message.channel.send(solo)

    const embed = new Discord.MessageEmbed()
    .setTitle("Opa!")
    .setDescription(`${message.author} lambeu ${user}! :flushed: `)
    .setImage(random[img])
    .setFooter("Gifs por Fernanda ✾")
    message.channel.send(embed)





    }
}