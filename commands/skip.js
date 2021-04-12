const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz");
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo");
    if (!client.player.isPlaying(message)) return message.channel.send("No se esta reproduciendo nada");
    let song = await client.player.skip(message);
    return message.channel.send(`Saltado ${song.cache.name}`);
}

module.exports.config = {
    name: "skip",
    aliases: ['sk']
}