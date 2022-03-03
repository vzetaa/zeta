import { ColorResolvable, MessageEmbed } from 'discord.js';
import holoClient from '../../Exports/Holodex';
import { Command } from '../../Interfaces';
const numberWithCommas = (int) => {
	// ong, regex :/
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const command: Command = {
	name: 'channelinfo',
	description: 'Get VTubers Channel Info',
	aliases: ['chinfo'],
	usage: '<channelId: string>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const channelId: string = args.join(' ');
		const color: ColorResolvable = message.guild.me.displayHexColor;
		if (!channelId)
			return message.reply({ content: 'Please specify channel id!' });
		holoClient
			.getChannel(`${channelId}`)
			.then((ch) => {
				const embed = new MessageEmbed()
					.setTitle(`${ch.name}`)
					.setThumbnail(`${ch.avatarUrl}`)
					.setImage(`${ch.bannerUrl}`)
					.setColor(color)
					.setDescription(
						`Channel Name : ${ch.name}\nEnglish Name : ${
							ch.englishName
						}\nAffilation : ${
							ch.organization
						}\nSubscribers : ${numberWithCommas(
							ch.subscriberCount
						)}\nTotal videos : ${
							ch.videoCount
						} videos\nTotal views : ${numberWithCommas(
							ch.viewCount
						)}\nTwitter : [@${ch.twitterName}](https://twitter.com/${
							ch.twitterName
						})`
					);
				message.channel.send({ embeds: [embed] });
			})
			.catch((err) => console.log(err));
	},
};
