import { Message, WebhookClient } from 'discord.js';
import { Event } from '../Interfaces';
import cron from 'node-cron';

export const event: Event = {
	name: 'ready',
	run: async (client, message: Message) => {
		const cronjob_EN: string = '0 7 * * *';
		const cronjob_JP: string = '0 15 * * *';
		const cronjob_CN: string = '0 16 * * *';
		const azurlaneRole: string = '<@&933923505727242300>';
		const webhookId: string = '937933680607899649';
		const webhookToken: string =
			'1UfPWZRC6z5MZ_cR7x1q7cl8bZ5kTu_LAbKAkzo2wJ8CUgGhTu4n5QTWGreduUwuyBXS';
		const wcl: WebhookClient = new WebhookClient({
			id: webhookId,
			token: webhookToken,
		});
		const usr: string = 'Akashi';
		const usrImg: string = 'https://cdn.upload.systems/uploads/b0PHzDiy.jpg';
		// Reminders for EN Server
		cron.schedule(cronjob_EN, () => {
			wcl.send({
				content: `${azurlaneRole}\n🔔︱Daily Reset for EN Server!`,
				username: usr,
				avatarURL: usrImg,
			});
		});
		// Reminders for JP Server
		cron.schedule(cronjob_JP, () => {
			wcl.send({
				content: `${azurlaneRole}\n🔔︱Daily Reset for JP Server!`,
				username: usr,
				avatarURL: usrImg,
			});
		});
		// Reminders for CN Server
		cron.schedule(cronjob_CN, () => {
			wcl.send({
				content: `${azurlaneRole}\n🔔︱Daily Reset for CN Server!`,
				username: usr,
				avatarURL: usrImg,
			});
		});
		console.log(`Schedule Job Started!`);
	},
};
