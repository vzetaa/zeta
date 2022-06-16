import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import fetch, { Response } from 'node-fetch';
import moment from 'moment';

export const command: Command = {
    name: 'github',
    description: 'Search for GitHub user by username',
    aliases: ['gh'],
    usage: '<Username>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const color: ColorResolvable = message.guild.me.displayHexColor;
        const user: string = args.join(' ');
        if (!user) return message.reply('Please specify a username to search!');
        const req: Response = await fetch(`https://luminabot.xyz/api/json/github?username=${user}`);
        if (req.status === 404) return message.reply('User does not exist!');
        const res = await req.json();
        const embed: MessageEmbed = new MessageEmbed()
            .setTitle(`${res.name}`)
            .setURL(res.url)
            .setThumbnail(res.avatar)
            .addField(`Bio`, `${res.bio || 'No Bio'}`)
            .addField(`Location`, `${res.location || 'No Location'}`, true)
            .addField(`Email`, `${res.email || 'None'}`, true)
            .addField(`Website`, `${res.blog || 'No Website'}`)
            .addField(`Created at`, `${moment(res.created_at).format('LLLL')}`)
            .addField(`Followers`, `${res.followers}`, true)
            .addField(`Following`, `${res.following}`, true)
            .setColor(color)
            .setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};
