import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import fetch, { Response } from 'node-fetch';

export const command: Command = {
	name: 'urban',
	description: 'Search slang words meanings from Urban Dictionary',
	aliases: ['urban-dict'],
	usage: '<SlangWord>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const trim = (input) => {
			return input.length > 1024 ? `${input.slice(0, 1020)} ...` : input;
		};
		const word: string = encodeURIComponent(args.join(' '));
		if (!word) return message.reply('Please specify a word to search to!');
		const res: Response = await fetch(
			`https://api.urbandictionary.com/v0/define?term=${word}`
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
		message.channel.send({ embeds: [embed] });
	},
};
