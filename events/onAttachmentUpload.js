require('dotenv').config();
const client = require('../index');
const Schema = require('../models/picture');
const { MessageEmbed } = require('discord.js');
const originChannel = process.env.UPLOAD_CHANNEL;

client.on('messageCreate', (message) => {
  const debugChannel = client.channels.cache.find(
    (channel) => channel.id === '899997057849393225'
  );
  if (originChannel.includes(message.channel.id)) {
    if (message.author.bot) return;
    const imgUrl =
      message.attachments.size > 0
        ? message.attachments.map((att) => att.url)
        : message.content;
    const fixedImg = imgUrl[0];
    try {
      Schema.findOne({ Url: fixedImg }, async (err, data) => {
        if (data) {
          data.Url = fixedImg;
          data.Channel = message.channel.id;
          data.save();
        } else {
          new Schema({
            Url: fixedImg,
            Channel: message.channel.id,
          }).save();
        }
        const embed = new MessageEmbed()
          .setTitle(
            `:white_check_mark: Successfully uploaded one message to database!`
          )
          .setURL(fixedImg)
          .setImage(fixedImg)
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
