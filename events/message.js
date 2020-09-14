module.exports = (client, message) => {

    try {
    if(message.content === "You're not in a voice channel!") {
        message.delete()
    }
        if(message.author.id === "414925323197612032") {
            message.delete()
                }
                    } catch(e) {
                        console.log(e)
            }
        }

exports.help = {
    name: 'message'
}

