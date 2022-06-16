import { ColorResolvable, GuildMember, MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import moment from 'moment';

export const slash: Slash = {
    name: 'userinfo',
    description: 'Show user information',
    testOnly: false,
    options: [
        {
            type: 'USER',
            name: 'user',
            description: 'User target to show information about to',
            required: false,
        },
    ],
    run: async (client, interaction, args) => {
        let [user] = args;
        if (!user) user = interaction.user.id;
        const usr: GuildMember = interaction.guild.members.cache.get(user);
        const color: ColorResolvable = interaction.guild.me.displayHexColor;
        const checkDays = (date: Date) => {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? ' day' : ' days') + ' ago';
        };
        let embed: MessageEmbed = new MessageEmbed()
            .setTitle(`${usr.user.username}'s User Information`)
            .setThumbnail(usr.displayAvatarURL({ dynamic: true, size: 512 }))
            .setColor(color)
            .addField('User Tag', usr.user.tag)
            .addField('User ID', usr.id)
            .addField('Created At', `${moment(usr.user.createdAt).format('LLLL')} (${checkDays(usr.user.createdAt)})`)
            .addField('Joined At', `${moment(usr.joinedAt).format('LLLL')} (${checkDays(usr.joinedAt)})`)
            .addField('Highest Role', `<@&${usr.roles.highest.id}>`)
            .addField('Roles', usr.roles.cache.map(r => `${r}`).join(' | '))
            .setFooter({ text: interaction.user.tag })
            .setTimestamp();

        interaction.followUp({ embeds: [embed] });
    },
};
