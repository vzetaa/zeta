const { Client, Collection, Intents } = require('discord.js');
const dotenv = require('dotenv');
const Cabul = require('cabul');
dotenv.config();

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.reddit = new Cabul.Client();

// Initializing the project
require('./handler')(client);

client.login(process.env.TOKEN);
