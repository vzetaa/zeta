import pretty from 'pretty-ms';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'uptime',
	description: 'Show client uptime',
	aliases: ['up'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setDescription(`🕘 Uptime : ${pretty(client.uptime)}`)
			.setColor('LUMINOUS_VIVID_PINK');
		message.channel.send({ embeds: [embed] });
	},
};
