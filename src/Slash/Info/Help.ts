import { MessageEmbed } from 'discord.js';
import { Slash } from '../../interfaces';

export const slash: Slash = {
	name: 'help',
	description: 'Show this help desk',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const embed = new MessageEmbed()
			.setTitle('Kogasa Help Desk')
			.setImage(`https://cdn.upload.systems/uploads/jIwkxukV.png`)
			.setDescription(
				`Hello there! I'm Kogasa here~! Maids and Helpers in this server! ☂️\n\nLooking for Command List? Oh, Here is it!\n\nYou can see Full Command List at\n[gifaldyazka.is-a.dev/kogasa-dscbot/p/commands](https://gifaldyazka.is-a.dev/kogasa-dscbot/p/commands)!`
			)
			.setThumbnail(interaction.client.user.displayAvatarURL({ size: 512 }))
			.setColor('PURPLE')
			.setFooter(
				`${interaction.user.tag}`,
				interaction.user.displayAvatarURL({ dynamic: true })
			)
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
