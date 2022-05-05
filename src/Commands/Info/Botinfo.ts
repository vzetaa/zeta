import { ColorResolvable, MessageEmbed, version } from 'discord.js';
import { Command } from '../../Interfaces';
import { utc } from 'moment';
import project from '../../../package.json';
import pretty from 'pretty-ms';

export const command: Command = {
	name: 'botinfo',
	description: 'Show bot information',
	aliases: ['info'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const color: ColorResolvable = message.guild.me.displayHexColor;
		const embed = new MessageEmbed()
			.setTitle(`:robot: ${client.user.username} Information`)
			.setThumbnail(message.client.user.displayAvatarURL({ size: 512 }))
			.setDescription(
				`**❯ Client :** ${client.user.tag} (${
					client.user.id
				})\n**❯ Commands Total :** ${
					client.commands.size
				}\n**❯ Server :** ${client.guilds.cache.size.toLocaleString()} Servers\n**❯ Users :** ${client.guilds.cache
					.reduce((a, b) => a + b.memberCount, 0)
					.toLocaleString()} Users\n**❯ Channels :** ${client.channels.cache.size.toLocaleString()} Channels\n**❯ Creation Date :** ${utc(
					client.user.createdTimestamp
				).format('Do MMMM YYYY HH:mm:ss')}\n**❯ Node.js :** ${
					process.version
				}\n**❯ Project Version :** v${
					project.version
				}\n**❯ Discord.js :** v${version}\n**❯ Bot Uptime :** ${pretty(
					client.uptime
				)}`
			)
			.setColor(color)
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};
