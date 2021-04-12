const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: "Ayuda en comando de musica",
            description: "Usa el prefijo '+' antes de una de las palabras clave",
            fields: [{
                    name: "Unirse",
                    value: "(Uso: +join), Me añade a algun canal de voz al que estes conectado"
                },
                {
                    name: "Abandonar",
                    value: "(Uso: +leave), Usame para abandonar el canal de voz"
                },
                {
                    name: "Reproducir",
                    value: "(Uso: +play), Usame para reproucir algun video musical de youtube"
                },
                {
                    name: "Pausar",
                    value: "(Uso: +pause), Usame para pausar la reproduccion"
                },
                {
                    name: "Resumir",
                    value: "(Uso: +resume), Usame para reanudar una reproduccion en pausa"
                },
                {
                    name: "Limpiar lista de reproduccion",
                    value: "(Uso: +clearqueue), Usame para limpiar una lista de reproduccion"
                },
                {
                    name: "Repetir",
                    value: "(Uso: +loop), Repite la cancion en reproduccion"
                },
                {
                    name: "Reproduciendo ahora",
                    value: "(Uso: +nowplaying), Devuelve la informacion de la cancion en reproduccion"
                },
                {
                    name: "Lista de reproduccion",
                    value: "(Uso: +queue), Devuelve la lista de reproduccion"
                },
                {
                    name: "Saltar",
                    value: "(Uso: +skip), Salta la cancion en reproduccion"
                },
                {
                    name: "Detener",
                    value: "(Uso: +stop), Detiene la cancion en reproduccion"
                },
                {
                    name: "Volumen",
                    value: `(Uso: +volume \numero entero\ ), Detiene la cancion en reproduccion`
                }
            ]
        }
    })
}

module.exports.config = {
    name: "hlpmusc",
    aliases: ['hm ']
}