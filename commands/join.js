const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async(client, message, args) => {
    let Canalvoz = message.member.voice.channel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
        message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
        message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
        message.channel.send('Conectando...').then(m => {
            Canalvoz.join().then(() => {
                m.edit('Conectado exitosamente.').catch(error => message.channel.send(error));
            }).catch(error => message.channel.send(error));
        }).catch(error => message.channel.send(error));
    }
}

module.exports.config = {
    name: "join",
    aliases: ['j']
}