import { Message, PermissionResolvable, Snowflake } from 'discord.js';
import Client from '../Client';

interface Run {
    (client: Client, message: Message, args: Snowflake[]);
}

export interface Command {
    name: string;
    description?: string;
    aliases?: string[];
    usage: string;
    testOnly: boolean;
    permissions?: PermissionResolvable[];
    run: Run;
}
