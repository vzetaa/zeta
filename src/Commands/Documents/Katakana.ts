import { MessageEmbed } from 'discord.js';
import { Command } from '../../interfaces';
import datas from '../../Data/Katakana.json';

export const command: Command = {
	name: 'katakana',
	description: 'Learn katakana characters',
	aliases: [],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const errEmbed = new MessageEmbed()
			.setTitle(':x: | No permission!')
			.setDescription(
				'You must have <@&902440072148836383> to use this command!'
			)
			.setColor('RED')
			.setTimestamp();
		if (!message.member.roles.cache.find((r) => r.id === '902440072148836383'))
			return message.channel.send({ embeds: [errEmbed] });
		let data = datas[Math.floor(Math.random() * 105)];
		const embed = new MessageEmbed()
			.setTitle(`${data.kana} - ${data.romaji}`)
			.addField(`Kana`, `${data.kana}`, true)
			.addField(`Romaji`, `${data.romaji}`, true)
			.addField(`Type`, `${data.type}`, true)
			.setColor('PURPLE')
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};
