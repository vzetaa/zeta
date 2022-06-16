import { ClientEvents } from 'discord.js';
import Client from '../Client';

interface Run {
    (client: Client, ...args: any[]);
}

export interface Event {
    name: keyof ClientEvents;
    run: Run;
}
