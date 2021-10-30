const { Client, Message } = require('discord.js');
const Schema = require('../../models/picture');

module.exports = {
  name: 'insert',
  description: 'Insert uploaded image to database',
  aliases: 'insert-db',
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    if (!message.author.id === '788260234409672754') return;
    const imgUrl =
      message.attachments.size > 0
        ? message.attachments.map((attachments) => attachments.url)
        : args.join(' ');
    if (!imgUrl)
      return message.reply({
        content: `This command need 1 argument! Got 0 from 1.`,
      });
    Schema.findOne({ Channel: message.channel.id }, (err, data) => {
      if (data) {
        data.Url = imgUrl;
        data.save();
      } else {
        new Schema({
          Url: imgUrl,
          Channel: message.channel.id,
        }).save();
      }
      if (err) return console.log(err);
      message.channel.send(`Sucess!`);
    });
  },
};
