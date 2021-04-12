const Discord = require("discord.js");

module.exports.run = async(client, message, args) => {
    var a = ['Hola perra', 'Holi', 'Buenas tetas', 'Hoal', 'Un saludo, a tu puta madre', 'Hola caca', 'Buenas tardes señorita muy buenas tetas por cierto'];
    var b = Math.floor(Math.random() * 6);
    message.channel.send(a[b]);
}

module.exports.config = {
    name: "hola",
    aliases: ['h']
}