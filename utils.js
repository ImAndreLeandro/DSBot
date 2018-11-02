function error(client, message, author) {
  const Discord = require('discord.js');
  let embed = new Discord.RichEmbed()
    .setColor([54, 57, 64])
    .setAuthor("Error")
    .setDescription("Sent by **" + author + "**!\n" + `${message}`)
    .setTimestamp();
  client.channels.get('472419216675307571').send(embed);
}

module.exports = {
  error: error
}
