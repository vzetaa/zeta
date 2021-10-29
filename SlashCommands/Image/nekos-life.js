const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'nekos',
  description: 'Get an images from nekos.life',
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
    fetch(`https://nekos.life/api/v2/img/${endpoint}`)
      .then((res) => res.json())
      .then((body) => {
        interaction.followUp({ content: `${body.url}` });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
