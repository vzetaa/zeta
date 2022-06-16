import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const slash: Slash = {
    name: 'voiceline',
    description: 'Search ship voice line by ship id',
    testOnly: false,
    options: [
        {
            type: 'STRING',
            name: 'id',
            description: 'Ship ID',
            required: true,
        },
    ],
    run: async (client, interaction, args) => {
        try {
            const [id]: string[] = args;
            const result = await AzurLane.searchVoiceLines(id);
            const shipInfo = await AzurLane.searchShipById(id);
            const color: ColorResolvable = interaction.guild.me.displayHexColor;
            const embed: MessageEmbed = new MessageEmbed()
                .setTitle(`${shipInfo.names.en} (${shipInfo.names.jp})`)
                .setURL(`${shipInfo.wikiUrl}`)
                .setThumbnail(`${shipInfo.skins[0].chibi}`)
                .setColor(color)
                .setDescription(
                    `**${result.Default[1].event}**\nEN : ${result.Default[1].en}\n---\nJP : ${result.Default[1].ja}`
                )
                .addField('Voice Audio', `[${result.Default[1].event}](${result.Default[1].audio})`);

            interaction.followUp({ embeds: [embed] });
        } catch (e) {
            interaction.followUp({ content: `Ship not found!` });
        }
    },
};
