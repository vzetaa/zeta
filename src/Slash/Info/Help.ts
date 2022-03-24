import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import { homepage } from '../../../package.json';

export const slash: Slash = {
	name: 'help',
	description: 'Show this help desk',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const embed = new MessageEmbed()
			.setTitle('Koyorin Help Desk')
			.setImage(`https://cdn.upload.systems/uploads/HPAkGOVy.jpg`)
			.setDescription(
				`I'm こより／Koyorin here~! Maid and Helper in this server! 🧪\n\nPlease refer to Documentation page to using my commands. Thanks!\n${homepage}`
			)
			// .setThumbnail(interaction.client.user.displayAvatarURL({ size: 512 }))
			.setColor('LUMINOUS_VIVID_PINK')
			.setFooter({
				text: interaction.user.tag,
				iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
			})
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
