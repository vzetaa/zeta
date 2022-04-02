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
			.setTitle('Zeta Help Desk')
			.setURL('https://zetaa.gq')
			// .setImage(`https://cdn.upload.systems/uploads/HPAkGOVy.jpg`)
			.setDescription(
				`I'm ゼータ／Zeta here~! Helper at Falcxxdev's Private server! 📜\n\nPlease refer to Documentation page to using my commands.\n${homepage}`
			)
			// .setThumbnail(interaction.client.user.displayAvatarURL({ size: 512 }))
			.setColor('GREY')
			.setFooter({
				text: interaction.user.tag,
				iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
			})
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
