import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

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
		try {
			const res = await Lewd.nekobot(endpoint);
			message.channel.send({ content: res.message });
		} catch (e) {
			console.log(e);
		}
	},
};
