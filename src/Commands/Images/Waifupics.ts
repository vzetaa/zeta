import { Command } from '../../Interfaces';
import fetch from 'node-fetch';

export const command: Command = {
	name: 'waifupics',
	description: 'Get an images from waifu.pics',
	aliases: ['wfupics', 'waifupic'],
	usage: '[type]',
	testOnly: false,
	permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	run: async (client, message, args) => {
		let type = args.join(' ');
		if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
			return message.reply({ content: `Not an NSFW Channel!` });
		if (!type) type = 'neko';
		fetch(`https://api.waifu.pics/nsfw/${type}`)
			.then((res) => res.json())
			.then((body) => {
				message.channel.send({ content: `${body.url}` });
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
