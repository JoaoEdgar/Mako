module.exports = (client, message) => {

    if(message.guild.id != "540242821375066112") return
    let canal = client.channels.cache.find(channel => channel.id === '540242821375066114')
    if(!canal) return;
    canal.send(`${member} Bem vindo á república socialista deste servidor`)

}

module.exports.help = {
    name: 'guildMemberAdd'
}