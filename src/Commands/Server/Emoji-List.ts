import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'emoji',
	description: 'List all server emojis',
	aliases: ['emojis'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		let emojis: string = '';
		let emojisAnimated: string = '';
		let emojiCount: number = 0;
		let animated: number = 0;
		let overallEmojis: number = 0;
		const fetchEmoji = (id) => {
			return client.emojis.cache.get(id).toString();
		};
		message.guild.emojis.cache.forEach((emoji) => {
			overallEmojis++;
			if (emoji.animated) {
				animated++;
				emojisAnimated += fetchEmoji(emoji.id);
			} else {
				emojiCount++;
				emojis += fetchEmoji(emoji.id);
			}
		});
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`Showing emojis of ${message.guild.name}`)
			.setThumbnail(message.guild.iconURL({ dynamic: true, size: 512 }))
			.setDescription(
				`**Animated [${animated}]**:\n${emojisAnimated}\n\n**Standard [${emojiCount}]**:\n${emojis}`
			)
			.setColor('BLUE')
			.setTimestamp();
		message.channel.send({ embeds: [embed] });
	},
};
