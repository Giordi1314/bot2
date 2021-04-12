const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {
        if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz");
        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo");
        let queue = client.player.getQueue(message);
        if (!queue) return message.channel.send("No se esta reproduciendo nada");
        let q = queue.tracks.map((tracks, i) => {
                    return `${i === 0 ? 'Current' : `${i+1}`}- ${tracks.title}`
    }).join('\n');
    message.channel.send({
        embed:{
            color: 3447003,
            description:`${q}`
        }
    })
}

module.exports.config={
    name:"queue",
    aliases:['q']
}