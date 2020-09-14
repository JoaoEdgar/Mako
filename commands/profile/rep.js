const Discord = require('discord.js')
const ms = require('parse-ms')
const db = require('quick.db')

module.exports = {
      name: 'rep',
      description: 'Agradeça alguém dando um rep para ela!',
      aliases: [''],
      usage: '$rep',
      cooldown: 5,
	async execute(message, args, client) {

        let rep = await db.fetch(`rep_${message.guild.id}_${message.author.id}}`)
        let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

        let timeout = 86400000

        let repcd = await db.fetch(`repcd_${message.author.id}`)

        if (repcd !== null && timeout - (Date.now() - repcd) > 0) {
            let time = ms(timeout - (Date.now() - repcd));
            message.channel.send(`Você já deu um rep hoje! volte em **${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos**!`)
        
        } else {
            message.channel.send(`Você deu um ponto de reputação para ${user}! `)
            db.add(`rep_${message.guild.id}_${user.id}`, 1)
            db.set(`repcd_${message.author.id}`, Date.now())

        }
    }
}