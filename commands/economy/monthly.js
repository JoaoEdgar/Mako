const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')


module.exports = {
    name: 'monthly',
	description: 'Pegue uma certa quantia de dinheiro todos os mesês!',
    aliases: ['mensal'],
    usage: '$monthly',
    cooldown: 5,
	async execute(message, args, client) {

    let timeout = 2592000000 // 30 days in milliseconds, change if you'd like.
    let amount = Math.floor(Math.random() * 5000) + 1;
   
    let monthly = await db.fetch(`monthly_${message.author.id}`);

    if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
        let time = ms(timeout - (Date.now() - monthly));

        message.channel.send(`Você já coletou sua recompensa mensal, volte em **${time.days} dias, ${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos**!`)
    } else {
    let embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author}`, message.author.displayAvatarURL())
    .setColor("GREEN")
    .setDescription(`**Recompensa Mensal**`)
    .addField(`Valor:`, amount)

    message.channel.send(embed)
    db.add(`money_${message.guild.id}_${message.author.id}`, amount)
    db.set(`monthly_${message.author.id}`, Date.now())
        
        }
    }

}