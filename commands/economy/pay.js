const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'pay',
	description: 'Pague alguém',
    aliases: ['pagar'],
    usage: '$pay',
    cooldown: 0,
	async execute(message, args, client) {
    
    let user = client.users.cache.get(args[1]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

    let valor = args[0]
    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if(valor > bal) return message.channel.send("Você não tem todo esse dinheiro!")
    if(!valor) return message.channel.send("Por favor, insira um valor!")
    if(!user) return message.channel.send("Por favor, diga um usuário para pagar!")

    db.add(`_${message.guild.id}_${user.id}`, valor)
    db.subtract(`money_${message.guild.id}_${message.author.id}`, valor)
    
    message.channel.send(`Você deu ${valor} reais para ${user}`)
    









    }
}