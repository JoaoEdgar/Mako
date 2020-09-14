const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'deposit',
	description: 'Deposite seu dinheiro!',
    aliases: ['dep'],
    usage: '$dep',
    cooldown: 5,
	async execute(message, args, client) {

        let user = message.author;

        let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let member2 = db.fetch(`bank_${message.guild.id}_${message.author.id}`)
      
        if (args[0] == 'all') {
          let money = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
          let bank = await db.fetch(`bank_${message.guild.id}_${message.author.id}`)
      
          let embedbank = new Discord.MessageEmbed()
          .setColor('#FFFFFF')
          .setDescription(":red_circle: Você não tem dinheiro para depositar!")
      
          if(money === 0) return message.channel.send(embedbank)
      
          db.add(`bank_${message.guild.id}_${message.author.id}`, money)
          db.subtract(`money_${message.guild.id}_${message.author.id}`, money)
          let embed5 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Você depositou todo o seu dinheiro no banco!`);
        message.channel.send(embed5)
        
        } else {
        
        let embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Diga uma quantidade para depositar`);
        
        if (!args[0]) {
            return message.channel.send(embed2)
            .catch(err => console.log(err))
        }
        let embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`Você não pode depositar números negativos!`);
      
        if (message.content.includes('-')) { 
            return message.channel.send(embed3)
        }
        let embed4 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:red_circle: Você não tem tudo isso de dinheiro para depositar`);
      
        if (member < args[0]) {
            return message.channel.send(embed4)
        }
      
        let embed5 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`:white_check_mark: Você depositou ${args[0]} em seu banco!`);
      
        message.channel.send(embed5)
        db.add(`bank_${message.guild.id}_${message.author.id}`, args[0])
        db.subtract(`money_${message.guild.id}_${message.author.id}`, args[0])


        }
    }
}