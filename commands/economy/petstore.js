const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'petstore',
	description: 'Loja dos pets',
    aliases: ['petloja'],
    usage: '$petstore',
    cooldown: 5,
	async execute(message, args, client) {


    const embed = new Discord.MessageEmbed()
    .setTitle("Loja de pets")
    .addField("Gato", "Valor: 500")
    .addField("Cão", "Valor: 500")
    .addField("Urso", "Valor: 1500")
    .addField("Lobo", "Valor: 950")
    .addField("Hamster", "Valor: 750")
    .addField("Coelho", "Valor: 850")
    .addField("Cobra", "Valor: 1200")
    .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())

    
    message.channel.send(embed)






    }
}