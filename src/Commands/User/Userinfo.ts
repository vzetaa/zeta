import { ColorResolvable, GuildMember, MessageEmbed, User } from 'discord.js';
import { Command } from '../../Interfaces';
import moment from 'moment';

export const command: Command = {
	name: 'userinfo',
	description: 'Shows user information',
	aliases: ['usr', 'usrinfo'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const color: ColorResolvable = message.guild.me.displayHexColor;
		const checkDays = (date) => {
			let now = new Date();
			let diff = now.getTime() - date.getTime();
			let days = Math.floor(diff / 86400000);
			return days + (days == 1 ? ' day' : ' days') + ' ago';
		};
		let user: User =
			message.mentions.users.first() ||
			client.users.cache.get(args[0]) ||
			message.author;
		let member: GuildMember =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.member;

		let embed: MessageEmbed = new MessageEmbed()
			.setTitle(`${user.username}'s User Information`)
			.setThumbnail(user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(color)
			.addField('User Tag', user.tag)
			.addField('User ID', user.id)
			.addField(
				'Created At',
				`${moment(user.createdAt).format('LLLL')} (${checkDays(
					user.createdAt
				)})`
			)
			.addField(
				'Joined At',
				`${moment(member.joinedAt).format('LLLL')} (${checkDays(
					member.joinedAt
				)})`
			)
			.addField('Highest Role', `<@&${member.roles.highest.id}>`)
			.addField('Roles', member.roles.cache.map((r) => `${r}`).join(' | '))
			.setFooter({ text: message.author.tag })
			.setTimestamp();
		message.channel.send({ embeds: [embed] });
	},
};
