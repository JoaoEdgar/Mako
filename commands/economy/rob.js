const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'rob',
	description: 'Roube alguém',
    aliases: ['roubar'],
    usage: '$rob',
    cooldown: 0,
	async execute(message, args, client) {

    let user = message.mentions.members.first()
    let targetuser = await db.fetch(`money_${user.id}`) // fetch mentioned users balance
    let author = await db.fetch(`money_${message.author.id}`) // fetch authors balance


    if (!user) {
        return message.channel.send('Você não disse quem vai roubar!')
    }
    if (targetuser < 0) { // if mentioned user has 0 or less, it will return this.
        return message.channel.send(`:x:${user} Não tem dinheiro para ser roubado!`)
    }


    let random = Math.floor(Math.random() * 200) + 1; // random number 200-1, you can change 200 to whatever you'd like
    let porcentagem = Math.floor(Math.random() * 100)



    let embed = new Discord.MessageEmbed()
    .setDescription(`${message.author} Você roubou ${user} e ficou com ${random}!`)
    .setColor("GREEN")
    .setTimestamp()
    let embed2 = new Discord.MessageEmbed()
    .setDescription(`Você tentou roubar ${user} e não conseguiu! Você perdeu ${random}`)
    .setColor("RED")
    .setTimestamp()

    if(porcentagem < 50) {
        message.channel.send(embed2)
         db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
    }
    if(porcentagem > 50) {
        message.channel.send(embed)
        db.subtract(`money_${message.guild.id}_${user.id}`, random)
        db.add(`money_${message.guild.id}_${message.author.id}`, random)
        }
    }
}