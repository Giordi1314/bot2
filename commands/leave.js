const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    const Canalvoz = message.member.voice.channel;
    if (!Canalvoz) {
        message.channel.send('No estoy en un canal de voz.');
    } else {
        message.channel.send('Chau * emoji de besito*').then(m => {
            Canalvoz.leave();
        }).catch(error => message.channel.send(error));
    }
}

module.exports.config = {
    name: "leave",
    aliases: ['l']
}