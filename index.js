/* global Map */
const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  //response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const config = require("./config.json");
const utils = require("./utils.js");

const client = new Discord.Client();
client.prefix = config.prefix;

client.on("ready", () => {
	console.log("Bot on with " + client.users.size + " users and " + client.guilds.size + " servers!");
	client.user.setActivity(`${client.users.size} users!`, {type: 'Watching'});
});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
	if (message.author.bot) return undefined;
  let user = message.author;

	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

  try {

    delete require.cache[require.resolve(`./commands/${command}`)];

    let commands = require(`./commands/${command}.js`);
    commands.run(client, message, args);
  } catch (e) {
    utils.error(client, e, message.author.username);
  } finally {
  }

});

client.on('guildMemberAdd', async member => {
  if (member.guild.id === '461973057247117343') {
    client.channels.get('471654780922757121').edit({
      name: `Members: ${member.guild.members.size}`
    }).then(console.log("'Membes' voice channel changed!")).catch(console.error);
    let members = 0;
    for (var member of member.guild.members.array()) {
      if (member.user.bot === false) {
        members++;
      }
    }
    if (member.user.bot) {
      client.channels.get('471720683085365248').edit({
        name: `Bots: ${member.guild.members.size-members}`
      }).then(console.log("'Bots' voice channel changed!")).catch(console.error);
    } else {
      client.channels.get('471722339969662999').edit({
        name: `Users: ${members}`
      }).then(console.log("'Users' voice channel changed!")).catch(console.error);
    }
  }
});

client.on('guildMemberRemove', async member => {
  if (member.guild.id === '461973057247117343') {
    client.channels.get('471654780922757121').edit({
      name: `Members: ${member.guild.members.size}`
    }).then(console.log("'Membes' voice channel changed!")).catch(console.error);
    let members = 0;
    for (var member of member.guild.members.array()) {
      if (member.user.bot === false) {
        members++;
      }
    }
    if (member.user.bot) {
      client.channels.get('471720683085365248').edit({
        name: `Bots: ${member.guild.members.size-members}`
      }).then(console.log("'Bots' voice channel changed!")).catch(console.error);
    } else {
      client.channels.get('471722339969662999').edit({
        name: `Users: ${members}`
      }).then(console.log("'Users' voice channel changed!")).catch(console.error);
    }
  }
});

client.login(process.env.TOKEN);
