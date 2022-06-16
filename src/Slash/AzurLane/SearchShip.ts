import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const slash: Slash = {
    name: 'ship',
    description: 'Search a ship by name',
    testOnly: false,
    options: [
        {
            type: 'STRING',
            name: 'name',
            description: 'Ship name to search to',
            required: true,
        },
    ],
    run: async (client, interaction, args) => {
        try {
            const [name]: string[] = args;
            const result: any = await AzurLane.searchShip(name).catch((err: Error) =>
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
                .setColor(color)
                .setThumbnail(`${result.skins[0].chibi}`)
                .addField('ID', `${result.id}`, true)
                .addField('Codename', `${result.names.code}`, true)
                .addField('Faction', `${result.nationality}`, true)
                .addField('Rarity', `${result.rarity}`, true)
                .addField('Hulltype', `${result.hullType}`, true)
                .addField('Stars', `${stars}`, true)
                .addField('Obtainable from', `${obtainedFrom}`)
                .setImage(result.skins[0].image);

            interaction.followUp({ embeds: [embed] });
        } catch (e: any) {
            interaction.followUp({ content: `Ship not found!` });
        }
    },
};
