import { ColorResolvable, MessageEmbed, User } from 'discord.js';
import { Slash } from '../../Interfaces';

export const slash: Slash = {
    name: 'avatar',
    description: 'Show user avatar',
    testOnly: false,
    options: [
        {
            type: 'USER',
            name: 'user',
            description: "User's avatar to see",
            required: false,
        },
    ],
    run: async (client, interaction, args) => {
        let [user]: string[] = args;
        if (!user) user = interaction.user.id;
        const usr: User = interaction.client.users.cache.get(user);
        const color: ColorResolvable = interaction.guild.me.displayHexColor;
        const imgUrl = usr.displayAvatarURL({
            size: 2048,
            dynamic: true,
        });
        const png = usr.displayAvatarURL({
            size: 2048,
            format: 'png',
        });
        const jpg = usr.displayAvatarURL({
            size: 2048,
            format: 'jpg',
        });
        const webp = usr.displayAvatarURL({
            size: 2048,
            format: 'webp',
        });
        const gif = usr.displayAvatarURL({
            size: 2048,
            format: 'gif',
        });

        const embed = new MessageEmbed()
            .setTitle(`${usr.username}'s Avatar`)
            .setDescription(`[PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`)
            .setImage(imgUrl)
            .setFooter({ text: usr.tag })
            .setTimestamp()
            .setColor(color);

        interaction.followUp({ embeds: [embed] });
    },
};
