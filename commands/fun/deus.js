const Jimp = require('jimp')
const Discord = require('discord.js')


module.exports = {
	name: 'deus',
	description: 'Deus nunca vai aceitar o seu comentário!',
	aliases: ['godwontaccept', 'gwa'],
	usage: 'deus',
	cooldown: 30,
	execute(message, args, client) {


        if (message.content.split(' ').slice(1).join(' ').length < 1) {
            message.channel.send('Você não escreveu nada.')
        } else {
            if (message.content.split(' ').slice(1).join(' ').length > 50) {
                message.channel.send('Você ultrapassou o limite de 50 caracteres. Você não quer uma edição feia ne?')
            } else {
                if (message.member.hasPermission('ATTACH_FILES')) {
                    var authorMessage = message
                    message.channel.send('🔍 | Processando...').then(message => {
                        Jimp.read(`https://cdn.discordapp.com/attachments/506173362972917790/750512904322678854/2238.png`, function (err, image) {
                            if (err) message.channel.send('Ocorreu um erro ao criar a imagem.')
                            Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
                                image.print(font, 50, 100, authorMessage.content.split(' ').slice(1).join(' '), 650)
                                var aguardeMessage = message
                                image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                                    const attachment = new Discord.MessageAttachment(buffer, 'test.png')
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
    }
}