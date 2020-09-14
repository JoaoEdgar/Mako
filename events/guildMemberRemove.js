module.exports = (client, message) => {
        
        if(message.guild.id != "540242821375066112") return
        let canal = client.channels.cache.find(channel => channel.id === '540242821375066114')
        if(!canal) return;
        canal.send(`${member} saiu do servidor ou muito provávelmente foi kickado`)

}

module.exports.help = {
    name: 'guildMemberRemove'
}