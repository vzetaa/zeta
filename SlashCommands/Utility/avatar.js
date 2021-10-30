const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'avatar',
  description: 'See user avatar',
  options: [],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const imgUrl = interaction.user.displayAvatarURL({
      size: 2048,
      dynamic: true,
    });
    const png = interaction.user.displayAvatarURL({
      size: 2048,
      format: 'png',
    });
    const jpg = interaction.user.displayAvatarURL({
      size: 2048,
      format: 'jpg',
    });
    const webp = interaction.user.displayAvatarURL({
      size: 2048,
      format: 'webp',
    });
    const gif = interaction.user.displayAvatarURL({
      size: 2048,
      format: 'gif',
    });

    const embed = new MessageEmbed()
      .setTitle(`${interaction.user.username}'s Avatar`)
      .setDescription(
        `[PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`
      )
      .setImage(imgUrl)
      .setFooter(`${interaction.user.tag}`)
      .setTimestamp()
      .setColor(interaction.guild.me.displayHexColor);

    interaction.followUp({ embeds: [embed] });
  },
};
