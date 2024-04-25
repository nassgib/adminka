const gamesRouter = require("express").Router(); 
const {sendAllGames, addGameController, sendUpdatedGames} = require("../controllers/games"); 
const { getAllGames, checkIsTitleInArray,updateGamesArray,updateGamesFile,findGameById,deleteGame} = require("../middlewares/games");
gamesRouter.get("/games",getAllGames, sendAllGames ,checkIsTitleInArray, updateGamesArray,updateGamesFile,sendUpdatedGames);
gamesRouter.delete("/games/:id",getAllGames, deleteGame, findGameById,updateGamesFile,sendUpdatedGames);
gamesRouter.post("/games", getAllGames, addGameController);
module.exports = gamesRouter; 