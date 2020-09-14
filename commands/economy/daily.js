const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'daily',
	description: 'Pegue uma certa quantia de dinheiro todos os dias!',
    aliases: ['diaria'],
    usage: '$daily',
    cooldown: 5,
	async execute(message, args, client) {

    let timeout = 86400000 
    let amount = Math.floor(Math.random() * 500)
    
    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Você já coletou seu daily de hoje! Você pode voltar em **${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos**!`)
    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author}`, message.author.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(`**Daily**`)
    .addField(`Valor:`, amount)

    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
            

        }
    }
}