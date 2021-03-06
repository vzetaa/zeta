import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
    name: 'waifu',
    description: 'Random lewd waifu image',
    aliases: ['nwfu'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        const waifu = await Lewd.waifupics('waifu');
        message.channel.send({ content: waifu.url });
    },
};
