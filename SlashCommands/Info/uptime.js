const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const pretty = require('pretty-ms');

module.exports = {
  name: 'uptime',
  description: 'Returns Bot Uptime',
  options: [],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setDescription(`🕘 Uptime : ${pretty(client.uptime)}ms!`)
      .setColor('FUCHSIA');
    interaction.followUp({ embeds: [embed] });
  },
};
