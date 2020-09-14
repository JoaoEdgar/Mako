const Discord = require(`discord.js`)

module.exports = {
    name: 'crn',
	description: 'Troque o nick do seu cargo',
    aliases: ['changerolename', 'cargonick'],
    usage: '$crn',
    cooldown: 5,
	async execute(message, args, client) {

    if(message.guild.id != "540242821375066112") return;
    
    try {

    let sChannel2 = client.channels.cache.find(channel => channel.id === '665738951562231811')
    
    let cargo = await message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == args[0])
    let name = args.slice(1).join(" ");
    if(!message.member.roles.cache.some(r => r.name === cargo.name)) return message.reply("Este cargo não é seu!").then(msg => msg.delete({timeout: 5000}))

        cargo.setName(`${name}`)
        message.channel.send(`${message.author} mudou o nome do seu cargo para \`\`\`${name}\`\`\``)
        sChannel2.send(`${message.author} mudou o nome do seu cargo para \`\`\`${name}\`\`\``)
    } catch (e) {
        message.channel.send("Um erro aconteceu!" + " " + e)
    }
}

}