import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import fetch, { Response } from 'node-fetch';

export const command: Command = {
	name: 'djs',
	description: 'Explore and search anything about discord.js in the docs!',
	aliases: ['discord.js'],
	usage: '<Query>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const query: string = args.join(' ');
		if (!query)
			return message.reply({ content: 'Please specify a query to search!' });
		const url: string = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
			query
		)}`;
		const req: Response = await fetch(url);
		const res: MessageEmbed = await req.json();
		message.channel.send({ embeds: [res] });
	},
};
