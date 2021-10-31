const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'nekobot',
  description: 'Get an images from nekobot.xyz',
  options: [
    {
      type: 3,
      name: 'endpoint',
      description: 'Type that you want. Leave it blank for random type.',
      required: false,
    },
  ],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    if (!interaction.channel.nsfw)
      return interaction.followUp({
        content: `Not an NSFW Channel!`,
        ephemeral: true,
      });
    let [endpoint] = args;
    if (!endpoint) endpoint = 'lewd';
    fetch(`https://nekobot.xyz/api/image?type=${endpoint}`)
      .then((res) => res.json())
      .then((body) => {
        interaction.followUp({ content: `${body.message}` });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
