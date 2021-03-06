import { ICommand } from "wokcommands";

export default {
    category: 'Developer',
    description: 'Replies with pong',

    slash: 'both',
    testOnly: false,
    ownerOnly: true,

    callback: ({ message, interaction }) => {
        if(message) {
            message.reply(':ping_pong: Pong!')
        }
        if (interaction) {
            interaction.reply({
                content: ':ping_pong: Pong!',
                ephemeral: true,
            })
        }
    },
} as ICommand