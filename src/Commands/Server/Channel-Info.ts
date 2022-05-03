import { ColorResolvable, MessageEmbed, TextBasedChannel } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'ch',
	description: 'Returns information about a channel',
	aliases: ['channel'],
	usage: '<Channel>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const color: ColorResolvable = message.guild.me.displayHexColor;
		const checkDays = (date) => {
			let now = new Date();
			let diff = now.getTime() - date.getTime();
			let days = Math.floor(diff / 86400000);
			return days + (days == 1 ? ' day' : ' days') + ' ago';
		};
		let channel: TextBasedChannel = message.mentions.channels.first();
		if (!channel) return message.reply('Please mention a channel.');
		let channelType: String = channel.type;
		if (channelType === 'GUILD_NEWS') {
			channelType = 'News Channel';
		}
		if (channelType === 'GUILD_TEXT') {
			channelType = 'Text Channel';
		}
		let e: MessageEmbed = new MessageEmbed()
			.setTitle(`💬 Channel Information`)
			.setThumbnail(message.guild.iconURL({ dynamic: false }))
			.setDescription(`Information About ${channel}`)
			.addField('Created At:', `${checkDays(channel.createdAt)}`, true)
			.addField('Channel ID:', `${channel.id}`, true)
			.addField('Channel Type:', `${channelType}`, true)
			.setTimestamp()
			.setColor(color);
		message.channel.send({ embeds: [e] });
	},
};
