const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const fs = require('fs');
const token = config.token;
const prefix = config.prefix;
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
    console.log(file)
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        client.commands.get('ping').execute(message, args);
    }
    console.log(message.author.tag + " used " + command)
});

client.login(token);
