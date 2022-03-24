import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import { homepage } from '../../../package.json';

export const command: Command = {
	name: 'help',
	description: 'Show this help desk',
	aliases: ['h'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setTitle('Koyorin Help Desk')
			.setImage(`https://cdn.upload.systems/uploads/HPAkGOVy.jpg`)
			.setDescription(
				`I'm こより／Koyorin here~! Maid and Helper in this server! 🧪\n\nPlease refer to Documentation page to using my commands. Thanks!\n${homepage}`
			)
			// .setThumbnail(message.client.user.displayAvatarURL({ size: 512 }))
			.setColor('LUMINOUS_VIVID_PINK')
			.setFooter({
				text: `${message.author.tag}`,
				iconURL: message.author.displayAvatarURL({ dynamic: true }),
			})
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};
