const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports = {
    name: 'pet',
	description: 'Veja o seu pet',
    aliases: ['mypets'],
    usage: '$pet',
    cooldown: 5,
	async execute(message, args, client) {


    let xptoup = await db.fetch(`xptoup_${message.guild.id}_${message.author.id}`)
    if(xptoup === null) {
        db.set(`xptoup_${message.guild.id}_${message.author.id}`, 750)
    }

    var petstatus = await db.fetch(`petstatus_${message.guild.id}_${message.author.id}`)

    var petname = await db.fetch(`petslist_${message.guild.id}_${message.author.id}`)
    if(petname === null) petname === "Você ainda não tem um pet!"

    var fomepet = await db.fetch(`petfome_${message.guild.id}_${message.author.id}`)
    if(fomepet === null) fomepet = 0

    var energia = await db.fetch(`petenergia_${message.guild.id}_${message.author.id}`)
    if(energia === null) {
        var energia = await db.add(`petenergia_${message.guild.id}_${message.author.id}`, 100)
    }

    var xptotal = await db.fetch(`xptotalpet_${message.guild.id}_${message.author.id}`)
    if(xptotal === null) xptotal = 0

    var level = await db.fetch(`petlevel_${message.guild.id}_${message.author.id}`)
    if(level === null) level = 1

    var pettype = await db.fetch(`pettype_${message.author.guild}_${message.author.id}`)
    if(pettype === null) pettype = "Desconhecido"

    var petimg = await db.fetch(`petimg_${message.guild.id}_${message.author.id}`)
    let img = petimg


    if(args[0] == 'dormir') {
        if(petfome >= 60) {
            message.channel.send(`${petname} está com muita fome para dormir! Use $pet alimentar para alimentar ${petname}!`)
        }
        else {
        var energia = await db.fetch(`petenergia_${message.guild.id}_${message.author.id}`)

        if(energia > 50) return message.channel.send(`${petname} não está cansado!`)

        else {
            db.set(`cooldo_${message.author.id}_${message.author.id}`, Date.now())
            db.set(`petstatus_${message.guild.id}_${message.author.id}`, "Dormindo")
            message.channel.send(`${petname} vai dormir por 6 horas!`)
        }
    }
}

    if(args[0] == 'novonome') {
        message.channel.send(`O nome do seu pet agora é ${args.slice(1).join(" ")}`)
        db.set(`petslist_${message.guild.id}_${message.author.id}`, args.slice(1).join(" "))
    }


    if(args[0] == 'play') {

    let timeout = 21600000 

        let cooldo = await db.fetch(`cooldo_${message.author.id}`);

        if (cooldo !== null && timeout - (Date.now() - cooldo) > 0) {
            let time = ms(timeout - (Date.now() - cooldo));
    
            message.channel.send(`Seu pet está dormindo! Volte em **${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos**!`)

            
       } else {
        
    if(fomepet >= 60) {
        message.channel.send(`${petname} está com muita fome para brincar! Use $pet alimentar para alimentar ${petname}!`)
    }
        else {
        var level = await db.fetch(`petlevel_${message.guild.id}_${message.author.id}`)
        var energia = await db.fetch(`petenergia_${message.guild.id}_${message.author.id}`)
        if(energia <= 30) return message.channel.send("O seu pet está muito cansado para brincar! Use `$pet dormir` para fazer ele descansar!")
        
        else {
        const xp = Math.floor(Math.random() * 4)
        const fome = Math.floor(Math.random() * 3)
        const random = Math.floor(Math.random() * 6) // setando um número aleatório de 1 a 100    
        const msgs = [`Você brincou com ${petname} na lama e isso custou ${random} energia! ${petname} ganhou ${xp} pontos de xp! ${petname} ganhou ${fome} pontos de fome!`, `Você passeou com o ${petname} e isso custou ${random} energia! ${petname} ganhou ${xp} pontos de xp! ${petname} ganhou ${fome} pontos de fome!`, `${petname} recebeu suas carícias. Ele gastou ${random} de energia por se balançar alegremente e ganhou ${xp} pontos de experiência. ${petname} ganhou ${fome} pontos de fome!`]
        const trua = msgs[Math.floor(Math.random() * msgs.length)]

        db.subtract(`petenergia_${message.guild.id}_${message.author.id}`, random)
        db.add(`petfome_${message.guild.id}_${message.author.id}`, fome)
        db.add(`xptotalpet_${message.guild.id}_${message.author.id}`, xp)
        message.channel.send(trua)
    
        var xptotal = await db.fetch(`xptotalpet_${message.guild.id}_${message.author.id}`)
        var level = await db.fetch(`petlevel_${message.guild.id}_${message.author.id}`)


        if(xptotal >= xptoup) {
        xptoup = xptoup * 3
        db.add(`petlevel_${message.guild.id}_${message.author.id}`, 1)
         db.set(`xptoup_${message.guild.id}_${message.author.id}`, xptoup)
                }
            }
        }
    }
}

    if(args[0] == 'alimentar') {
        if(fomepet <= 30) return message.channel.send(`${petname} não está com fome o suficiente para comer!`)

        else {
        let timeout = 1800000 

        let cooldo = db.fetch(`foodpetAlimentar_${message.author.id}`);

        if (cooldo !== null && timeout - (Date.now() - cooldo) > 0) {
            let time = ms(timeout - (Date.now() - cooldo));

            message.channel.send(`Você já alimentou seu pet! Volte em ${time.minutes} minutos, ${time.seconds} segundos**!`)
        }
        else {
            const fomeWin = Math.floor(Math.random() * 25)
            message.channel.send(`${petname} comeu e agora tem -${fomeWin} pontos de fome!`)
            }
        }
    }

    if(args[0] == 'info') {
    
     const embed = new Discord.MessageEmbed()
    .setThumbnail(img)
    .setTitle(`Pet de ${message.author.username}`)
    .setDescription(`Tipo: **${pettype}** \nNome: **${petname}**\nStatus: **${petstatus}**`)
    .addField(`Fome`, `${fomepet}`)
    .addField(`Energia`, `${energia}`)
    .addField(`XP Total`, `${xptotal}`)
    .addField(`Level`, `   ${level}`)
    .addField("Você precisa de", `${xptoup} de xp para upar!`)
    message.channel.send(embed)
    }

    if(args[0] == 'abandonar') {

        let timeout = 21600000 

        let cooldo = await db.fetch(`cooldo_${message.author.id}`);

        if (cooldo !== null && timeout - (Date.now() - cooldo) > 0) {
            let time = ms(timeout - (Date.now() - cooldo));
    
            message.channel.send(`Você não pode abandonar seu pet enquanto ele dorme! Volte em **${time.hours} horas, ${time.minutes} minutos, ${time.seconds} segundos**!`)

        } else {


        message.channel.send(`Seu monstro! Você abandonou **${petname}**`)
        var petname = await db.delete(`petslist_${message.guild.id}_${message.author.id}`)
        var fomepet = await db.delete(`petfome_${message.guild.id}_${message.author.id}`)
        var energia = await db.delete(`petenergia_${message.guild.id}_${message.author.id}`)
        var xptotal = await db.delete(`xptotalpet_${message.guild.id}_${message.author.id}`)
        var level = await db.delete(`petlevel_${message.guild.id}_${message.author.id}`)
        var pettype = await db.delete(`pettype_${message.author.guild}_${message.author.id}`)
        var petimg = await db.delete(`petimg_${message.guild.id}_${message.author.id}`)
        var xp = await db.delete(`xptoup_${message.guild.id}_${message.author.id}`)
        var xp = await db.set(`xptoup_${message.guild.id}_${message.author.id}`, 750)
            }
        }
    }
}
