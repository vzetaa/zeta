import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import datas from '../../Data/Hiragana.json';

export const slash: Slash = {
	name: 'hiragana',
	description: 'Learn hiragana characters',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		let data = datas[Math.floor(Math.random() * 105)];
		const embed = new MessageEmbed()
			.setTitle(`${data.kana} - ${data.romaji}`)
			.addField(`Kana`, `${data.kana}`, true)
			.addField(`Romaji`, `${data.romaji}`, true)
			.addField(`Type`, `${data.type}`, true)
			.setColor('GREY')
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
