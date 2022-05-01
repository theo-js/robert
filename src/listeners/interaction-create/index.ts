import { commands } from '../../commands';
import { Command } from '../../commands/types/commands';
import type { ClientListener } from '../type';

export const onInteractionCreate: ClientListener = (client) => {
    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) return;

        const command = commands[interaction.commandName as Command];
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (err) {
            console.error(err);
            await interaction.reply({
                content: 'There was an error while executing this command!',
                ephemeral: true,
            });
        }
    });
};
