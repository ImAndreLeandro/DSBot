const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {

  let user = message.author;

  if (user.id === "197340056053219329") {

    if (args.length > 1) {
      let bot = args[0];
      let owner = args[1];

      db.set(`developer_${bot}`, `${owner}`);
      let embed = new Discord.RichEmbed()
        .setAuthor("Set Developer", client.user.avatarURL)
        .setDescription(`**${client.users.get(bot).username}**'s owner: \`${client.users.get(owner).username}#${client.users.get(owner).discriminator}\``)
        .setColor([54, 157, 63])
      message.channel.send(embed);
    }

  }

}
