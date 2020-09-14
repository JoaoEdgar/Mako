const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'work',
	description: 'Trabalhe!',
    aliases: ['trabalhar'],
    usage: '$trabalhar',
    cooldown: 45,
	async execute(message, args, client) {


        const random = Math.floor(Math.random() * 500)
        const chance = Math.floor(Math.random() * 100)
    
        let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

        if(args[0] == 'prostituta') {
    

            let replylost = [`Você não usou camisinha... você perdeu ${random}!`, `Você perdeu ${random} porque o cliente te chamou de tábua`, `A mulher do seu cliente pegou os dois e você perdeu ${random}`]
            let replyl = replylost[Math.floor(Math.random() * replylost.length)]
        
            let replywin = [`3 minutos? Uau, você ganhou ${random}`, `Você ficou 56 minutos sem fazer nada e ganhou ${random}`, `Foi um trabalho comum, você ganhou ${random}`]
            let replyw = replywin[Math.floor(Math.random() * replywin.length)]
    
        const embed = new Discord.MessageEmbed()
        .setTitle("Opa!")
        .setDescription(replyw)
        .setFooter("Trabalhos disponíveis: Prostituta, Programador")
    
        const lost = new Discord.MessageEmbed()
        .setTitle("Aff!")
        .setDescription(replyl)
        .setFooter("Trabalhos disponíveis: Prostituta, Programador")

    
        if(chance < 50) {
            db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
            message.channel.send(lost)
        }
        if(chance > 50) {
            db.add(`money_${message.guild.id}_${message.author.id}`, random)
            message.channel.send(embed)
        }
    
    }

        if(args[0] == 'programador') {
            const replywin = [`Você programou um novo sistema operacional e ele explodiu! Você ganhou ${random}`, `Você concertou muitos erros de código do Facebook e ganhou ${random}! Pog`, `Você fez ${random} reais trabalhando para a apple!`]
            const replyw = replywin[Math.floor(Math.random() * replywin.length)]
        
            const replylost = [`Você fez um pequeno erro que fez sua empresa perder milhões, junto com os milhões você perdeu ${random}! oof`, `Você acabou dormindo no trabalho e perdeu ${random}!`, `Já pensou em quitar do ramo? Você perdeu ${random} por ser ruim`]
            const replyl = replylost[Math.floor(Math.random() * replylost.length)]

            const embed = new Discord.MessageEmbed()
            .setTitle("Opa!")
            .setDescription(replyw)
            .setFooter("Trabalhos disponíveis: Prostituta, Programador")

        
            const lost = new Discord.MessageEmbed()
            .setTitle("Aff!")
            .setDescription(replyl)
            .setFooter("Trabalhos disponíveis: Prostituta, Programador")

        
            if(chance < 50) {
                db.subtract(`money_${message.guild.id}_${message.author.id}`, random)
                message.channel.send(lost)
            }
            if(chance > 50) {
                db.add(`money_${message.guild.id}_${message.author.id}`, random)
                message.channel.send(embed)
            }
        }





    }
}