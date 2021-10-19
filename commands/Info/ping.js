const { Message, Client, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  aliases: ['p'],
  /**
   *
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const embed = new MessageEmbed()
      .setDescription(`Ping Latency : ${client.ws.ping}ms!`)
      .setColor('FUCHSIA');
    message.channel.send({ embeds: [embed] });
  },
};
