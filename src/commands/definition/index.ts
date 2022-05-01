import _sample from 'lodash/sample';
import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { getDefinition } from '../../utils/api/getDefinition';
import { Command, CommandType } from '../types/commands';
import {
    DefinitionOptions as Options,
    DEFINITION_NOT_FOUND_MSGS,
} from './constants';

export const data = new SlashCommandBuilder()
    .setName(Command.DEFINITION)
    .setDescription('Donne la définition du mot passé en option');

data.addStringOption((option) =>
    option
        .setName(Options.WORD)
        .setDescription('Mot dont vous souhaitez obtenir la définition')
        .setRequired(true)
);

export const execute = async (interaction: CommandInteraction) => {
    const word = interaction.options.getString(Options.WORD);
    if (!word)
        return interaction.reply(
            'Veuillez renseigner le mot dont vous souhaitez obtenir la définition'
        );

    try {
        const response = await getDefinition(word);
        const definition = response?.Definition?.join('\n');
        if (!definition) throw new Error('No definition found');

        return interaction.reply(definition);
    } catch (e) {
        return interaction.reply(_sample(DEFINITION_NOT_FOUND_MSGS) ?? '');
    }
};

export const DefinitionCommand: CommandType = { data, execute };
