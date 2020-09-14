const Discord = require('discord.js');
const DIG = require('discord-image-generation')

module.exports = {
    name: 'image',
	description: '',
    aliases: ['img'],
    usage: '$profile',
    cooldown: 5,
	async execute(message, args, client) {

        let images = ['Blur', 'Gay', 'Greyscale', 'Invert', 'Sepia', 'Ad', 'Affect', 'Beautiful',
        'Bed', 'Bobross', 'Delete', 'Facepalm', 'Hitler', 'Jail', 'Mms', 'Poutine', 'Rip',
        'Stonk', 'Tatoo', 'Thomas', 'Trash', 'Wanted', 'Circle']

        if (args[0].toLowerCase() === 'view') {
        message.channel.send(`\`${images.map(image => image).join(', ')}\``)
        return;
    }

        if (!args[0]) return message.reply('Essa preset não existe')
        let preset = args[0].charAt(0).toUpperCase() + args[0].slice(1);
        if (!images.includes(preset)) return message.reply('Essa preset não existe')

    await generateImage(message, preset);

    async function generateImage(message, preset) {
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' }) + "?size=2048";
        let img = await new DIG[preset]().getImage(avatar)
        let attach = new Discord.MessageAttachment(img, `${preset}.png`);;
        message.channel.send(attach)
    }







    }
}