import { Command, Event } from '../Interfaces';
import { Message, MessageEmbed, Permissions } from 'discord.js';

export const event: Event = {
	name: 'messageCreate',
	run: async (client, message: Message) => {
		if (message.channel.type === 'DM') return;
		if (message.author.bot || !message.content.startsWith(client.config.PREFIX))
			return;
		const args = message.content
			.slice(client.config.PREFIX.length)
			.trim()
			.split(/ +/g);
		const cmd = args.shift().toLowerCase();
		if (!cmd) return;
		const command = client.commands.get(cmd) || client.aliases.get(cmd);
		const validPermissions = Object.keys(Permissions.FLAGS);
		if (command) {
			if (command.testOnly && message.guild.id !== client.config.TESTSERVER)
				return;
			if (command?.permissions && command?.permissions.length !== 0) {
				let invalidPerms = [];
				for (const perm of command.permissions) {
					if (!validPermissions.includes(perm.toString())) {
						client.console.error(`Invalid Permission: ${perm}`);
						return message.channel.send(
							`Error in our code: invalid permission: \`${perm}\`, please contact the developer`
						);
					}
					if (!message.member.permissions.has([perm])) {
						invalidPerms.push(perm);
					}
				}

				if (invalidPerms.length) {
					const embed = new MessageEmbed()
						.setAuthor(
							message.author.tag,
							message.author.displayAvatarURL({ dynamic: true })
						)
						.setDescription(`**MISSING PERMISSIONS**: \`${invalidPerms}\``);

					return message.reply({ embeds: [embed] });
				}
			}

			try {
				(command as Command).run(client, message, args);
			} catch (e) {
				const embed = new MessageEmbed()
					.setAuthor(client.user.username, client.user.displayAvatarURL())
					.setDescription(`**ERROR**: \`${e}\``)
					.setColor('RED');
				message.channel.send({ embeds: [embed] }).then((m) =>
					setTimeout(() => {
						m.delete();
					}, 10000)
				);
			}
		}
	},
};
