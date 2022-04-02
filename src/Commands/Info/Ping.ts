import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'ping',
	description: 'Shows client latency ping',
	aliases: ['p'],
	usage: 'ping',
	testOnly: true,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setDescription(`:signal_strength: Ping Latency : ${client.ws.ping}ms!`)
			.setColor('GREY');
		message.channel.send({ embeds: [embed] });
	},
};
