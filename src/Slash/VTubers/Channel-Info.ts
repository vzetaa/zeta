import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import holoClient from '../../Exports/Holodex';
const formatNumber = (int: number) => {
	// regex :/
	return int.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const slash: Slash = {
	name: 'vtuber-channel',
	description: 'Get VTubers channel info',
	testOnly: false,
	options: [
		{
			type: 'STRING',
			name: 'id',
			description: 'Channel id of the vtuber channel',
		},
	],
	run: async (client, interaction, args) => {
		const [id]: string[] = args;
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const get = await holoClient.getChannel(id);
		const ch = await get;
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`${ch.name}`)
			.setThumbnail(`${ch.avatarUrl}`)
			.setImage(`${ch.bannerUrl}`)
			.setColor(color)
			.setDescription(
				`Channel Name : ${ch.name}\nEnglish Name : ${
					ch.englishName
				}\nAffilation : ${ch.organization}\nSubscribers : ${formatNumber(
					ch.subscriberCount
				)}\nTotal videos : ${
					ch.videoCount
				} videos\nTotal views : ${formatNumber(ch.viewCount)}\nTwitter : [@${
					ch.twitterName
				}](https://twitter.com/${ch.twitterName})`
			);
		interaction.followUp({ embeds: [embed] });
	},
};
