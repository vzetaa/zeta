import { Command } from '../../Interfaces';
import { MessageEmbed } from 'discord.js';
import Parser from 'rss-parser';
const parser = new Parser();

export const command: Command = {
	name: 'parse-rss',
	description: 'Parse RSS (XML) into Read-able Text',
	aliases: ['rss-parse'],
	usage: '<xml_url>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const rss_url = args.join(' ');
		if (!rss_url)
			return message.reply({ content: 'Please specify RSS URL to parse!' });
		parser
			.parseURL(rss_url)
			.then((feeds) => {
				const feed1 = feeds.items[0];
				const embed = new MessageEmbed()
					.setTitle(`${feeds.title}`)
					.setURL(feed1.link)
					.setDescription(`${feed1.contentSnippet}`)
					.setColor('ORANGE');
				message.channel.send({ embeds: [embed] });
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
