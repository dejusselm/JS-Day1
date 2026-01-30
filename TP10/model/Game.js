import Player from "./Player.js";

export default class Game {
   constructor() {
      this.isRunning = false;
      this.isOver = false;
      this.timer = 300;
      this.players = {};
   }

   verifyDeletedPlayers(backendData) {
      for (const playerId in this.players) {
         if (!backendData.players[playerId]) {
            delete this.players[playerId];
         }
      }
   }

   update(gameStateFromServer) {
      this.isRunning = gameStateFromServer.isRunning;
      this.isOver = gameStateFromServer.isOver;
      this.timer = gameStateFromServer.timer;
      for (const playerId in gameStateFromServer.players) {
         let data = gameStateFromServer.players[playerId];
         if (!this.players[playerId]) {
            let name = data.name;
            let skinPath = data.skinPath;
            let position = data.position;
            this.players[playerId] = new Player(playerId, name, skinPath, position);
         }
         if (!(this.players[playerId] instanceof Player)) {
            this.players[playerId] = new Player(playerId, data.name, data.skinPath, data.position);
         }
         this.players[playerId].update(data);

      }
      this.verifyDeletedPlayers(gameStateFromServer);
   }
}

/*
//////////////TESTS/////////////
const gameFront = new Game();
const gameBack = new Game();
gameFront.players["idNEW"] = new Player("idNEW","DENJI", null, [0.777, 0.777]);
gameFront.players["idToDelete"] = new Player("idToDelete","Adios", null, [0, 0]);


console.log("---------------------> Game Front avant update :", JSON.stringify(gameFront, null, 2));

gameBack.timer = 150.00002404;
gameBack.isOver = false;
gameBack.isRunning = true;
gameBack.players["id1"] = { "name": "Ben Dover", "skinPath": null, "position": [0.49999, 0.715004] };
gameBack.players["id2"] = { "name": "kiryu", "skinPath": null, "position": [0.334, 0.20889] };
gameBack.players["id3"] = { "name": "SUKUNA", "skinPath": null, "position": [0.666, 0.666] };
gameBack.players["idNEW"] = { "name": "DENJI", "skinPath": null, "position": [0.20, 0.20] };

console.log("---------------------> Game Back : ", gameBack);

gameFront.update(gameBack);

console.log("---------------------> NEW GAME FRONT :", gameFront);
*/