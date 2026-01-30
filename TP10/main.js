import Game from "./model/Game.js";
import Gameview from "./view/GameView.js";
import GameController from "./controler/GameController.js";

const game = new Game();

const view = new Gameview(game);

new GameController(game,view);
