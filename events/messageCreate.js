const client = require('../index');
const dotenv = require('dotenv');
dotenv.config();
const prefix = process.env.PREFIX || '!';

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
    console.log(err);
  }
});
