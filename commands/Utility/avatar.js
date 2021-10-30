const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'See user avatar',
  aliases: ['av', 'pfp'],
  emoji: '',
  userperm: ['SEND_MESSAGES'],
  botperm: ['SEND_MESSAGES'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const imgUrl = message.author.displayAvatarURL({
      size: 2048,
      dynamic: true,
    });
    const png = message.author.displayAvatarURL({ size: 2048, format: 'png' });
    const jpg = message.author.displayAvatarURL({ size: 2048, format: 'jpg' });
    const webp = message.author.displayAvatarURL({
      size: 2048,
      format: 'webp',
    });
    const gif = message.author.displayAvatarURL({ size: 2048, format: 'gif' });

    const embed = new MessageEmbed()
      .setTitle(`${message.author.username}'s Avatar`)
      .setDescription(
        `[PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`
      )
      .setImage(imgUrl)
      .setFooter(`${message.author.tag}`)
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);

    message.channel.send({ embeds: [embed] });
  },
};
