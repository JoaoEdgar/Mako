const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: 'botfiles',
    aliases: ['dir'],
	async execute(message, args, client) {

        let admin = await db.fetch(`admins_${message.author.id}`)

        if(message.author.id != admin) return message.reply("Você não tem permissão para usar esse cmd!")

        const embed = new Discord.MessageEmbed()
        .setTitle("Arquivos do bot")
        embed.setDescription('```css\ncommands\nconfig.json\nindex.js\njson.sqlite\npackage.json\n```')
        message.channel.send(embed).then(async msg => {

        if(args[0] == 'commands') {
            msg.delete()
            const embed2 = new Discord.MessageEmbed()
            .setTitle("Pasta Commands")
            embed2.setDescription('```css\nactions\nadmin\neconomy\nfun\ninfo\nlol\nosu\nprofile\n```')
            message.channel.send(embed2).then(async msg2 => {
                    if(args[1] == 'actions') {
                        msg2.delete()
                        const embed3 = new Discord.MessageEmbed()
                        .setTitle("Pasta Actions")
                        embed3.setDescription('```css\nbite.js\ncorar.js\ncuddle.js\nfeed.js\nhandholding.js\nhighfive.js\nhug.js\nkiss.js\nlick.js\npat.js\nslap.js\n```')
                        message.channel.send(embed3)
                            }
                    if(args[1] == 'admin') {
                        msg2.delete()
                        const embed4 = new Discord.MessageEmbed()
                        .setTitle("Pasta Admin")
                        embed4.setDescription('```css\naddmoney.js\naddrep.js\nbotfiles.js\nexec.js\nremovemoney.js\nremoveuser.js\nsetuser.js\nsetstatus.js\nsetprefix.js```')
                        message.channel.send(embed4)
                    }
                    if(args[1] == 'economy') {
                        msg2.delete()
                        const embed5 = new Discord.MessageEmbed()
                        .setTitle("Pasta Economy")
                        embed5.setDescription('```css\nbal.js\ndaily.js\ndeposit.js\nleaderboard.js\nmonthly\npay.js\npetbuy.js\npetstore.js\nrob.js\nroulette.js\nweekly.js\nwithdraw.js\nwork.js```')
                        message.channel.send(embed5)
                    }
                    if(args[1] == 'fun') {
                        msg2.delete()
                        const embed6 = new Discord.MessageEmbed()
                        .setTitle("Pasta Fun")
                        embed6.setDescription('```css\navatar.js\ncalc.js\nchoose.js\ncrc.js\ncrn.js\ndeus.js\nhexcolor.js\njapauau.js\nmeme.js\nmsgoculta.js\nship.js\nsudo.js```')
                        message.channel.send(embed6)
                    }
                    if(args[1] == 'info') {
                        msg2.delete()
                        const embed7 = new Discord.MessageEmbed()
                        .setTitle("Pasta Info")
                        embed7.setDescription('```css\ncovid.js\ncovidsin.js\nlembrete.js\nweather.js\n```')
                        message.channel.send(embed7)
                    }
                    if(args[1] == 'lol') {
                        msg2.delete()
                        const embed8 = new Discord.MessageEmbed()
                        .setTitle("Pasta Lol") 
                        embed8.setDescription('```css\nlolchamp.js\nlolitem.js\nlolplayer.js\nlolrune.js\nlolspell.js')
                        message.channel.send(embed8)
                    }
                    if(args[1] == 'osu') {
                        msg2.delete()
                        const embed9 = new Discord.MessageEmbed()
                        .setTitle("Pasta Osu")
                        embed9.setDescription('```css\nosubeatmap.js\nosubestplay.js\nosuplayer.js\n```')
                        message.channel.send(embed9)
                    }
                    if(args[1] == 'profile') {
                        msg2.delete()
                        const embed10 = new Discord.MessageEmbed()
                        .setTitle("Pasta Profile")
                        embed10.setDescription('```css\nprofile.js\nrep.js\nreset.js\nset.js\n```')
                        message.channel.send(embed)
                    }
                })
            }
        })
    }
}