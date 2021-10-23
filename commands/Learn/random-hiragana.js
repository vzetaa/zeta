const { Client, Message, MessageEmbed } = require('discord.js');
const datas = require('../../data/Hiragana.json');

module.exports = {
  name: 'hiragana',
  description: 'Learn and search hiragana character',
  aliases: ['hira'],
  emoji: '',
  userperm: ['SEND_MESSAGES'],
  botperm: ['SEND_MESSAGES'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    let data = datas[Math.floor(Math.random() * 105)];
    const embed = new MessageEmbed()
      .setTitle(`${data.kana} - ${data.romaji}`, true)
      .addField(`Kana`, `${data.kana}`, true)
      .addField(`Romaji`, `${data.romaji}`, true)
      .addField(`Type`, `${data.type}`, true)
      .setColor('FUCHSIA')
      .setTimestamp();

    message.channel.send({ embeds: [embed] });
  },
};
