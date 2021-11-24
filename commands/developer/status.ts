import { Client } from 'discord.js'
import { ICommand } from 'wokcommands'

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: 'online',
    activities: [
      {
            name: status,
            type: 'WATCHING'
      },
    ],
  })
}

export default {

  category: 'Developer',
  description: 'Updates the status for the bot',
  
  minArgs: 1,
  expectedArgs: '<status>',

  slash: false,
  testOnly: false,
  ownerOnly: true,
  
  init: (client: Client) => {

    const status = "The World Burn!"
    setStatus(client, status)
  },
  
  callback: ({ client, text, message }) => {
    setStatus(client, text)
    
    message.reply({
      content: 'Status set!'
    })
  },
} as ICommand