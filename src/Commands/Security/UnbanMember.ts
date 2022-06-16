import { Collection, ColorResolvable, GuildBan, MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
    name: 'unban',
    description: 'Unban banned member from server',
    aliases: ['unbonk'],
    usage: '<member>',
    testOnly: false,
    permissions: ['SEND_MESSAGES', 'BAN_MEMBERS'],
    run: async (client, message, args) => {
        const memberId: string = args.join(' ');
        const bannedMembers: Collection<string, GuildBan> = await message.guild.bans.fetch();
        const color: ColorResolvable = message.guild.me.displayHexColor;
        if (!memberId)
            return message.reply({
                content: `Please specify banned member's user id to unban!`,
            });
        if (!bannedMembers.find(user => user.user.id === memberId))
            return message.reply({ content: 'Member is not banned!' });
        const embed: MessageEmbed = new MessageEmbed()
            .setTitle('Unbanned member from this server')
            .setDescription(
                `Successfully unbanned member with id \`${memberId}\` from this server.\n\nBy this action, member with specified id can joining back to this server using current invite link(s).`
            )
            .setColor(color)
            .setTimestamp();
        message.guild.members.unban(memberId);
        message.channel.send({ embeds: [embed] });
    },
};
