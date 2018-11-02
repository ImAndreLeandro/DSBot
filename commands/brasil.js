const Discord = require('discord.js');
const utils = require("../utils.js");

exports.run = (client, message, arg) => {
  if (message.guild.id === '461973057247117343') {
    let user = message.author;
    if (client.guilds.get('461973057247117343').members.get(user.id).roles.has('474720799153192961')) {
    let embed = new Discord.RichEmbed()
      .setColor([54, 57, 63])
      .setAuthor("Role removed")
      .setDescription("Your role **Portugal** has been removed!")
      .setTimestamp();
    message.channel.send(embed);
    try {
      client.guilds.get('461973057247117343').members.get(user.id).removeRole('474720799153192961');
    } catch (e) {
      utils.error(client, e, message.author.username);
    } finally {}
    } else {
    let embed = new Discord.RichEmbed()
      .setColor([54, 57, 63])
      .setAuthor("New Role Added")
      .setDescription("You received your **Portugal** role!\nNow you will get notified when someone\nmention this role in any channel!")
      .setTimestamp();
    message.channel.send(embed);
    try {
      client.guilds.get('461973057247117343').members.get(user.id).addRole('474720799153192961');
    } catch (e) {
      utils.error(client, e, message.author.username);
    } finally {}
    }
  }
}
