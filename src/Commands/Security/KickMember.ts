import { ColorResolvable, GuildMember, MessageEmbed, User } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'kick',
	description: 'Kick a member from server',
	aliases: [],
	usage: '<User>',
	testOnly: false,
	permissions: ['SEND_MESSAGES', 'KICK_MEMBERS'],
	run: async (client, message, args) => {
		const color: ColorResolvable = message.guild.me.displayHexColor;
		const member: GuildMember = message.mentions.members.first();
		const memberAsUser: User = message.client.users.cache.get(member.id);
		if (!member) return message.reply('Please mention a member to kick!');
		if (message.member.roles.highest.position <= member.roles.highest.position)
			return message.reply({
				content: `You can't punish because you either have the same role or your role is lower.`,
			});
		const reason: string = args.slice(1).join(' ') || 'No Reason Provided';
		const embed: MessageEmbed = new MessageEmbed()
			.setTitle(`Kicked ${member.user.username} from this server`)
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setDescription(
				'This member has been kicked from this server. Here is the advanced information about this actions'
			)
			.addField('Kicked member', `${member}`, true)
			.addField('Moderator', `${message.author}`, true)
			.addField('Reason', `${reason}`)
			.setColor(color)
			.setTimestamp();
		const memberEmbed: MessageEmbed = new MessageEmbed()
			.setTitle(`You have been kicked from ${message.guild.name}`)
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setDescription(
				`You have been kicked from ${message.guild.name}. Here is the advanced information about this actions`
			)
			.addField('Kicked member', `${member}`, true)
			.addField('Moderator', `${message.author}`, true)
			.addField('Reason', `${reason}`)
			.setColor(color)
			.setTimestamp();
		await member
			.kick(reason)
			.then(() => {
				message.channel.send({ embeds: [embed] });
				memberAsUser
					.send({ embeds: [memberEmbed] })
					.catch((err) =>
						console.log(
							`An error has been occured while trying to send ${member.user.tag} a message`
						)
					);
			})
			.catch((err) => console.log(err));
	},
};
