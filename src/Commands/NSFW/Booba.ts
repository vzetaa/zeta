import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
    name: 'boobs',
    description: 'Random lewd boobs image',
    aliases: ['boob', 'booba', 'breast'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        const boba = await Lewd.nekobot('hboobs');
        message.channel.send({ content: boba.message });
    },
};
