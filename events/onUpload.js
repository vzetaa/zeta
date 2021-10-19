require('dotenv').config();
const client = require('../index');
const Schema = require('../models/picture');
const originChannel = process.env.ORIGIN_CHANNEL;

client.on('messageCreate', (message) => {
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
        console.log('Saved one message to database!');
      });
    } catch (err) {
      console.log(err);
    }
  }
});
