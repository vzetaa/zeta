import { inspect } from 'util';
import { MessageEmbed } from 'discord.js';
import { Command } from '../../interfaces';

export const command: Command = {
	name: 'eval',
	description: 'Evaluate some code',
	aliases: ['e'],
	usage: '<code>',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const code = args.join(' ');
		if (message.author.id !== process.env.OWNERID) return;
		if (!code) return message.reply('Please specify a code to evaluate!');

		try {
			const result = await eval(code);
			let output = result;

			if (typeof result !== 'string') {
				output = inspect(result);
			}

			message.channel.send({
				embeds: [
					new MessageEmbed()
						.setColor('#00FF00')
						.setTitle(`✅ | 200 : Success`)
						.setDescription(`Results\n\`\`\`yml\n${output}\n\`\`\``)
						.setFooter(`Actioned by : ${message.author.tag}`),
				],
			});
		} catch (err) {
			console.log(err);
			message.channel.send({
				embeds: [
					new MessageEmbed()
						.setTitle(`❌ | Evaluated Content too long to displayed`)
						.setDescription(`Error Logs\n\`\`\`yml\n${err}\n\`\`\``)
						.setColor('#FF0000')
						.setFooter(`Actioned by : ${message.author.tag}`),
				],
			});
		}
	},
};
