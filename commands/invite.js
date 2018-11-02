const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.guild.id === '461973057247117343') {
    if (message.channel.id === '472460825626542090') {
      if (args.length < 2) {
        let embed = new Discord.RichEmbed()
          .setColor([54, 57, 64])
          .setAuthor("Bot Invite", client.user.avatarURL)
          .setDescription("Use: `ds!invite <bot_id> <prefix>`")
          .setTimestamp();
        message.channel.send(embed);
      } else {
        let number = args[0];
        if (!isNaN(number)) {
          let embed = new Discord.RichEmbed()
            .setColor([54, 57, 64])
            .setAuthor("Bot Invite", client.user.avatarURL)
            .setDescription("Your bot will be added and tested in a private server!" + `\nBot: <@${number}>\nOwner: <@${message.author.id}>\nPrefix: \`${args[1]}\``)
            .setTimestamp();
          message.channel.send(embed);
          let embed2 = new Discord.RichEmbed()
            .setColor([54, 57, 64])
            .setAuthor("Bot Invite")
            .setDescription(`Bot: <@${number}>\nOwner: <@${message.author.id}>\nPrefix: \`${args[1]}\``)
            .setTimestamp();
          client.channels.get('472507865404538901').send(embed2);
        } else {
          let embed = new Discord.RichEmbed()
            .setColor([54, 57, 64])
            .setAuthor("Bot Invite", client.user.avatarURL)
            .setDescription("Use: `ds!invite <bot_id> <prefix>`")
            .setTimestamp();
          message.channel.send(embed);
        }
      }
    } else {
      let embed = new Discord.RichEmbed()
        .setColor([54, 57, 64])
        .setAuthor("Error", client.user.avatarURL)
        .setDescription("Use: `ds!invite <bot_id> <prefix>`" + `\nUse this command on <#472460825626542090> channel!`)
        .setTimestamp();
      message.channel.send(embed);
    }
  }
}
