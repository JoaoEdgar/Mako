const Jimp = require('jimp')
const Discord = require('discord.js')


module.exports = {
	name: 'ship2',
	description: '',
	aliases: [''],
	usage: '',
	cooldown: 0,
	async execute(message, args, client) {


            if (message.member.hasPermission('ATTACH_FILES')) {

                let pessoa = message.mentions.users.first()
                let pessoa2 = message.mentions.users.last()
                var authorMessage = message

                const a = await Jimp.read(pessoa2.displayAvatarURL({format: 'png'}))
                const b = await Jimp.read(pessoa.displayAvatarURL({format: 'png'}))

                const c = await Jimp.read('https://cdn.discordapp.com/attachments/540244011064229929/753261567864471583/Sem_titulo_2.png')

                message.channel.send('🔍 | Processando...').then(async message => {
                    Jimp.read("https://cdn.discordapp.com/attachments/540244011064229929/753259552375570432/Fundo-transparente-1900x1900.png", function (err, image) {
                        if (err) message.channel.send('Ocorreu um erro ao criar a imagem.')
                        Jimp.loadFont(Jimp.FONT_SANS_32_WHITE).then(function (font) {
                            image.composite(c, 920, 480)
                            image.resize(1920, 480)
                            image.composite(a, 350, 200)
                            a.resize(200, 100)
                            image.composite(b, 400, 400)
                            b.resize(200, 100)
                            //image.write(font, 320, 20, "oi", 650)
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


