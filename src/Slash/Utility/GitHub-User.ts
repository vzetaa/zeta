import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import fetch, { Response } from 'node-fetch';
import moment from 'moment';

export const slash: Slash = {
	name: 'github',
	description: 'Search for GitHub user by username',
	testOnly: false,
	options: [
		{
			type: 'STRING',
			name: 'username',
			description: 'Username to search to',
			required: true,
		},
	],
	run: async (client, interaction, args) => {
		const [username]: string[] = args;
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		const req: Response = await fetch(
			`https://luminabot.xyz/api/json/github?username=${username}`
		);
		if (req.status === 404) return interaction.followUp('User does not exist!');
		const res = await req.json();
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`${res.name}`)
			.setURL(res.url)
			.setThumbnail(res.avatar)
			.addField(`Bio`, `${res.bio || 'No Bio'}`)
			.addField(`Location`, `${res.location || 'No Location'}`, true)
			.addField(`Email`, `${res.email || 'None'}`, true)
			.addField(`Website`, `${res.blog || 'No Website'}`)
			.addField(`Created at`, `${moment(res.created_at).format('LLLL')}`)
			.addField(`Followers`, `${res.followers}`, true)
			.addField(`Following`, `${res.following}`, true)
			.setColor(color)
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
