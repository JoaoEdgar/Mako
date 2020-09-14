const Discord = require('discord.js');
const prefix = "$"

module.exports = {
    name: 'choose',
	description: 'Faça o bot escolher algo',
    aliases: ['pick'],
    usage: '$choose',
    cooldown: 5,
	execute(message, args, client) {

        const options = message.content.replace(`${prefix}pick `, "").split(",");
        const result = options[Math.floor(Math.random() * options.length)];

    message.channel.send(`Eu escolhi \`${result}\``)





    }
}