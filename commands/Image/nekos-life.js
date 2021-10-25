const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'nekos',
  description: 'Get an images from nekos.life',
  aliases: ['nekos-life', 'nl'],
  emoji: '',
  userperm: ['SEND_MESSAGES'],
  botperm: ['SEND_MESSAGES'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let type = args.join(' ');
    if (!message.channel.nsfw)
      return message.reply({ content: `Not a NSFW channel!` });
    if (!type) type = 'lewd';
    fetch(`https://nekos.life/api/v2/img/${type}`)
      .then((res) => res.json())
      .then((body) => {
        message.channel.send({ content: `${body.url}` });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
