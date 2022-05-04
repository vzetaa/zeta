import { CommandInteraction, ApplicationCommandData } from 'discord.js';
import Client from '../Client';

interface Run {
	(client: Client, interaction: CommandInteraction, args: string[]);
}

export type Slash = ApplicationCommandData & {
	testOnly: boolean;
	run: Run;
};
