import axios from 'axios';
import { WordDefinition } from './types';

export const getDefinition = async (word: string): Promise<WordDefinition> => {
    const response = await axios.get(
        `${
            process.env.DICTIONARY_API_URL
        }/WordDefinition?idOrName=${word?.toLowerCase?.()}`
    );
    return response?.data;
};
