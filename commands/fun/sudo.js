const Discord = require('discord.js')
module.exports = {
      name: 'sudo',
      description: 'Faça alguém falar algo com webhook',
      aliases: ['diga'],
      usage: '$sudo',
      cooldown: 5,
	async execute(message, args, client) {

  let sChannel2 = client.channels.cache.find(channel => channel.id === '665738951562231811')

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
     let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });
        let nome = user.username
        var id = `${(await message.channel.fetchWebhooks()).first().id}`
        var token = `${(await message.channel.fetchWebhooks()).first().token}`
        const webhookClient = new Discord.WebhookClient(`${id}`, `${token}`);
        webhookClient.send(`${args.slice(1).join(" ")}`, {
    username: `${nome}`,
    avatarURL: `${avatar}`,
    })
  message.delete()

  
  const embed = new Discord.MessageEmbed()
  .setTitle("comando sudo")
  .setDescription(`${message.author} usou sudo em ${user}`)
  .addField("ID do autor", `${message.author.id}`)
  .addField("ID da vítima", `${user.id}`)
  sChannel2.send(embed)
  }
}