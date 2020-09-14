const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
	description: 'Receba a foto de um usuário mencionado',
    aliases: ['avatar', 'icon', 'pfp'],
    usage: '$avatar',
    cooldown: 5,
	execute(message, args, client) {
    let pessoa = message.mentions.users.first() || message.guild.members.cache.get(args[0])
    const autor = message.author.tag
    const autA = message.author.avatarURL({ dynamic: true, format: 'png', size: 2048 });
    
    if(pessoa) {
        const pessA = pessoa.user
        const embed1 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Avatar de ${pessoa.tag}.`)
        .setImage(`${pessoa.avatarURL({ dynamic: true, format: 'png', size: 2048 })}`)
        .setTimestamp()
        .setFooter("PanelaBOT")
        .setDescription(`[Baixe a foto aqui](${pessoa.avatarURL({ dynamic: true, format: 'png', size: 2048 })})`)
        message.channel.send(embed1)
}
    if(!pessoa) {
        const embed2 = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Avatar de ${autor}.`)
        .setImage(`${autA}`)
        .setTimestamp()
        .setDescription(`[Baixe a foto aqui](${autA})`)
        message.channel.send(embed2)
    }
}
}
