import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
	name: 'help',
	description: 'Show this help desk',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const embed = new MessageEmbed()
			.setTitle('Koyori Help Desk')
			.setImage(`https://cdn.upload.systems/uploads/HPAkGOVy.jpg`)
			.setDescription(
				`Hello there! I'm Koyori here~! Maids and Helpers in this server! 🧪\n\nLooking for Command List? Oh, Here is it!\n\nYou can see Full Command List at\n[gifaldyazka.is-a.dev/koyori-dscbot/p/commands](https://gifaldyazka.is-a.dev/koyori-dscbot/p/commands)!`
			)
			.setThumbnail(interaction.client.user.displayAvatarURL({ size: 512 }))
			.setColor('LUMINOUS_VIVID_PINK')
			.setFooter(
				`${interaction.user.tag}`,
				interaction.user.displayAvatarURL({ dynamic: true })
			)
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
