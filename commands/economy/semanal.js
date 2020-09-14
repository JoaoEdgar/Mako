const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'weekly',
	description: 'Pegue uma certa quantia de dinheiro todas as semanas!',
    aliases: ['semanal'],
    usage: '$weekly',
    cooldown: 5,
	async execute(message, args, client) {

    let timeout = 604800000 // 7 days in milliseconds, change if you'd like.
    let amount = Math.floor(Math.random() * 1000) + 1;


    let weekly = await db.fetch(`weekly_${message.author.id}`);

    if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
        let time = ms(timeout - (Date.now() - weekly));

        message.channel.send(`Você já coletou sua recompensa semanal! volte em **${time.days} dias, ${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos**!`)
    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author}`, message.author.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(`**Recompensa semanal**`)
    .addField(`Valor:`, amount)

    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    db.set(`weekly_${message.author.id}`, Date.now())
        }
    }
}