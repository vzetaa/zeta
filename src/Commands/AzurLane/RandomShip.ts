import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const command: Command = {
    name: 'randomship',
    description: 'Generate random ship',
    aliases: ['random-ship'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        const result = await AzurLane.listRandomShip().catch(err =>
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

        message.channel.send({ embeds: [embed] });
    },
};
