const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'bal',
	description: 'Cheque sua poupança',
    aliases: ['money'],
    usage: '$bal',
    cooldown: 5,
	async execute(message, args, client) {

        let user = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

        let cash = db.fetch(`money_${message.guild.id}_${message.author.id}`)
        let bank = db.fetch(`bank_${message.guild.id}_${message.author.id}`)

        
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .addField("Dinheiro em mãos", cash)
        .addField("Dinheiro no banco", bank)


        if(!user) {
            let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)
            message.channel.send(embed)
        } else {
            let cash = db.fetch(`money_${message.guild.id}_${user.id}`)      
            let bank = db.fetch(`bank_${message.guild.id}_${user.id}`) 
            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`${user}`, user.displayAvatarURL())
            .addField("Dinheiro em mãos", cash)
            .addField("Dinheiro no banco", bank)
            message.channel.send(embed2)
        } 
    }
}