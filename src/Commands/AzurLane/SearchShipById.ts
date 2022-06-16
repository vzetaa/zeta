import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const command: Command = {
    name: 'shipId',
    description: 'Search a ship by their id',
    aliases: ['search-shipId', 'shipID', 'ship-id'],
    usage: '<id>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        try {
            const id: string = args.join(' ');
            const result: any = await AzurLane.searchShipById(id).catch(err =>
                message.channel.send({ content: `Ship not found!` })
            );
            const color: ColorResolvable = message.guild.me.displayHexColor;
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
                .setThumbnail(`${result.skins[0].chibi}`)
                .setColor(color)
                .addField('ID', `${result.id}`, true)
                .addField('Codename', `${result.names.code}`, true)
                .addField('Faction', `${result.nationality}`, true)
                .addField('Rarity', `${result.rarity}`, true)
                .addField('Hulltype', `${result.hullType}`, true)
                .addField('Stars', `${stars}`, true)
                .addField('Obtainable from', `${obtainedFrom}`)
                .setImage(result.skins[0].image);

            message.channel.send({ embeds: [embed] });
        } catch (e) {
            message.channel.send({ content: 'Ship not found!' });
        }
    },
};
