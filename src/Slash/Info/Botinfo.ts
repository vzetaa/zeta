import module, { homepage } from '../../../package.json';
import { MessageEmbed } from 'discord.js';
import { Slash } from '../../Interfaces';
import moment from 'moment';

export const slash: Slash = {
	name: 'botinfo',
	description: 'Show bot information',
	testOnly: false,
	options: [],
	run: async (client, interaction, args) => {
		const embed = new MessageEmbed()
			.setTitle('Bot Information')
			.setThumbnail(interaction.client.user.displayAvatarURL({ size: 512 }))
			.addField(
				'General Information',
				`Name : ${client.user.username}\nMain Prefix : \`${
					process.env.PREFIX
				}\`\nCreated at : ${moment(client.user.createdAt).format(
					'llll'
				)}\nRepository : https://github.com/vzetaa/zeta\nDocumentation : ${homepage}`
			)
			.addField(
				'Core Information',
				`Project-type : Node.js Application\nProject version : v${module.version}\nDiscord.js version : v${module.dependencies['discord.js']}\nMongoose version : v${module.dependencies.mongoose}\nTypeScript version : v${module.dependencies.typescript}`
			)
			.setColor('GREY')
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
