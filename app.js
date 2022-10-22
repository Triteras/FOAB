const Client = require('discord.js')
require('dotenv').config()
const client = new Client.Client({
    intents: [Client.GatewayIntentBits.Guilds, Client.GatewayIntentBits.GuildMessages, Client.GatewayIntentBits.MessageContent]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('messageCreate', (message) => {
    if(message.author.id == client.user.id) return 0
    if(message.content != 'ping') return 0
    message.reply('pong')
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'ping') {
      await interaction.reply('Pong!');
    }
});


client.login(process.env.BOT_TOKEN)