import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const command: Command = {
	name: 'voice',
	description: 'Search for Ship Voice Line by Ship ID',
	aliases: ['voiceline', 'vl', 'ship-voice'],
	usage: '<id>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		try {
			const id: string = args.join(' ');
			const result = await AzurLane.searchVoiceLines(id);
			const shipInfo = await AzurLane.searchShipById(id);
			const color: ColorResolvable = message.guild.me.displayHexColor;
			const embed: MessageEmbed = new MessageEmbed()
				.setTitle(`${shipInfo.names.en} (${shipInfo.names.jp})`)
				.setURL(`${shipInfo.wikiUrl}`)
				.setThumbnail(`${shipInfo.skins[0].chibi}`)
				.setColor(color)
				.setDescription(
					`**${result.Default[1].event}**\nEN : ${result.Default[1].en}\n---\nJP : ${result.Default[1].ja}`
				)
				.addField(
					'Voice Audio',
					`[${result.Default[1].event}](${result.Default[1].audio})`
				);

			message.channel.send({ embeds: [embed] });
		} catch (e) {
			message.channel.send({ content: `Ship not found!` });
		}
	},
};
