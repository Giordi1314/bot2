const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    let ping = Math.floor(message.client.ping);
    message.channel.send(":ping_pong: Pong!")
        .then(m => {
            m.edit(`:ping_pong: Pong! \`${Math.floor(m.createdTimestamp - Date.now())} ms\``);
        });
}

module.exports.config = {
    name: "ping",
    aliases: ['pg']
}