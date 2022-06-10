import { ColorResolvable, GuildBasedChannel, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
	name: 'channel',
	description: 'Show informations about a channel',
	testOnly: false,
	options: [
		{
			type: 'CHANNEL',
			name: 'channel',
			description: 'Channel to show information to',
			required: true,
		},
	],
	run: async (client, interaction, args) => {
		const [channel]: string[] = args;
		const ch: GuildBasedChannel = interaction.guild.channels.cache.get(channel);
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const checkDays = (date: Date) => {
			let now = new Date();
			let diff = now.getTime() - date.getTime();
			let days = Math.floor(diff / 86400000);
			return days + (days == 1 ? ' day' : ' days') + ' ago';
		};
		let chType: string = ch.type;
		if (chType === 'GUILD_TEXT') chType = 'Text Channel';
		if (chType === 'GUILD_VOICE') chType = 'Voice Channel';
		if (chType === 'GUILD_PUBLIC_THREAD') chType = 'Public Thread';
		if (chType === 'GUILD_PRIVATE_THREAD') chType = 'Private Thread';
		if (chType === 'GUILD_CATEGORY') chType = 'Category';
		if (chType === 'GUILD_NEWS') chType = 'Announcement Channel';
		if (chType === 'GUILD_STAGE_VOICE') chType = 'Stage Channel';
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`💬 Channel Information`)
			.setThumbnail(interaction.guild.iconURL({ dynamic: false }))
			.setDescription(`Information About ${ch}`)
			.addField('Created At:', `${checkDays(ch.createdAt)}`, true)
			.addField('Channel ID:', `${ch.id}`, true)
			.addField('Channel Type:', `${chType}`, true)
			.setTimestamp()
			.setColor(color);
		interaction.followUp({ embeds: [embed] });
	},
};
