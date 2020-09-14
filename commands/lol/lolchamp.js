const Discord = require('discord.js')
const lol = require('riot-lol')

module.exports = {
    name: 'lolchamp',
	description: 'Veja informação sobre um campeão no lol',
    aliases: ['campeao'],
    usage: '$lolchamp',
    cooldown: 5,
	async execute(message, args, client) {
        if(!message.member.roles.cache.some(r => r.id === '730947659329962044')) return message.channel.send("Apenas pessoas com o cargo **viado do lol** podem usar esse comando!").then(msg => msg.delete({timeout: 15000}))

        const champ = args.join(" ")
        if(!champ) return message.reply("Cadê o campeão para eu procurar sobre?").then(msg => msg.delete({timeout: 35000}))
        lol.getChampion(champ).then(champion => {
            const embed = new Discord.MessageEmbed()
            .setTitle(`Campeão ${champ}`)
            .setDescription(champion.title)
            .addField("Tags", champion.tags)
            .addField("Descrição", champion.description)
            .addField("HP", champion.stats.hp)
            .addField("HP Per Level", champion.stats.hpperlevel)
            .addField("Velocidade de movimento", champion.stats.movespeed)
            .addField("Armadura", champion.stats.armor)
            .addField("Armadura Per Level", champion.stats.armorperlevel)
            .addField("Spell block", champion.stats.spellblock)
            .addField("Spell block per Level", champion.stats.spellblockperlevel)
            .addField("Range", champion.stats.attackrange)
            .addField("HP Regen", champion.stats.hpregen)
            .addField("AD", champion.stats.attackdamage)
            .addField("AD Per Level", champion.stats.attackdamageperlevel)
            .addField("Velocidade de ataque", champion.stats.attackspeed)
            .addField("ID", champion.key)
            .setThumbnail(champion.imageUrl)
            message.channel.send(embed).then(msg => msg.delete({timeout: 120000}))
            
        })
        .catch(e => {
            message.channel.send("Opa! " + e)
        })



    }
}