import { MessageEmbed } from 'discord.js';
import { Command } from '../../interfaces';

export const command: Command = {
	name: 'avatar',
	description: 'Shows user avatar',
	aliases: ['pfp'],
	usage: '[@user]',
	testOnly: false,
	permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	run: async (client, message, args) => {
		const imgUrl = message.author.displayAvatarURL({
			size: 2048,
			dynamic: true,
		});
		const png = message.author.displayAvatarURL({ size: 2048, format: 'png' });
		const jpg = message.author.displayAvatarURL({ size: 2048, format: 'jpg' });
		const webp = message.author.displayAvatarURL({
			size: 2048,
			format: 'webp',
		});
		const gif = message.author.displayAvatarURL({ size: 2048, format: 'gif' });

		const embed = new MessageEmbed()
			.setTitle(`${message.author.username}'s Avatar`)
			.setDescription(
				`[PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`
			)
			.setImage(imgUrl)
			.setFooter(`${message.author.tag}`)
			.setTimestamp()
			.setColor(message.guild.me.displayHexColor);

		message.channel.send({ embeds: [embed] });
	},
};
