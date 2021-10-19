require('dotenv').config();
const { Client, Message } = require('discord.js');
const Schema = require('../../models/picture');
const originChannel = process.env.ORIGIN_CHANNEL;

module.exports = {
  name: 'get',
  description: 'Get saved url from Database',
  aliases: 'get',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    Schema.find({ Channel: originChannel }, async (err, data) => {
      if (!data)
        return message.reply(
          "There's no matched channel id at the database with this discord server. Please ensure to checking channel id!"
        );
      if (!message.channel.nsfw)
        return message.reply({ content: 'This is not a NSFW Channel!' });
      message.channel.send({
        content: `Started to backupping stored data from <#${originChannel}> to <#${message.channel.id}>...`,
      });
      data.map((x) => {
        message.channel.send({ content: `${x.Url}` });
      });
    });
  },
};
