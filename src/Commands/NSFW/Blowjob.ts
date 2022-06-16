import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
    name: 'blowjob',
    description: 'Random lewd blowjob image',
    aliases: ['nbj'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
            return message.reply({ content: `Not an NSFW Channel!` });
        const bj = await Lewd.waifupics('blowjob');
        message.channel.send({ content: bj.url });
    },
};
