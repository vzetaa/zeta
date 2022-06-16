import { MessageEmbed, User, GuildMember, ColorResolvable } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
    name: 'avatar',
    description: 'Shows user avatar',
    aliases: ['pfp'],
    usage: '',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
    run: async (client, message, args) => {
        const user: User = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
        const imgUrl = user.displayAvatarURL({
            size: 2048,
            dynamic: true,
        });
        const png = user.displayAvatarURL({ size: 2048, format: 'png' });
        const jpg = user.displayAvatarURL({ size: 2048, format: 'jpg' });
        const webp = user.displayAvatarURL({
            size: 2048,
            format: 'webp',
        });
        const gif = user.displayAvatarURL({ size: 2048, format: 'gif' });
        const color: ColorResolvable = message.guild.me.displayHexColor;

        const embed = new MessageEmbed()
            .setTitle(`${user.username}'s Avatar`)
            .setDescription(`[PNG](${png}) | [JPG](${jpg}) | [WEBP](${webp}) | [GIF](${gif})`)
            .setImage(imgUrl)
            .setFooter({ text: user.tag })
            .setTimestamp()
            .setColor(color);

        message.channel.send({ embeds: [embed] });
    },
};
