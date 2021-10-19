const client = require('../index');

client.on('ready', () => {
  console.log(`Bot is ready!`);
  client.user.setStatus('idle');
  client.user.setActivity({ name: 'Falxxdev <3', type: 'LISTENING' });
});
