import { Slash } from '../../Interfaces';
import fetch from 'node-fetch';

export const slash: Slash = {
	name: 'nekobot',
	description: 'Get an images from nekobot.xyz',
	testOnly: false,
	options: [
		{
			type: 3,
			name: 'endpoint',
			description: 'Type that you want. Leave it blank for random type.',
			required: false,
		},
	],
	run: async (client, interaction, args) => {
		if (interaction.channel.type === 'GUILD_TEXT' && !interaction.channel.nsfw)
			return interaction.followUp({
				content: `Not an NSFW Channel!`,
				ephemeral: true,
			});
		let [endpoint] = args;
		if (!endpoint) endpoint = 'lewd';
		fetch(`https://nekobot.xyz/api/image?type=${endpoint}`)
			.then((res) => res.json())
			.then((body) => {
				interaction.followUp({ content: `${body.message}` });
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
