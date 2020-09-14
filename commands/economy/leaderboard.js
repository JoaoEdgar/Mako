const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'leaderboard',
	description: 'Leaderboard de pessoas com mais dinheiro',
    aliases: ['top', 'moneytop'],
    usage: '$leaderboard',
    cooldown: 5,
	async execute(message, args, client) {
        let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
        if(money === null) money = 0;
        let content = "";
    
        for (let i = 0; i < money.length; i++) {
            let user = client.users.cache.get(money[i].ID.split('_')[2]).username
    
            content += `${i+1}. ${user} ~ ${money[i].data}$\n`
        }
    
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL({dynamic: true}))
        .setDescription(content)
        .setColor("GREEN")
    
        message.channel.send(embed)


    }
}