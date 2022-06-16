import { Event } from '../Interfaces';
import Bot from '../Client';
import chalk from 'chalk';

export const event: Event = {
    name: 'ready',
    run: async (client: Bot) => {
        client.console.success(`${chalk.bold.green(`[CLIENT]`)} ${client.user.tag} Ready`);

        // Set status to Online
        client.user.setStatus('online');

        // Set activity presence
        client.user.setActivity({
            type: 'COMPETING',
            name: `development branch`,
        });
    },
};
