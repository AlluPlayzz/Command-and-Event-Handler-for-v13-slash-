//Express Server
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Running 24/7!')
});
app.listen(3000, () => {
  console.log('Express Server has started!');
});

require("dotenv").config();
const fs = require("fs");
const { Client, Intents, Collection } = require("discord.js");

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

const eventFiles = fs
	.readdirSync("./events")
	.filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, commands));
	} else {
		client.on(event.name, (...args) => event.execute(...args, commands));
	}
}







client.on('ready', () => {
 client.user.setActivity('-help!', { type: 'WATCHING' })
client.user.setStatus('idle')
}) 






      client.login(process.env.token);
