import { Command } from '../../Interfaces';
import fetch from 'node-fetch';

export const command: Command = {
	name: 'nekobot',
	description: 'Get an images from nekobot.xyz',
	aliases: ['nekob'],
	usage: '[endpoint]',
	testOnly: false,
	permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	run: async (client, message, args) => {
		let endpoint = args.join(' ');
		if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
			return message.reply({ content: `Not an NSFW Channel!` });
		if (!endpoint) endpoint = 'kemonomimi';
		fetch(`https://nekobot.xyz/api/image?type=${endpoint}`)
			.then((res) => res.json())
			.then((body) => {
				message.channel.send({ content: `${body.message}` });
			});
	},
};
