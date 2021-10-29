import { ICommand } from 'wokcommands'

export default {

    maxArgs: 1,
    expectedArgs: '<command>',

    slash: false,
    testOnly: true,
    ownerOnly: true,

  callback: ({ instance }) => {
    instance.commandHandler.commands.forEach((command: any) => {
      console.log(command)
    })
  },
} as ICommand