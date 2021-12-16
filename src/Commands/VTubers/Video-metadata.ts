import { getColorFromURL } from 'color-thief-node';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import holoClient from '../../Exports/Holodex';
import moment from 'moment';

export const command: Command = {
	name: 'videoinfo',
	description: 'Get Video Metadata by Video ID',
	aliases: ['vidinfo'],
	usage: '<videoId: string>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const videoId = args.join(' ');
		if (!videoId) return message.reply({ content: 'Please specify video id!' });
		holoClient
			.getVideo('kKTb4lpGFys')
			.then((vid) => {
				const youtubeLink = `https://youtu.be/${vid.videoId}`;
				(async () => {
					const accentColor = await getColorFromURL(vid.channel.bannerUrl);
					const embed = new MessageEmbed()
						.setTitle(`${vid.title}`)
						.setURL(`${youtubeLink}`)
						.setThumbnail(`${vid.channel.avatarUrl}`)
						.setColor(accentColor)
						.setDescription(
							`Type : ${vid.videoType.toUpperCase()}\nTopic : ${vid.topic.toUpperCase()}\nStart / Uploaded at : ${moment(
								vid.actualStart
							).format('llll')}\nEnded at : ${moment(vid.actualEnd).format(
								'llll'
							)}`
						);
					message.channel.send({ embeds: [embed] });
					console.log(embed);
				})();
			})
			.catch((err) => console.log(err));
	},
};
