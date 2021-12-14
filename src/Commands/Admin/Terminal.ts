import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import { exec } from 'child_process';

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

		exec(cmds, (err, stdout, stderr) => {
			if (err)
				return message.channel.send({ content: `\`\`\`\n${err}\n\`\`\`` });
			if (stderr)
				return message.channel.send({
					content: `zsh: command not found: ${cmds}`,
				});
			message.channel.send({
				embeds: [
					new MessageEmbed()
						.setTitle('Terminal - GNU Bash')
						.setDescription(`\`\`\`js\n${stdout.slice(0, 2000)}\`\`\``)
						.setFooter(`GNU Bash - Actioned by ${message.author.tag}`)
						.setColor('LUMINOUS_VIVID_PINK'),
				],
			});
		});
	},
};
