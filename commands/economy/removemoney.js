const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'removemoney',
	description: 'Remova dinheiro da conta de alguém',
    aliases: ['moneyremove', 'remmoney'],
    usage: '$removemoney',
    cooldown: 5,
	async execute(message, args, client) {

    if(message.author.id != "417381720879529995") return;

    if (!args[0]) return message.reply('Você não disse o valor pra adicioanr!')
    if (isNaN(args[0])) return message.reply('Isso é um número?')

    let user = message.mentions.users.first() || message.author
    message.channel.send('Eu removi **' + args[0] + ' reais ** da conta do ' + user.username)
    if(!user) return db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0])
    if(user) return db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
    }
}