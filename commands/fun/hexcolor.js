const Discord = require('discord.js')
const Color = require('color')

module.exports = {
    name: 'hexcolor',
	description: 'Veja uma cor em hexadecimal',
    aliases: ['hex', 'color', 'cor'],
    usage: '$hexcolor',
    cooldown: 5,
	async execute(message, args, client) {

        const imgget = await `https://www.colorhexa.com/${args}.png`

        if(!imgget) return message.channel.send("Essa cor não existe ou o que você mandou não é um código hexadecimal válido!")

        const embed = new Discord.MessageEmbed()
        .setTitle("Aqui está sua cor")
        .setDescription(`Cor para ${message.author}!`)
        .setImage(imgget)
        message.channel.send(embed)


    }

}