import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import AzurLane from '../../Exports/AzurLane';

export const command: Command = {
    name: 'gear',
    description: 'Search for gear by name',
    aliases: ['equipments', 'equipment', 'search-gear'],
    usage: '<name>',
    testOnly: false,
    permissions: ['SEND_MESSAGES'],
    run: async (client, message, args) => {
        try {
            const name: string = args.join(' ');
            const result = await AzurLane.searchEquipments(name).catch(err =>
                message.channel.send({ content: `Gear not found!` })
            );
            const color: ColorResolvable = message.guild.me.displayHexColor;
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

            message.channel.send({ embeds: [embed] });
        } catch (e) {
            message.channel.send({ content: 'Gear not found!' });
        }
    },
};
