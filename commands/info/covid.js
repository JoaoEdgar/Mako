const Discord = require('discord.js')
const api = require('covidapi')
const { NovelCovid } = require("novelcovid");
const track = new NovelCovid();

module.exports = {
    name: 'covid',
	description: 'Corona virus status',
    aliases: ['corona', 'c19'],
    usage: 'nm!covid',
    cooldown: 5,
	async execute(message, args, client) {

        if(args.join(" ") === "all") {

        const covid = await api.all()

        const embed = new Discord.MessageEmbed()
        .setTitle("COVID-19 Mundialmente")
        .setDescription("Atualizado de acordo com a api do google")
        .addField("Casos", covid.cases, true)
        .addField("Casos hoje", covid.todayCases, true)
        .addField("Mortes", covid.deaths, true)
        .addField("Mortes hoje", covid.todayDeaths)
        .addField("Recuperados", covid.recovered, true)
        .addField("Recuperados hoje", covid.todayRecoverd, true)
        .addField("Casos ativos", covid.active, true)
        .addField("Criticos", covid.critical)

        message.channel.send(embed)

        } else {
            let corona = await track.countries(args.join(" "))
    
            let embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 em ${corona.country}`)
            .setColor("RANDOM")
            .setDescription("Atualizado de acordo com a api do google")
            .addField("Casos", corona.cases, true)
            .addField("Mortes", corona.deaths, true)
            .addField("Recuperados", corona.recovered, true)
            .addField("Casos hoje", corona.todayCases, true)
            .addField("Mortes hoje", corona.todayDeaths, true)
            .addField("Casos ativos", corona.active, true)
            .addField("Criticos", corona.critical, true)
    
            return message.channel.send(embed)
            message.delete()
        } 
    }
}


