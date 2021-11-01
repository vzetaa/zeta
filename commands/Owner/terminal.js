const { Client, Message, MessageEmbed } = require('discord.js');
const child = require('child_process');

module.exports = {
  name: 'terminal',
  description: 'Executes unix-like command (Terminal command)',
  aliases: ['sh', 'zsh', 'bash'],
  emoji: '',
  userperm: ['SEND_MESSAGES'],
  botperm: ['SEND_MESSAGES'],
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const cmds = args.join(' ');
    if (!message.author.id === '788260234409672754') return;
    if (!cmds) return message.reply('Please specify a command to executed!');

    try {
      child.exec(cmds, (err, res) => {
        if (err)
          return message.channel
            .send({ content: `zsh: cocmmad not found ${cmds}` })
            .then(console.log(err));
        message.channel.send({
          embeds: [
            new MessageEmbed()
              .setTitle('Terminal - GNU Bash')
              .setDescription(`\`\`\`js\n${res.slice(0, 2000)}\`\`\``)
              .setFooter(`GNU Bash - Actioned by ${message.author.tag}`)
              .setColor('#800080'),
          ],
        });
      });
    } catch (err) {
      message.channel.send({ content: `zsh: cocmmad not found ${cmds}` });
      console.log(err);
    }
  },
};
