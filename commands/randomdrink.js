const fetch = require("node-fetch")
const config = require('../config.json');
const apikey = config.apikey;
const Discord = require('discord.js');

module.exports = {
    name: 'randomdrink',
    description: 'Gives a random drink',
    execute(message, args) {
        fetch('https://www.thecocktaildb.com/api/json/v1/' + apikey + '/random.php')
            .then(response => {
                return response.json();
            }).then(drinks => {
            var messageToSend = new Discord.MessageEmbed();
            messageToSend
                .setColor('#00DFE2')
                .setTitle(drinks["drinks"][0]["strDrink"])
                .setDescription("Category: " + drinks["drinks"][0]["strCategory"])
                .setURL("https://github.com/thejoeyl/CocktailBot")
                .setImage(drinks["drinks"][0]["strDrinkThumb"])
                .addFields(
                    {name: 'Type of glass', value: drinks["drinks"][0]["strGlass"]},
                    {name: 'Alcoholic', value: drinks["drinks"][0]["strAlcoholic"]},
                    {name: 'Instructions', value: drinks["drinks"][0]["strInstructions"]}
                )
                .setFooter("Drink responsibly")
            message.channel.send(messageToSend)
        })
    },
};
