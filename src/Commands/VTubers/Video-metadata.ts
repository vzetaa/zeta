import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import holoClient from '../../Exports/Holodex';
import moment from 'moment';
const capitalize = (str) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const command: Command = {
	name: 'videoinfo',
	description: 'Get Video Metadata by Video ID',
	aliases: ['vidinfo'],
	usage: '<videoId: string>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const videoId = args.join(' ');
		const color: ColorResolvable = message.guild.me.displayHexColor;
		if (!videoId) return message.reply({ content: 'Please specify video id!' });
		holoClient
			.getVideo(`${videoId}`)
			.then((vid) => {
				const youtubeLink = `https://youtu.be/${vid.videoId}`;
				const embed = new MessageEmbed()
					.setTitle(`${vid.title}`)
					.setURL(`${youtubeLink}`)
					.setThumbnail(`${vid.channel.avatarUrl}`)
					.setColor(color)
					.setDescription(
						`Type : ${capitalize(vid.videoType)}\nTopic : ${capitalize(
							vid.topic
						)}\nStart / Uploaded at : ${moment(vid.actualStart).format(
							'llll'
						)}\nEnded at : ${moment(vid.actualEnd).format('llll')}`
					);
				message.channel.send({ embeds: [embed] });
			})
			.catch((err) => console.log(err));
	},
};
