const { Util } = require("discord.js");
const fs = require("fs");


module.exports.run = async(client, message, args) => {
  client.player.on('trackStart', (message, track) => message.channel.send(`Reproduciendo ${track.title}`))
    if (!message.member.voice.channel) return message.channel.send("Debes estar en un canal de voz");
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en mismo canal de voz que yo");

    /*let voiceChannel = message.member.voice.channel;
    var ar = message.content;
    if (!voiceChannel) return message.channel.send('Necesitas unirte a un canal de voz primero');
    if (!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo');
    voiceChannel.join()
        .then(connection => {
            const url = ytdl(args, { filter: 'audioonly' });
            const dispatcher = connection.play(ytdl(args, { quality: 'highestaudio' }));
            message.channel.send('Reproduciendo ahora: ' + args);
            message.delete();
        })
        .catch(console.error);*/



    if (!args){
      message.channel.send("Ingresa una palabra clave para buscar")
    }else {
      if (client.player.isPlaying(message)) {
        //If, añadir cancion a lista de reproduccion
        let song = await client.player._addTrackToQueue(message.guild.me.voice.channel, args.join(' '));
    } else {
        //Else, reproduce la cancion
        let song = await client.player.play(message, args.join(' '), true, false);
        
        client.player.getQueue(message).on('end', () => {
            message.channel.send("Lista de reproduccion finalizada");
        });
        client.player.getQueue(message).on('trackChanged', (oldSong, newSong, skipped, repeatMode) => {
            if (repeatMode) {
                message.channel.send(`Repitiendo ${oldSong.title}`);
            } else {
                message.channel.send(`Reproduciendo ${newSong.title}`);
            }
        });
    }
    }
}

module.exports.config = {
    name: "play",
    aliases: ['p']
}