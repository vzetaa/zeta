const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  description: 'Returns Websocket Ping Latency',
  options: [],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const embed = new MessageEmbed()
      .setDescription(`Ping Latency : ${client.ws.ping}ms!`)
      .setColor('FUCHSIA');
    interaction.followUp({ embeds: [embed] });
  },
};
