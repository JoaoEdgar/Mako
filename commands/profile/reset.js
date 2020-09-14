const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'reset',
	description: 'Resete informações de seu perfil',
    aliases: ['resetar'],
    usage: '$reset',
    cooldown: 5,
	async execute(message, args, client) {

        if(args[0] == 'sobremim') {
            db.set(`sobremim_${message.guild.id}_${message.author.id}`, "Esse texto foi resetado")
            message.channel.send(`O seu sobre mim foi resetado `)
        }
        if(args[0] == 'idade') {
            db.set(`idade_${message.guild.id}_${message.author.id}`, "Esse texto foi resetado")
            message.channel.send(`A sua idade foi resetada`)
        }
        if(args[0] == 'aniversario') {
            db.set(`aniver_${message.guild.id}_${message.author.id}`, "Esse texto foi resetado")
            message.channel.send(`O seu aniversário foi resetado`)
        } 
        if(args[0] == 'background') {
            message.channel.send("O seu background foi resetado")
            db.set(`background_${message.guild.id}_${message.author.id}`, null)
        }
    }
}