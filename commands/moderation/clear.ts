import { ICommand } from "wokcommands";

export default {
    category: 'moderation',
    description: 'Deletes multiple messages at once.',
    aliases: ['purge', 'nuke', 'remove'],

    permissions: ['MANAGE_MESSAGES'],
  
    minArgs: 1,
    maxArgs: 1,
    expectedArgs: '<amount>',

    slash: 'both',
    testOnly: false,
    ownerOnly: false,
  
    callback: async ({ message, interaction, channel, args }) => {
        const amount = args.length ? parseInt(args.shift()!) : 0
        if (message) {
            await message.delete()
        }

        const messages = await channel.messages.fetch({ limit: amount })
        const { size } = messages
        messages.forEach((message) => message.delete())

        const reply = `Deleted ${size} messages.`

        if (interaction) {
            return reply
        }

        channel.send(reply)
    }
} as ICommand