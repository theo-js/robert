import type { ClientListener } from '../type';

export const onReady: ClientListener = (client) => {
    client.once('ready', async () => {
        const { user, application } = client;
        if (!user || !application) return;
        console.log(`${user.username} is online`);
    });
};
