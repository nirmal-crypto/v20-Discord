require('dotnet').config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require(discord.js);

const client = Client({intents: GatewayIntentBits.Guilds});
client.commands = new Collection();