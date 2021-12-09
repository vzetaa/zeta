import { MessageEmbed, WebhookClient } from 'discord.js';
import { Command } from '../../Interfaces';

export const command: Command = {
	name: 'root-hooks',
	description: 'Trigger rules and send it to #root',
	aliases: ['msg-hooks'],
	usage: '',
	testOnly: true,
	permissions: ['SEND_MESSAGES', 'MANAGE_WEBHOOKS'],
	run: async (client, message, args) => {
		if (message.author.id !== process.env.OWNERID) return;
		let argument = args.join(' ');

		// Webhook target
		const webhookId = '900240359198691388';
		const webhookToken =
			'ssLNqZIh0CkRMVj3br7KrypUB_4yKD8stOUPJxMEapD-b17OtKpVEomqzw1U7U1VwzjH';

		// Create new webhook client
		const hooks = new WebhookClient({ id: webhookId, token: webhookToken });

		// Embed Declarations
		const firstMessage = new MessageEmbed()
			.setTitle(`:wave: Halo!`)
			.setDescription(
				`Disini nggak ada apa".\nHanya server pribadi yang digunakan untuk menyimpan data saya sendiri. Kalau di-invite kesini sama saya, Langsung bilang. Bisa ke dm / apapun untuk dapetin role access. ^^`
			)
			.setColor(`#c77896`);

		const secondMessage = new MessageEmbed()
			.setTitle(`Role`)
			.setDescription(
				'Role adalah kunci dari server ini. Jika kamu mendapatkan role, Maka kamu akan membuka channel tersembunyi sesuai nama role dan tujuan.'
			)
			.addField(
				`Q : Gimana cara dapetin role?`,
				`A : Kamu bisa bilang ke <@&898559770200539186> Dengan cara dm / apapun untuk mendapatkan role access. Jika diperlukan, Sertakan alasan kenapa menginginkan role access tersebut.\n\nMakasih sebelumnya... <3`
			)
			.setColor('#c77896');

		const thirdMessage = new MessageEmbed()
			.setTitle(':woman_tipping_hand: About Koyori')
			.setThumbnail(message.author.displayAvatarURL({ size: 512 }))
			.setColor('#bc8291')
			.setDescription(
				`\n:wave: Hello there! I'm Koyori here~ Maid and Main Helper in this Server! 🧪\n\nUhm, yeah... I've programmed by my husband, <@788260234409672754> <3... (Make sure to thanks him~!)\n\nFrom now, I'll helping you and guide you in this server! Please let me know if you need a help or something! ehe~`
			)
			.addField(
				':speech_balloon: Interacting with me',
				`You can interact with me at <#916529710408802336>.\nIf you're searching for My Help Commands, and Full Command List, You can type\n\`!help\`\nor you can go to\nhttps://gifaldyazka.is-a.dev/koyori-dscbot/p/commands/\nTo see My Full Command List!`
			)
			.addField(
				'👨‍💻 Contributing to this project',
				'Oh, are you a developer? You can contribute to this project if you want, But, Please contact and dm my husband, <@788260234409672754> and ask him first! Thanks for contributing~!\n\nMain Repository : https://github.com/gifaldyazkaa/koyori-dscbot'
			);

		const fourthMessage = new MessageEmbed()
			.setDescription(':point_up_2: Please scroll to the first message!')
			.setColor('#bc8291');

		// Send the embed into hook
		if (argument === '1') {
			hooks.send({
				embeds: [firstMessage],
				avatarURL: message.author.displayAvatarURL({ size: 512 }),
				username: message.author.username,
			});
			message.channel.send({
				content: ':white_check_mark: Successfully Sent 1 message to Webhook!',
			});
		}
		if (argument === '2') {
			hooks.send({
				embeds: [secondMessage],
				avatarURL: message.author.displayAvatarURL({ size: 512 }),
				username: message.author.username,
			});
			message.channel.send({
				content:
					':white_check_mark: Successfully Sent Second message to Webhook!',
			});
		}
		if (argument === '3') {
			hooks.send({
				embeds: [thirdMessage],
				avatarURL: message.client.user.displayAvatarURL({ size: 512 }),
				username: message.client.user.username,
			});
			message.channel.send({
				content:
					':white_check_mark: Successfully Sent Third message to Webhook!',
			});
		}
		if (argument === '4') {
			hooks.send({
				embeds: [fourthMessage],
				avatarURL: message.client.user.displayAvatarURL({ size: 512 }),
				username: message.client.user.username,
			});
			message.channel.send({
				content:
					':white_check_mark: Successfully Sent Fourth message to Webhook!',
			});
		}
	},
};
