require('dotenv').config();
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { commands } from '.';

const guildId = process.env.TEST_SERVER_GUILDID ?? '';
const botUserId = process.env.APPLICATION_ID ?? '';
const botToken = process.env.BOT_TOKEN ?? '';

const rest = new REST({ version: '9' }).setToken(botToken);

rest.put(Routes.applicationGuildCommands(botUserId, guildId), {
    body: Object.values(commands).map((command) => command.data.toJSON()),
})
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
