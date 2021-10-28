const { Client, CommandInteraction, MessageEmbed } = require('discord.js');
const datas = require('../../data/Hiragana.json');

module.exports = {
  name: 'hiragana',
  description: 'Learn and search hiragana character',
  options: [],
  /**
   *
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    const data = datas[Math.floor(Math.random() * 105)];
    const embed = new MessageEmbed()
      .setTitle(`${data.kana} - ${data.romaji}`, true)
      .addField(`Kana`, `${data.kana}`, true)
      .addField(`Romaji`, `${data.romaji}`, true)
      .addField(`Type`, `${data.type}`, true)
      .setColor('FUCHSIA')
      .setTimestamp();
    interaction.followUp({ embeds: [embed] });
  },
};
