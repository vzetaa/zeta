import holoClient from '../../Exports/Holodex';
import { Command } from '../../Interfaces';
import { MessageEmbed } from 'discord.js';

export const command: Command = {
    name: 'upcoming-stream',
    description: 'Query and See Upcoming Stream from a channel',
    aliases: ['next-stream'],
    usage: '<channelId: string>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const channelId = args.join(' ');
        if (!channelId) return message.reply({ content: 'Please specify channel id!' });
        holoClient
            .getLiveVideosByChannelId(channelId)
            .then(vid => {
                const data = vid[0];
                const youtubeUrl = `https://youtu.be/${data.videoId}`;
                message.channel.send({ content: youtubeUrl });
            })
            .catch(err => console.log(err));
    },
};
