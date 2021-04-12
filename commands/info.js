const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: "CyopnBot por Cyopn",
            description: "Contactame para obtener [informacion](https://instagram.com/Cyopn_) sobre el proyecto, siempre se agradeceran sugerencias",
            fields: [{
                    name: "¿Quien soy?",
                    value: "a"
                },
                {
                    name: "¿Cual es mi proposito?",
                    value: "a"
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: client.user.avatarURL(),
                text: "ig: Cyopn_"
            }
        }
    });
}

module.exports.config = {
    name: "info",
    aliases: ['i']
}