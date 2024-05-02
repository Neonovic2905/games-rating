const fs = require("fs");
const {config}= require("../appModules/rating");
const { getRandomGame } = require("../appModules/api");

async function gameRouteController(res) {

  fs.readFile(config.PATH_TO_RATING_FILE, (err, data)=> {
 if (err) {
    console.log(err);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
    const ratingFile = JSON.parse(data);
    const game = getRandomGame(ratingFile); // Получаем случайную игру
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));

  });

}  
  module.exports = gameRouteController; 