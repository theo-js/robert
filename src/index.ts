require('dotenv').config();
import { Client, Intents } from 'discord.js';
import * as listeners from './listeners';

// Instanciate client
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_INTEGRATIONS,
    ],
});

// Attach listeners
Object.values(listeners).forEach((listen) => listen(client));

client.login(process.env.BOT_TOKEN);
