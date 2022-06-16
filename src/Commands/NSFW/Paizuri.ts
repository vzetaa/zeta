import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
    name: 'paizuri',
    description: 'Random lewd paizuri image',
    aliases: ['pai'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        const pzr = await Lewd.nekobot('paizuri');
        message.channel.send({ content: pzr.message });
    },
};
