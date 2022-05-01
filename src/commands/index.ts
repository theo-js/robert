import { DefinitionCommand } from './definition';
import { Command, Commands } from './types/commands';

export const commands: Commands = {
    [Command.DEFINITION]: DefinitionCommand,
};
