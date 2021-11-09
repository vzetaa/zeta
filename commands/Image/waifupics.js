const { Client, Message, MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
  name: 'waifupics',
  description: 'Get an image from waifu.pics',
  aliases: ['wfupics', 'waifupic'],
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
    if (!type) type = 'neko';
    fetch(`https://api.waifu.pics/nsfw/${type}`)
      .then((res) => res.json())
      .then((body) => {
        message.channel.send({ content: `${body.url}` });
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
