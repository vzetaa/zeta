import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
    name: 'init',
    description: 'Manually initialize process',
    aliases: ['initialize', 'setup'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        if (message.author.id !== process.env.OWNERID) return;
        const fe: MessageEmbed = new MessageEmbed()
            .setTitle('Initializing new Places...')
            .setDescription('Hang on there while we importing some modules here.');
        const se: MessageEmbed = new MessageEmbed()
            .setTitle('Initialized.')
            .setDescription(`Successfully initialized. Here are some info we're collected from Database.`)
            .addField('Guild Name', `${message.guild.name}`)
            .addField('Type', 'Server')
            .addField('Initialized by', `<@${message.author.id}>`)
            .setFooter({ text: 'Initialized at' })
            .setTimestamp();
        message.channel.send({ embeds: [fe] }).then(msg => {
            new Promise(resolve => setTimeout(resolve, 7000));
            msg.edit({ embeds: [se] });
        });
    },
};
