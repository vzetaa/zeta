import Client from '../Client';
import {
	CommandInteraction,
	ApplicationCommandOption,
	ApplicationCommandData,
} from 'discord.js';

interface Run {
	(client: Client, interaction: CommandInteraction, args: string[]);
}

export type Slash = ApplicationCommandData & {
	testOnly: boolean;
	run: Run;
};
