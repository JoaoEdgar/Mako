const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'set',
	description: 'Configure seu perfil',
    aliases: ['setar'],
    usage: '$set',
    cooldown: 5,
	async execute(message, args, client) {

        if(args[0] == 'sobremim') {
            db.set(`sobremim_${message.guild.id}_${message.author.id}`, args.slice(1).join(" "))
            message.channel.send(`O seu sobre mim foi setado para **${args.slice(1).join(" ")}**`)
        }
        if(args[0] == 'idade') {
            db.set(`idade_${message.guild.id}_${message.author.id}`, args.slice(1).join(" "))
            message.channel.send(`A sua idade foi setada para **${args.slice(1).join(" ")}**`)
        }
        if(args[0] == 'aniversario') {
            db.set(`aniver_${message.guild.id}_${message.author.id}`, args.slice(1).join(" "))
            message.channel.send(`O seu aniversário foi setado para **${args.slice(1).join(" ")}**`)
        } 
        if(args[0] == 'background') {
            message.channel.send("O seu background foi setado com o link!")
            db.set(`background_${message.guild.id}_${message.author.id}`, args.slice(1).join(" "))
        }
    }
}