import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
	name: 'ping',
	description: 'Shows client ping latency',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const embed = new MessageEmbed()
			.setDescription(`Ping Latency : ${client.ws.ping}ms!`)
			.setColor('PURPLE');
		interaction.followUp({ embeds: [embed] });
	},
};
