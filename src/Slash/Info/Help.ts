import { ColorResolvable, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import { homepage } from '../../../package.json';

export const slash: Slash = {
    name: 'help',
    description: 'Show this help desk',
    testOnly: false,
    options: [],
    run: async (client, interaction, args) => {
        const color: ColorResolvable = interaction.guild.me.displayHexColor;
        const embed: MessageEmbed = new MessageEmbed()
            .setTitle('Zeta Help Desk')
            .setURL(homepage as string)
            .setDescription(
                `I'm ゼータ／Zeta here~! Helper at Falcxxdev's Private server! 📜\n\nPlease refer to Documentation page to using my commands.\n${homepage}`
            )
            .setFooter({
                text: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL({ dynamic: true }),
            })
            .setColor(color)
            .setTimestamp();

        interaction.followUp({ embeds: [embed] });
    },
};
