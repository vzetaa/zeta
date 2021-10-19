require('dotenv').config();
const client = require('../index');
const Schema = require('../models/picture');
const { MessageEmbed } = require('discord.js');
const originChannel = process.env.ORIGIN_CHANNEL;

client.on('messageCreate', (message) => {
  const debugChannel = client.channels.cache.find(
    (channel) => channel.id === '899997057849393225'
  );
  if (originChannel.includes(message.channel.id)) {
    if (message.author.bot) return;
    const imgUrl =
      message.attachments.size > 0
        ? message.attachments.map((attachments) => attachments.url)
        : message.content;
    try {
      Schema.findOne({ Url: imgUrl }, async (err, data) => {
        if (data) {
          data.Url = imgUrl;
          data.Channel = message.channel.id;
          data.save();
        } else {
          new Schema({
            Url: imgUrl,
            Channel: message.channel.id,
          }).save();
        }
        const embed = new MessageEmbed()
          .setTitle(
            `:white_check_mark: Successfully uploaded one message to database!`
          )
          .setURL(imgUrl)
          .setImage(imgUrl)
          .setColor('FUCHSIA')
          .setTimestamp();
        debugChannel.send({ embeds: [embed] });
        console.log('Saved one message to database!');
      });
    } catch (err) {
      debugChannel.send({
        content: `An error occured!\n\`\`\`yml\n${err}\n\`\`\``,
      });
      console.log(err);
    }
  }
});
