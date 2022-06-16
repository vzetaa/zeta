import { Command } from '../../Interfaces';

export const command: Command = {
    name: 'say',
    description: 'Say a text',
    aliases: ['echo'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const argument = args.join(' ');
        if (!argument) return message.reply('Specify a text to say!');
        message.channel.send({ content: argument });
    },
};
