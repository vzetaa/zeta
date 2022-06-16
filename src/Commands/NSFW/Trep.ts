import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
    name: 'trap',
    description: 'Random lewd trap image',
    aliases: ['ntrap'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        const trap = await Lewd.waifupics('trap');
        message.channel.send({ content: trap.url });
    },
};
