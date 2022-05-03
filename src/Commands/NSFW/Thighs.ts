import { Command } from '../../Interfaces';
import Lewd from '../../Exports/LewImg';

export const command: Command = {
	name: 'thighs',
	description: 'Random Thighs NSFW!',
	aliases: ['thicc', 'thigh'],
	usage: '',
	testOnly: true,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		if (message.channel.type === 'GUILD_TEXT' && !message.channel.nsfw)
			return message.reply({ content: `Not an NSFW Channel!` });
		const thigh = await Lewd.nekobot('hthigh');
		message.channel.send({ content: thigh.message });
	},
};
