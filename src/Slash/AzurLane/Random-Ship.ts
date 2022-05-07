import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const slash: Slash = {
	name: 'randomship',
	description: 'Generate random ship',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const result = await AzurLane.listRandomShip().catch((err) =>
			interaction.followUp({ content: `Ship not found!` })
		);
		const color: ColorResolvable = interaction.guild.me.displayHexColor;
		let stars: string;
		let obtainedFrom: string = result.obtainedFrom.obtainedFrom;
		switch (result.stars) {
			case 1:
				stars = '★';
				break;
			case 2:
				stars = '★★';
				break;
			case 3:
				stars = '★★★';
				break;
			case 4:
				stars = '★★★★';
				break;
			case 5:
				stars = '★★★★★';
				break;
			case 6:
				stars = '★★★★★★';
				break;
			case 7:
				stars = '★★★★★★★';
				break;
			case 8:
				stars = '★★★★★★★★';
				break;

			default:
				break;
		}
		if (obtainedFrom === undefined || null) obtainedFrom = 'Unknown';
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`${result.names.en} (${result.names.jp})`)
			.setURL(`${result.wikiUrl}`)
			.setImage(result.skins[0].image)
			.setThumbnail(`${result.skins[0].chibi}`)
			.setColor(color)
			.addField('ID', `${result.id}`, true)
			.addField('Codename', `${result.names.code}`, true)
			.addField('Faction', `${result.nationality}`, true)
			.addField('Rarity', `${result.rarity}`, true)
			.addField('Hulltype', `${result.hullType}`, true)
			.addField('Stars', `${stars}`, true)
			.addField('Obtainable from', `${obtainedFrom}`);

		interaction.followUp({ embeds: [embed] });
	},
};
