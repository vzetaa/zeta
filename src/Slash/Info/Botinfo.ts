import { ColorResolvable, MessageEmbed, version } from 'discord.js';
import { Slash } from '../../Interfaces';
import { utc } from 'moment';
import project from '../../../package.json';
import pretty from 'pretty-ms';

export const slash: Slash = {
	name: 'botinfo',
	description: 'Show bot information',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`:robot: ${client.user.username} Information`)
			.setThumbnail(interaction.client.user.displayAvatarURL({ size: 512 }))
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

		interaction.followUp({ embeds: [embed] });
	},
};
