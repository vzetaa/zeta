import { Slash } from '../../Interfaces';
import { Video } from 'holodex.js';
import holoClient from '../../Exports/Holodex';

export const slash: Slash = {
	name: 'vtuber-next-stream',
	description: 'Get upcoming live stream of vtubers',
	testOnly: false,
	options: [
		{
			type: 'STRING',
			name: 'id',
			description: 'Channel id of the vtuber channel',
			required: true,
		},
	],
	run: async (client, interaction, args) => {
		const [id]: string[] = args;
		const get: Video[] = await holoClient.getLiveVideosByChannelId(id);
		const video: Video[] = await get;
		const data: Video = video[0];
		const youtubeUrl: string = `https://youtu.be/${data.videoId}`;
		interaction.followUp({ content: youtubeUrl });
	},
};
