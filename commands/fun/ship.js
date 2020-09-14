const Discord = require('discord.js')

module.exports = {
    name: 'casal',
	description: 'Uiui!',
    aliases: ['ship'],
    usage: '$casal',
    cooldown: 5,
	async execute(message, args, client) {

        let user = client.users.cache.get(args[0]) ||   message.mentions.users.first();
        let user2 = client.users.cache.get(args[1]) ||  message.mentions.users.last();

        const random = Math.floor(Math.random () * 100)

        let dez = ['Uhhh, melhor deixar isso de lado, sim?', 'Poderia ser o casalzão do ano, mas não é :(', 'F Casal']
        let dezresp = Math.floor(Math.random() * dez.length)
        let deztrue = dez[dezresp]

        let trinta = ['Poxa, se não estivessem se traindo...', 'Se não fosse a segunda escolha, teria dado certo!', 'Pode desistir, não dá', 'Se tentassem um pouco mais...']
        let trintaresp = Math.floor(Math.random() * trinta.length)
        let trintatrue = trinta[trintaresp]

        let setenta = ['Casalzão forte! Mas não é o do ano!', 'OOF, melhor casal do servidor', 'Mais forte do que Nara e Jean :flushed:', 'Casal POG']
        let setentaresp = Math.floor(Math.random() * setenta.length)
        let setentatrue = setenta[setentaresp]

        let cem = ['100%? Casalzão do ano!', 'O CASAL MAIS POG DO SERVER', 'Rei e rainha :crown:']
        let cemresp = Math.floor(Math.random() * cem.length)
        let cemtrue = cem[cemresp]

        if(!user2) { 

            if(random < 10) {
                return message.channel.send(`Resultado do casal panelinha bot e ${message.author} é: **${random}%**! ${deztrue}`)
            }
            if(random <= 30) {
                return message.channel.send(`Resultado do casal panelinha bot e ${message.author} é: **${random}%**! ${trintatrue}`)
            }
            if(random <= 70) {
                return message.channel.send(`Resultado do casal panelinha bot e ${message.author} é: **${random}%**! ${setentatrue}`)
            }
            if(random === 100) {
                return message.channel.send(`Resultado do casal panelinha bot e ${message.author} é: **${random}%**! ${cemtrue}`)
            }

        }

        if(random < 10) {
            return message.channel.send(`Resultado do casal ${user} e ${user2} é: **${random}%**! ${deztrue}`)
        }
        if(random <= 30) {
            return message.channel.send(`Resultado do casal ${user} e ${user2} é: **${random}%**! ${trintatrue}`)
        }
        if(random <= 70) {
            return message.channel.send(`Resultado do casal ${user} e ${user2} é: **${random}%**! ${setentatrue}`)
        }
        if(random === 100) {
            return message.channel.send(`Resultado do casal ${user} e ${user2} é: **${random}%**! ${cemtrue}`)
        }






    }
}