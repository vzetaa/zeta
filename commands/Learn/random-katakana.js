const { Client, Message, MessageEmbed } = require('discord.js');
const datas = require('../../data/Katakana.json');

module.exports = {
  name: 'katakana',
  description: 'Learn and search katakana character',
  aliases: [],
  emoji: '',
  userperm: ['SEND_MESSAGES'],
  botperm: ['SEND_MESSAGES'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const errEmbed = new MessageEmbed()
      .setTitle(':x: | No permission!')
      .setDescription(
        'You must have <@902440072148836383&> to use this command!'
      )
      .setColor('RED')
      .setTimestamp();
    if (!message.member.roles.cache.find((r) => r.id === '902440072148836383'))
      return message.channel.send({ embeds: [errEmbed] });
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
