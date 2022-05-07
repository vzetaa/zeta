import pretty from 'pretty-ms';
import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
	name: 'uptime',
	description: 'Shows client uptime',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const embed: MessageEmbed = new MessageEmbed()
			.setDescription(`🕘 Uptime : ${pretty(client.uptime)}`)
			.setColor(color);
		interaction.followUp({ embeds: [embed] });
	},
};
