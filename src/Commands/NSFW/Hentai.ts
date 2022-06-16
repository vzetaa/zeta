import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
    name: 'hentai',
    description: 'Random hentai image',
    aliases: [],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        const hentai = await Lewd.nekobot('hentai');
        message.channel.send({ content: hentai.message });
    },
};
