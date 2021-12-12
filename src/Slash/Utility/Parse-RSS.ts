import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import Parser from 'rss-parser';
const parser = new Parser();

export const slash: Slash = {
	name: 'rss',
	description: 'Parse RSS (XML) into Read-able Text',
	testOnly: false,
	options: [
		{
			type: 3,
			name: 'rss_url',
			description: 'Valid RSS / XML URL',
			required: true,
		},
	],
	run: async (client, interaction, args) => {
		const [rss_url]: any = args;
		parser
			.parseURL(rss_url)
			.then((feeds) => {
				const feed1 = feeds.items[0];
				const embed = new MessageEmbed()
					.setTitle(`${feeds.title}`)
					.setURL(feed1.link)
					.setDescription(`${feed1.contentSnippet}`)
					.setColor('ORANGE');
				interaction.followUp({ embeds: [embed] });
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
