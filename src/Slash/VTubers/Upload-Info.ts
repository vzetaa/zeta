import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import { Video } from 'holodex.js';
import holoClient from '../../Exports/Holodex';
import moment from 'moment';
const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const slash: Slash = {
	name: 'vtuber-upload-CpuInfo',
	description: 'Get video or live uploads metadata by video id',
	testOnly: false,
	options: [
		{
			type: 'STRING',
			name: 'id',
			description: 'Video or Live ID',
			required: true,
		},
	],
	run: async (client, interaction, args) => {
		const [id]: string[] = args;
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const get: Video = await holoClient.getVideo(id);
		const video: Video = await get;
		const youtubeLink = `https://youtu.be/${video.videoId}`;
		const embed = new MessageEmbed()
			.setTitle(`${video.title}`)
			.setURL(`${youtubeLink}`)
			.setThumbnail(`${video.channel.avatarUrl}`)
			.setColor(color)
			.setDescription(
				`Type : ${capitalize(video.videoType)}\nTopic : ${capitalize(
					video.topic
				)}\nStart / Uploaded at : ${moment(video.actualStart).format(
					'llll'
				)}\nEnded at : ${moment(video.actualEnd).format('llll')}`
			);
		interaction.followUp({ embeds: [embed] });
	},
};
