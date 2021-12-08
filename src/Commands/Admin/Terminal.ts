import child from 'child_process';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'terminal',
	description: 'Runs terminal command',
	aliases: ['bash', 'sh', 'zsh'],
	usage: '<command>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const cmds = args.join(' ');
		if (message.author.id !== process.env.OWNERID) return;
		if (!cmds) return message.reply('Please specify a command to executed!');

		try {
			child.exec(cmds, (err, res) => {
				if (err)
					return message.channel.send({
						content: `zsh: cocmmad not found ${cmds}`,
					});
				message.channel.send({
					embeds: [
						new MessageEmbed()
							.setTitle('Terminal - GNU Bash')
							.setDescription(`\`\`\`js\n${res.slice(0, 2000)}\`\`\``)
							.setFooter(`GNU Bash - Actioned by ${message.author.tag}`)
							.setColor('LUMINOUS_VIVID_PINK'),
					],
				});
			});
		} catch (err) {
			message.channel.send({ content: `zsh: cocmmad not found ${cmds}` });
			console.log(err);
		}
	},
};
