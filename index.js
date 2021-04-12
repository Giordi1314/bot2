const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send('Hello World');
});
let port = process.env.PORT || 3000;
app.listen(port);

require('dotenv').config();



////////////////////////////////////////////////////////////
const Discord = require("discord.js")
const client = new Discord.Client()
const config = process.env;
const { Player } = require("discord-player");
const player = new Player(client);
client.player = player;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.config = process.env;
const Zeew = require("zeew");
const tokenzeew = config.tokenzeew;
const sfw = new Zeew.sfw(tokenzeew);
const fs = require("fs");
const fse = require("fs-extra");
const canvas = require("canvas");
const snekfechth = require("node-superfetch");
const MessageEmbed = require("discord.js");
const {MessageAttachment} = require("discord.js");

fs.readdir("./commands/", (err, files) => {
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) return console.log("No se encontro ningun comando");
    jsfile.forEach((f, i) => {
        console.log(`Cargado ${f}`);
        let pull = require(`./commands/${f}`);
        client.commands.set(pull.config.name, pull);
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name);
        });
    });
});

//Evento Nuevo miembro
client.on("guildMemberAdd", async member => {
    let wel = new Zeew.Bienvenida()
        .token(tokenzeew)
        .estilo("classic")
        .avatar(member.user.displayAvatarURL({ format: 'png' }))
        .fondo('')
        .colorTit("#fff")
        .titulo("Bienvenido!")
        .colorDesc("#fff")
        .descripcion("User: " + member.displayName);
    let img = await Zeew.WelcomeZeew(wel);
    let attachment = new MessageAttachment(img,"zeewapi-img.gif");
    client.channels.resolve("768488584076197948").send(attachment);

/*var Canal = client.channels.cache.find(
        channel => channel.id === '768488584076197948'
    );
    Canal.send(
        'Bienvenid@ <@' +
        member.id +
        '> al servidor, recuerda irte mucho a la chingada'
    );*/

});

client.on('ready', () => {
    console.log("Bot listo");
    let playing = client.voice.connections.size;
    client.user.setPresence({
        status: "online",
        activity: {
            name: "+help | Para obtener ayuda",
            type: "PLAYING",
            url: "https://www.instagram.com/Cyopn_",
        }
    });
});

client.on('message', async message => {
    if (!message.guild || message.author.bot) return;
    if (message.content.indexOf(config.prefix) != 0) return;
    let args = message.content.slice(config.prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    const commandFile = client.commands.get(command) || client.commands.get(client.aliases.get(command));
    if (!commandFile) return;
    try {
        commandFile.run(client, message, args, config.prefix);
    } catch (e) {
        return message.channel.send(`Un error ocurrio en ${command}: \n ${e.message}`);
    }

});

client.login(config.token);