import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
    name: 'ping',
    description: 'Shows client ping latency',
    testOnly: false,
    options: [],
    run: async (client, interaction, args) => {
        const color: ColorResolvable = interaction.guild.me.displayHexColor;
        const embed: MessageEmbed = new MessageEmbed()
            .setDescription(`:signal_strength: Ping Latency : ${client.ws.ping}ms!`)
            .setColor(color);
        interaction.followUp({ embeds: [embed] });
    },
};
