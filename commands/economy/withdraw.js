const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'withdraw',
	description: 'Saque dinheiro do banco',
    aliases: ['with', 'sacar'],
    usage: '$withdraw',
    cooldown: 5,
	async execute(message, args, client) {

    let user = message.author;

    let member = db.fetch(`money_${message.guild.id}_${user.id}`)
    let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

    if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(` :white_check_mark: Você retirou todo o seu dinheiro do banco`);
    message.channel.send(embed5)

    } else {

    let embed2 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:red_circle: Diga um valor para sacada`);

    if (!args[0]) {
        return message.channel.send(embed2)
    }
    let embed3 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Você não pode retirar valores negativos`);

    if (message.content.includes('-')) { 
        return message.channel.send(embed3)
    }
    let embed4 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`Você não tem tudo isso de dinheiro para retirar!`);

    if (member2 < args[0]) {
        return message.channel.send(embed4)
    }

    let embed5 = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`:white_check_mark: Você retirou ${args[0]} do banco!`);

    message.channel.send(embed5)
    db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
    db.add(`money_${message.guild.id}_${user.id}`, args[0])
        }
    }
}