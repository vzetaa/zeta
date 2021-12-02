import { Command } from '../../interfaces';
import fetch from 'node-fetch';

export const command: Command = {
	name: 'nekos',
	description: 'Get an images from nekos.life',
	aliases: ['nekos-life', 'nl'],
	usage: '[type]',
	testOnly: false,
	permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	run: async (client, message, args) => {
		let type = args.join(' ');
		if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
			return message.reply({ content: `Not an NSFW Channel!` });
		if (!type) type = 'lewd';
		fetch(`https://nekos.life/api/v2/img/${type}`)
			.then((res) => res.json())
			.then((body) => {
				message.channel.send({ content: `${body.url}` });
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
