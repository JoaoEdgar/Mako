const Discord = require('discord.js')

module.exports = {
    name: 'msgoculta',
	description: 'Envie uma mensagem secreta á uma pessoa!',
    aliases: ['msg'],
    usage: '$msgoculta',
    cooldown: 5,
	async execute(message, args, client) {

    return message.reply("O evento já acabou!")

    let guild = message.guild

    let msg;

    let usuario = client.users.cache.get(args[0]) || client.users.cache.find(u => u.username.toLowerCase() == (args.join(" ").toLowerCase()).substring(0, u.username.length)) || message.mentions.users.first();

    if (usuario) {
        if (message.mentions.users.first()) {
            msg = args.slice(1).join(" ");
  }     else {
                msg = args.join(" ").toLowerCase().substring(usuario.username.length);
    }
}

    console.log(usuario)
    if(!usuario) {
        message.delete()
        message.reply ("Você precisa dizer uma pessoa!").then(msg => msg.delete({timeout: 5000}))
    }

    if(!msg) {
        message.reply("Você precisa de uma mensagem!").then(msg => msg.delete({timeout: 3000}))
        message.delete()
    }

    message.delete()
    
    await usuario.send(`Você recebeu uma mensagem oculta!\n Mensagem: ${msg}`).catch(err => console.log(err))
    console.log(`${message.author.username} enviou uma mensagem para ${usuario.username} com o conteúdo: ${msg}`)

    }
}



