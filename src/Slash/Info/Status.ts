import { ColorResolvable, MessageEmbed } from 'discord.js';
import { CpuInfo, cpus, uptime } from 'os';
import { Slash } from '../../Interfaces';
import ms from 'ms';

export const slash: Slash = {
	name: 'status',
	description: 'Show client status',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const capitalize = (str: string) => {
			return str.charAt(0).toUpperCase() + str.slice(1);
		};
		const core: CpuInfo = cpus()[0];
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`${capitalize(client.user.username)} Stats`)
			.setThumbnail(client.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(color)
			.addField(
				':desktop: System',
				`**❯ OS Platform :** ${capitalize(
					process.platform
				)}\n**❯ OS Uptime :** ${ms(uptime() * 1000, {
					long: true,
				})}\n**❯ CPU Cores :** ${cpus().length}\n**❯ CPU Model** : ${
					core.model
				}\n**❯ CPU Speed** : ${core.speed} MHz`
			)
			.addField(
				':globe_with_meridians: Network',
				`**❯ Latency :** ${client.ws.ping} ms`
			)
			.setTimestamp();
		interaction.followUp({ embeds: [embed] });
	},
};
