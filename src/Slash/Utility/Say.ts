import { Slash } from '../../Interfaces';

export const slash: Slash = {
	name: 'say',
	description: 'Say a text',
	testOnly: false,
	options: [
		{
			type: 'STRING',
			name: 'text',
			description: 'Text to say to',
			required: true,
		},
	],
	run: async (client, interaction, args) => {
		const [argument]: string[] = args;
		interaction.followUp({ content: argument });
	},
};
