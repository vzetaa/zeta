require('dotenv').config();
const client = require('../index');
const prefix = process.env.PREFIX || '!';
const { MessageEmbed } = require('discord.js');
const debugChannel = client.channels.cache.get('899997057849393225');

client.on('messageCreate', async (message) => {
  if (
    message.author.bot ||
    !message.guild ||
    !message.content.toLowerCase().startsWith(process.env.PREFIX)
  )
    return;

  const [cmd, ...args] = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const command =
    client.commands.get(cmd.toLowerCase()) ||
    client.commands.find((c) => c.aliases?.includes(cmd.toLowerCase()));

  if (!command) return;
  try {
    await command.run(client, message, args);
  } catch (err) {
    const embed = new MessageEmbed()
      .setTitle(':x: An Error Occured')
      .setDesription(`\`\`\`yml\n${err}\n\`\`\``)
      .setColor('RED')
      .setTimestamp();
    debugChannel.send({ embeds: [embed] });
    console.log(err);
  }
});
