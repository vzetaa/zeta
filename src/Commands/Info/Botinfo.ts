import { MessageEmbed } from 'discord.js';
import { Command } from '../../Interfaces';
import module, { homepage } from '../../../package.json';
import moment from 'moment';

export const command: Command = {
	name: 'botinfo',
	description: 'Show bot information',
	aliases: ['info'],
	usage: '',
	testOnly: false,
	permissions: ['SEND_MESSAGES'],
	run: async (client, message, args) => {
		const embed = new MessageEmbed()
			.setTitle('Bot Information')
			.setThumbnail(message.client.user.displayAvatarURL({ size: 512 }))
			.addField(
				'General Information',
				`Name : ${client.user.username}\nMain Prefix : \`${
					process.env.PREFIX
				}\`\nCreated at : ${moment(client.user.createdAt).format(
					'llll'
				)}\nRepository : https://github.com/koyorin/koyorin\nDocumentation : ${homepage}`
			)
			.addField(
				'Core Information',
				`Project-type : Node.js Application\nProject version : v${module.version}\nDiscord.js version : v${module.dependencies['discord.js']}\nMongoose version : v${module.dependencies.mongoose}\nTypeScript version : v${module.dependencies.typescript}`
			)
			.setColor('LUMINOUS_VIVID_PINK')
			.setTimestamp();

		message.channel.send({ embeds: [embed] });
	},
};
