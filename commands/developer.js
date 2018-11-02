const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

  let embed = new Discord.RichEmbed()
    .setAuthor("Developer", client.user.avatarURL)
    .setDescription("Error 404: `Contact ImAndreLeandro#3158`")
    .setColor([54, 57, 63]);

  if (args.length === 0) {

    embed.setDescription("See who's the developer of each bot!\n\nUse: `ds!developer <mention_bot>`")
    embed.setColor([54, 57, 163]);

  }

  if (args.length > 0) {
    let user = message.mentions.users.first() || message.author;
    let owner = await db.fetch(`developer_${user.id}`);
    if (user.bot === false) {
      embed.setDescription("That isn't a bot!");
    } else if (owner === null) {
      embed.setDescription("That bot doesn't have a owner yet!")
    } else {
      let user_ = client.users.get(owner);
      embed.setDescription(`Developer: \`${user_.username}#${user_.discriminator}\``);
    }
  }

  message.channel.send(embed)

}
