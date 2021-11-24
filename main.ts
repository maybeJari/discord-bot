import DiscordJS, { Intents, Interaction } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

const status = require('./features/status.ts')
const guildslog = require('./features/guildslog.ts')

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
    ]
})

client.on('ready', async () => {

        status(client)
        guildslog(client)

    const wok = new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: ['901819589455904809'],
        botOwners: ['817275612430336022'],
        disabledDefaultCommands: [
        'language',
        ],
        mongoUri: process.env.DB,
        // dbOptions: {
        //     keepAlive: true
        // }
        debug: true,
        
    })
        .setDefaultPrefix('h!')
    
        .setCategorySettings([
        {
            name: 'Moderation',
            emoji: '🔧',
        },
        {
            name: 'Utility',
            emoji: '🚧',
        },
        {
            name: 'Info',
            emoji: '📔',
        },
        {
            name: 'Developer',
            emoji: '🖥️',
        }
    ])
    
    wok.on('databaseConnected', (connection: any, state: any) => {
        console.log(`Database connection state is "${state}"`)
    })       
})

client.login(process.env.TOKEN)