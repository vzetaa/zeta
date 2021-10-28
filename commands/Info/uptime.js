const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'uptime',
  aliases: ['up'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setDescription(`🕘 Uptime : ${client.uptime}ms!`)
      .setColor('FUCHSIA');
    message.channel.send({ embeds: [embed] });
  },
};
