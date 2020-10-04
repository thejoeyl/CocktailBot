const fetch = require("node-fetch")
const config = require('../config.json');
const apikey = config.apikey;
module.exports = {
    name: 'randomdrink',
    description: 'Gives a random drink',
    execute(message, args) {
        message.channel.send('insert random drink in here');
        fetch('https://www.thecocktaildb.com/api/json/v1/' + apikey + '/random.php')
            .then(response => {
                return response.json();
            }).then(drinks => {
            console.log(drinks["drinks"][0]["strDrink"])
        })
    },
};
