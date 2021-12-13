import chalk from 'chalk';
import { Event } from '../Interfaces';

export const event: Event = {
	name: 'ready',
	run: async (client) => {
		client.console.success(
			`${chalk.bold.green(`[CLIENT]`)} ${client.user.tag} Ready`
		);
		// Set status to Invisible
		client.user.setStatus('invisible');

		// Set activity presence (Disabled cuz the status set into invisible)
		// client.user.setActivity({
		// 	name: `with My Husband 💕`,
		// 	type: 'PLAYING',
		// });
	},
};
