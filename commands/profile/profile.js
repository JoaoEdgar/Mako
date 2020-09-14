const db = require('quick.db');
const Discord = require('discord.js');
const Jimp = require('jimp')

module.exports = {
    name: 'profile',
	description: 'Cheque seu perfil',
    aliases: ['perfil', 'p'],
    usage: '$profile',
    cooldown: 5,
	async execute(message, args, client) {

            let user = message.mentions.users.first() || client.users.cache.get(args[0])


                    let aniver = db.fetch(`aniver_${message.guild.id}_${message.author.id}`)
                    let idade = db.fetch(`idade_${message.guild.id}_${message.author.id}`)
                    let sobremim = db.fetch(`sobremim_${message.guild.id}_${message.author.id}`)
                    let background = db.fetch(`background_${message.guild.id}_${message.author.id}`)
                    let rep = db.fetch(`rep_${message.guild.id}_${message.author.id}`)


                    if(sobremim === null) sobremim = "Sem sobre mim definido!"
                    if(idade === null) idade = "Sem idade definida!"
                    if(aniver === null) aniver = "Sem aniversário definido!"
                    if(background === null) background = "https://s2.glbimg.com/f63MNW7-vM39Q9tgRZvQx5l8amM=/620x443/s.glbimg.com/po/tt/f/original/2012/11/05/fundo_transparente.png"
                    if(rep === null) rep = "Sem reputação ainda!"
 
 
                    if (user) {
                        let aniver2 = db.fetch(`aniver_${message.guild.id}_${user.id}`)
                        let idade2 = db.fetch(`idade_${message.guild.id}_${user.id}`)
                        let sobremim2 = db.fetch(`sobremim_${message.guild.id}_${user.id}`)
                        let background2 = db.fetch(`background_${message.guild.id}_${user.id}`)
                        let rep2 = db.fetch(`rep_${message.guild.id}_${user.id}`)
    
                        if(sobremim2 === null) sobremim2 = "Sem sobre mim definido!"
                        if(idade2 === null) idade2 = "Sem idade definida!"
                        if(aniver2 === null) aniver2 = "Sem aniversário definido!"
                        if(background2 === null) background2 = "https://s2.glbimg.com/f63MNW7-vM39Q9tgRZvQx5l8amM=/620x443/s.glbimg.com/po/tt/f/original/2012/11/05/fundo_transparente.png"
                        if(rep2 === null) rep2 = "Sem reputação ainda!"
                        var authorMessage = message
                        var back = await Jimp.read("https://cdn.discordapp.com/attachments/540244011064229929/753263247947333735/image.png")
                        message.channel.send('🔍 | Processando...').then(message => {
                            Jimp.read(background2, function (err, image) {
                                if (err) message.channel.send('Ocorreu um erro ao criar a imagem.')
                                Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
                                    back.resize(720, 430)
                                    image.resize(720, 480)
                                    image.composite(back, 20, 20)
                                    image.print(font, 130, 290, sobremim2, 450)
                                    image.print(font, 300, 108, idade2, 650)
                                    image.print(font, 405, 180, aniver2, 650)
                                    image.print(font, 127, 405, rep2, 650)
 
                                    var aguardeMessage = message
                                    image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                        const attachment = new Discord.MessageAttachment(buffer, 'SPOILER_test.png')
                                        message.channel.send(attachment).then(message => {
                                            aguardeMessage.delete()
                                        }) 
                                    })
                                })
                            })
                        })
                    } else {
                        var authorMessage = message
                        var back = await Jimp.read("https://cdn.discordapp.com/attachments/540244011064229929/753263247947333735/image.png")
                        message.channel.send('🔍 | Processando...').then(message => {
                            Jimp.read(background, function (err, image) {
                                if (err) message.channel.send('Ocorreu um erro ao criar a imagem.')
                                Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
                                    back.resize(720, 430)
                                    image.resize(720, 480)
                                    image.composite(back, 20, 20)
                                    image.print(font, 130, 290, sobremim, 450)
                                    image.print(font, 300, 108, idade, 650)
                                    image.print(font, 405, 180, aniver, 650)
                                    image.print(font, 127, 405, rep, 650)
 
                                    var aguardeMessage = message
                                    image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                        const attachment = new Discord.MessageAttachment(buffer, 'SPOILER_test.png')
                                        message.channel.send(attachment).then(message => {
                                            aguardeMessage.delete()
                                        }) 
                                    })
                                })
                            })
                        })
                    }
                }
            } 
              

