import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import fetch, { Response } from 'node-fetch';

export const slash: Slash = {
	name: 'urban',
	description: 'Search slang word meanings from Urban Dictionary',
	testOnly: false,
	options: [
		{
			type: 'STRING',
			name: 'word',
			description: 'Word to search to',
			required: true,
		},
	],
	run: async (client, interaction, args) => {
		const trim = (input: string) => {
			return input.length > 1024 ? `${input.slice(0, 1020)} ...` : input;
		};
		const [word]: string[] = args;
		const res: Response = await fetch(
			`https://api.urbandictionary.com/v0/define?term=${encodeURIComponent(
				word
			)}`
		);
		const body: any = await res.json();
		const grpBody = body.list[0];
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(grpBody.word)
			.setURL(grpBody.permalink)
			.setColor('RANDOM')
			.addField('DEFINITION', trim(grpBody.definition))
			.addField('EXAMPLE', trim(grpBody.example))
			.addField(
				'RATINGS',
				`${grpBody.thumbs_up} 👍 || ${grpBody.thumbs_down} 👎`
			);
		interaction.followUp({ embeds: [embed] });
	},
};
