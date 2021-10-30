const { Client, CommandInteraction, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'clear',
  description: 'Clear and Delete message in specified amount',
  options: [
    {
      type: 4,
      name: 'amount',
      description: 'How many messages you would like to clear? (2 - 100)',
      required: true,
    },
  ],
  /**
   * @param {Client} client
   * @param {CommandInteraction} interaction
   * @param {String[]} args
   */
  run: async (client, interaction, args) => {
    if (!interaction.member.permissions.has === 'MANAGE_MESSAGES') return;
    let [amount] = args;
    amount = Number(amount, 10) || parseInt(amount);
    if (amount <= 2 || amount > 100)
      return interaction.followUp({
        content: 'Please enter a number of message between 2 and 100',
        ephemeral: true,
      });
    try {
      await interaction.deleteReply();
      await interaction.channel.bulkDelete(amount).then(async (m) => {
        let embed = new MessageEmbed()
          .setColor('0x#00ffff')
          .setDescription(
            `<a:verified_green:863233286690832404>  Cleared **${m.size}**/**${amount}** messages!`
          );

        interaction.followUp({ embeds: [embed] }).then((msg) => {
          msg.delete({ setTimeout: 7000 });
        });
      });
    } catch (e) {
      console.log(e);
      interaction.followUp({
        content: `You can only delete the messages which are not older than 14 days.`,
        ephemeral: true,
      });
    }
  },
};
