import { Command } from '../../interfaces';
import fetch from 'node-fetch';

export const command: Command = {
	name: 'hentaibomb',
	description: 'Continously made an request and send lewd images',
	aliases: ['setinterval'],
	usage: '<hostname> [endpoints] [time]',
	testOnly: false,
	permissions: ['SEND_MESSAGES', 'EMBED_LINKS'],
	run: async (client, message, args) => {
		// Channel declaration
		const channel = message.channel.type === 'GUILD_TEXT';

		// NSFW Channel checking
		if (channel && !message.channel.nsfw)
			return message.reply({
				content: `This command need to implemented in NSFW-Marked Channel!`,
			});

		// Argument declaration
		const split = args.join(' ').split(' ');
		let arg1: any = split[0];
		let arg2: any = split[1];
		let arg3: any = split[2];

		// Argument checking
		if (!arg1)
			return message.reply({ content: `Please specify a service hostname!` });
		if (!arg2) arg2 = 'lewd';
		if (!arg3) arg3 = 2500;

		// Service Hostname checking
		if (arg1 === 'nekos.life') {
			setInterval(() => {
				fetch(`https://nekos.life/api/v2/img/${arg2}`)
					.then((res) => res.json())
					.then((body) => {
						message.channel.send({ content: `${body.url}` });
					})
					.catch((err) => {
						console.log(err);
					});
			}, arg3);
		}
		if (arg1 === 'nekobot') {
			setInterval(() => {
				fetch(`https://nekobot.xyz/api/image?type=${arg2}`)
					.then((res) => res.json())
					.then((body) => {
						message.channel.send({ content: `${body.message}` });
					})
					.catch((err) => {
						console.log(err);
					});
			}, arg3);
		}
		if (arg1 === 'waifupics') {
			setInterval(() => {
				fetch(`https://api.waifu.pics/nsfw/${arg2}`)
					.then((res) => res.json())
					.then((body) => {
						message.channel.send({ content: `${body.url}` });
					})
					.catch((err) => {
						console.log(err);
					});
			}, arg3);
		}
	},
};
