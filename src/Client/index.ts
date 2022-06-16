import { Slash, Command, Event } from '../Interfaces';
import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import mongoose from 'mongoose';
import consola from 'consola';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

class Bot extends Client {
    public commands: Collection<string, Command> = new Collection();
    public slash: Collection<string, Slash> = new Collection();
    public events: Collection<string, Event> = new Collection();
    public config = process.env;
    public aliases: Collection<string, Command> = new Collection();
    public console = consola;
    public constructor() {
        super({
            intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_WEBHOOKS', 'GUILD_MEMBERS'],
            partials: ['MESSAGE', 'CHANNEL', 'GUILD_MEMBER', 'USER'],
        });
    }

    public async init() {
        this.login(this.config.TOKEN);
        if (this.config.MONGOURI) {
            mongoose.connect(this.config.MONGOURI, {
                autoIndex: true,
                connectTimeoutMS: 3000,
            });
        } else {
            this.console.info(`You don't have MongoURI!`);
        }
        if (!this.config.TESTSERVER) this.console.info(`You have not set the Server ID!`);
        // Commands
        const commandPath = path.join(__dirname, '..', 'Commands');
        readdirSync(commandPath).forEach(dir => {
            const commands = readdirSync(`${commandPath}/${dir}`).filter(file => file.endsWith('.ts'));
            commands.forEach(file => {
                const { command } = require(`${commandPath}/${dir}/${file}`);
                this.commands.set(command.name, command);

                if (command?.aliases && command?.aliases.length !== 0) {
                    command.aliases.forEach(alias => {
                        this.aliases.set(alias, command);
                    });
                }
            });
        });

        // Event
        const eventPath = path.join(__dirname, '..', 'Events');
        readdirSync(eventPath).forEach(async file => {
            const { event } = await import(`${eventPath}/${file}`);
            this.events.set(event.name, event);
            this.on(event.name, event.run.bind(null, this));
        });

        // SlashCommand
        const arrayOfSlashCommands = [];
        const arrayOfSlashPrivate = [];
        const slashPath = path.join(__dirname, '..', 'Slash');
        readdirSync(slashPath).forEach(dir => {
            const slash = readdirSync(`${slashPath}/${dir}`).filter(file => file.endsWith('.ts'));

            slash.forEach(file => {
                const { slash } = require(`${slashPath}/${dir}/${file}`);
                if (slash?.testOnly) {
                    this.slash.set(slash.name, slash);
                    return arrayOfSlashPrivate.push(slash);
                }
                this.slash.set(slash.name, slash);
                arrayOfSlashCommands.push(slash);
            });
        });
        this.on('ready', async () => {
            await this.guilds.cache.get(this.config.TESTSERVER).commands.set(arrayOfSlashPrivate);
            await this.application.commands.set(arrayOfSlashCommands);
        });
    }
}

export default Bot;
