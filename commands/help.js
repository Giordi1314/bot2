const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    message.channel.send({
        embed: {
            color: 3447003,
            author: {
                name: client.user.username,
                icon_url: client.user.avatarURL()
            },
            title: "Ayuda en conmandos",
            description: "Usa el prefijo '+' antes de una de las palabras clave",
            fields: [{
                    name: "Saludo",
                    value: "(Uso: +hola), Dilo si quieres que te salude"
                },
                {
                    name: "Avatar",
                    value: "(Uso: +avatar), Obten el avatar de un usuario o el tuyo"
                },
                {
                    name: "Say",
                    value: "(Uso: +say), Puedes pedir que diga lo que quieras"
                },
                {
                    name: "Ping",
                    value: "(Uso: +ping), ¿Quieres conocer mi velocidad?, pruebame"
                },
                {
                    name: "Server",
                    value: "(Uso: +server), Solicitame los datos de tu servidor"
                },
                {
                    name: "Info",
                    value: "(Uso: +info), Usame si quieres saber sobre mi"
                },
                {
                    name: "User",
                    value: "(Uso: +user), Obten la informacion de un usuario o el tuyo"
                },
                {
                    name: "Ban",
                    value: "(Uso: +ban @username [razon]), Banea un usuario"
                },
                {
                    name: "Musica",
                    value: "(Uso: +hlpmusc), Mas informacion sobre comados para reproducir musica"
                },
                {
                    name: "Soporte",
                    value: "(Uso: +soporte), Si existe algun error y/o sugerencia, obten informacion para contacatarme"
                }
            ]
        }
    })
}

module.exports.config = {
    name: "help",
    aliases: ['h']
}