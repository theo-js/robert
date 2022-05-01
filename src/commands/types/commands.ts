import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';

export enum Command {
    DEFINITION = 'def',
}

export type CommandType = {
    data: SlashCommandBuilder;
    execute: (interaction: CommandInteraction) => Promise<void>;
};

export type Commands = {
    [key in Command]: CommandType;
};
