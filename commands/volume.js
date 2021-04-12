const Discord = require("discord.js");
const fs = require("fs");
/* const { measureMemory } = require("node:vm"); */

module.exports.run = async(client, message, args) => {
    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz");
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo");
    if (!client.player.isPlaying(message)) return message.channel.send("No se esta reproduciendo nada");
    let volume = parseInt(args.join(" "));
    if (!volume) return message.channel.send("Ingresa un numero");
    if (isNaN(args[0])) return message.channel.send("Ingresa un numero valido");
    client.player.setVolume(message, volume);
    return message.channel.send(`Voumen ajustado a \ ${args.join(" ")}\ `);
}

module.exports.config = {
    name: "volume",
    aliases: ['vs']
}