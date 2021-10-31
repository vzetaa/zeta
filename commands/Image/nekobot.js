const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'nekobot',
  description: 'Get an images from nekobot.xyz',
  aliases: ['nekob'],
  emoji: '',
  userperm: ['SEND_MESSAGES'],
  botperm: ['SEND_MESSAGES'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let endpoint = args.join(' ');
    if (!message.channel.nsfw) return;
    if (!endpoint) endpoint = 'kemonomimi';
    fetch(`https://nekobot.xyz/api/image?type=${endpoint}`)
      .then((res) => res.json())
      .then((body) => {
        message.channel.send({ content: `${body.message}` });
      });
  },
};
