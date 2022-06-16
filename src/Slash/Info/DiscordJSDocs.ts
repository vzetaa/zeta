import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import fetch, { Response } from 'node-fetch';

export const slash: Slash = {
    name: 'djs',
    description: 'Explore and search anything about discord.js in the docs!',
    testOnly: false,
    options: [
        {
            type: 'STRING',
            name: 'query',
            description: 'Query to search to',
            required: true,
        },
    ],
    run: async (client, interaction, args) => {
        const [query]: string[] = args;
        const url: string = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;
        const req: Response = await fetch(url);
        const res: MessageEmbed = await req.json();
        interaction.followUp({ embeds: [res] });
    },
};
