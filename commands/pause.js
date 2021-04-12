const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send("Debes estar en uncanal de voz");
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo");
    if (!client.player.isPlaying(message)) return message.channel.send("No se esta reproduciendo nada");
    let song = await client.player.pause(message);
    return message.channel.send("Pausado");
}

module.exports.config = {
    name: "pause",
    aliases: ['ps']
}