import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

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
		try {
			const res = await Lewd.waifupics(type);
			message.channel.send({ content: res.url });
		} catch (e) {
			console.log(e);
		}
	},
};
