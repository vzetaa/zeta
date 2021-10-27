const client = require('../index');
const { MessageEmbed } = require('discord.js');

client.on('interactionCreate', async (interaction) => {
  // Debug channel declarations
  const debugChannel = client.channels.cache.find(
    (channel) => channel.id === '899997057849393225'
  );
  // Slash Command Handling
  if (interaction.isCommand()) {
    await interaction.deferReply({ ephemeral: false }).catch(() => {});

    const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd) return interaction.followUp({ content: 'An error has occured ' });

    const args = [];

    for (let option of interaction.options.data) {
      if (option.type === 'SUB_COMMAND') {
        if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value);
        });
      } else if (option.value) args.push(option.value);
    }
    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    );

    try {
      cmd.run(client, interaction, args);
    } catch (err) {
      const embed = new MessageEmbed()
        .setTitle(':x: An Error Occured')
        .setDescription(`\`\`\`yml\n${err}\n\`\`\``)
        .setColor('RED')
        .setTimestamp();
      debugChannel.send({ embeds: [embed] });
      console.log(err);
    }
  }

  // Context Menu Handling
  if (interaction.isContextMenu()) {
    await interaction.deferReply({ ephemeral: false });
    const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);
  }
});
