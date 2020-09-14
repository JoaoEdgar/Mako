const Discord = require('discord.js')

module.exports = {
    name: 'crc',
	description: 'Mude a cor do seu cargo',
    aliases: ['colorrole'],
    usage: '$crc',
    cooldown: 5,
	async execute(message, args, client) {

        if(message.guild.id != "540242821375066112") return;
    
        try {
    
        let sChannel2 = client.channels.cache.find(channel => channel.id === '665738951562231811')
        
        let cargo = await message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == args[0])
        let color = args.slice(1).join(" ");
        if(!message.member.roles.cache.some(r => r.name === cargo.name)) return message.reply("Este cargo não é seu!").then(msg => msg.delete({timeout: 5000}))
    
            cargo.setColor(`${color}`)
            message.channel.send(`${message.author} mudou a cor do seu cargo para \`\`\`${color}\`\`\``)
            sChannel2.send(`${message.author} mudou a cor do seu cargo para \`\`\`${color}\`\`\``)
        } catch (e) {
            message.channel.send("Um erro aconteceu!" + " " + e)
        }
    }
}