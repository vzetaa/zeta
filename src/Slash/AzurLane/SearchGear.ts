import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const slash: Slash = {
    name: 'gear',
    description: 'Search a gear by name',
    testOnly: false,
    options: [
        {
            type: 'STRING',
            name: 'name',
            description: 'Gear name to search to',
            required: true,
        },
    ],
    run: async (client, interaction, args) => {
        try {
            const [name]: string[] = args;
            const result = await AzurLane.searchEquipments(name).catch((err: Error) =>
                interaction.followUp({ content: `Gear not found!` })
            );
            const color: ColorResolvable = interaction.guild.me.displayHexColor;
            let obtainedFrom: string = result.misc.obtainedFrom;
            if (obtainedFrom === undefined || null) obtainedFrom = 'Unknown';
            const embed: MessageEmbed = new MessageEmbed()
                .setTitle(`${result.names.en}`)
                .setURL(`${result.wikiUrl}`)
                .setThumbnail(`${result.image}`)
                .setColor(color)
                .setDescription(`${result.nationality} ${result.type.name}`)
                .addField('ID', `${result.id}`, true)
                .addField('Category', `${result.category}`, true)
                .addField('Obtained From', `${obtainedFrom}`);

            interaction.followUp({ embeds: [embed] });
        } catch (e: any) {
            interaction.followUp({ content: 'Gear not found!' });
        }
    },
};
