import module from '../../../package.json';
import { MessageEmbed } from 'discord.js';
import { Slash } from '../../interfaces';
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
				)}\nRepository : https://github.com/gifaldyazkaa/kogasa-dscbot\nDocumentation : https://gifaldyazka.is-a.dev/kogasa-dscbot/`
			)
			.addField(
				'Core Information',
				`Project-type : Node.js Application\nProject version : v${module.version}\nDiscord.js version : ^${module.dependencies['discord.js']}\nMongoose version : ^${module.dependencies.mongoose}\nTypeScript version : ${module.dependencies.typescript}`
			)
			.setColor('PURPLE')
			.setTimestamp();

		interaction.followUp({ embeds: [embed] });
	},
};
