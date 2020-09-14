const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'petbuy',
	description: 'Compre um pet!',
    aliases: ['petcomprar'],
    usage: '$petbuy',
    cooldown: 5,
	async execute(message, args, client) {

    let pet = await db.fetch(`petslist_${message.guild.id}_${message.author.id}`)
    let money = await db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if(args[0] == 'coelho') {
        if(db.has(`petslist_${message.guild.id}_${message.author.id}`)) return message.reply("Você já tem um pet!")
        const valor = 850;
        if(valor > money) return message.reply(`Você não tem dinheiro o suficiente para comprar isso! Seu dinheiro é ${money}`)
        else {
            let petimg = await db.fetch(`petimg_${message.guild.id}_${message.author.id}`)
            if(petimg === null) petimg = "https://cdn.discordapp.com/attachments/490611405813448706/754170362241220696/Quarto_do_coelho_1_1_1.png"
                   db.set(`petimg_${message.guild.id}_${message.author.id}`, petimg)
                   db.set(`pettype_${message.guild.id}_${message.author.id}`, "Coelho")
                   db.set(`petslist_${message.guild.id}_${message.author.id}`,  "Mude o nome do seu coelho usando $pet novonome!")
                   db.set(`petstatus_${message.guild.id}_${message.author.id}`, "Bem")
                     db.subtract(`money_${message.guild.id}_${message.author.id}`, 750)
                     let money2 = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
                     message.channel.send(`Você comprou um coelho! Você agora tem ${money2} reais `)

            }
        } 
    if(args[0] == 'gato') {
        if(db.has(`petslist_${message.guild.id}_${message.author.id}`)) return message.reply("Você já tem um pet!")
        const valor = 500;
        if(valor > money) return message.reply(`Você não tem dinheiro o suficiente para comprar isso! Seu dinheiro é ${money}`)
        else {
            let petimg = await db.fetch(`petimg_${message.guild.id}_${message.author.id}`)
            if(petimg === null) petimg = ""
                   db.set(`petimg_${message.guild.id}_${message.author.id}`, petimg)
                   db.set(`pettype_${message.guild.id}_${message.author.id}`, "Gato")
                   db.set(`petslist_${message.guild.id}_${message.author.id}`,  "Mude o nome do seu gato usando $pet novonome!")
                   db.set(`petstatus_${message.guild.id}_${message.author.id}`, "Bem")
                     db.subtract(`money_${message.guild.id}_${message.author.id}`, 750)
                     let money2 = await db.fetch(`money_${message.guild.id}_${message.author.id}`)
                     message.channel.send(`Você comprou um gato! Você agora tem ${money2} reais `)
            }
        }
    }
}
