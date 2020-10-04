module.exports = {
    name: 'ping',
    description: 'Gives a response',
    execute(message, args) {
        message.channel.send('Pong');
    },
};
