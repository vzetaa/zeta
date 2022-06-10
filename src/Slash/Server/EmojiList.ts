import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
	name: 'emoji',
	description: 'List all server emojis',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		let emojis: string = '';
		let emojisAnimated: string = '';
		let emojiCount: number = 0;
		let animated: number = 0;
		let overallEmojis: number = 0;
		const fetchEmoji = (id: any) => {
			return interaction.client.emojis.cache.get(id).toString();
		};
		interaction.guild.emojis.cache.forEach((emoji) => {
			overallEmojis++;
			if (emoji.animated) {
				animated++;
				emojisAnimated += fetchEmoji(emoji.id);
			} else {
				emojiCount++;
				emojis += fetchEmoji(emoji.id);
			}
		});
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`Showing emojis of ${interaction.guild.name}`)
			.setThumbnail(interaction.guild.iconURL({ dynamic: true, size: 512 }))
			.setDescription(
				`**Animated [${animated}]**:\n${emojisAnimated}\n\n**Standard [${emojiCount}]**:\n${emojis}`
			)
			.setColor(color)
			.setTimestamp();
		interaction.followUp({ embeds: [embed] });
	},
};
