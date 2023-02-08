const Game = require("./game.js");

class GameView{
    constructor(canvas){
        this.game = new Game(canvas);
        this.ctx = canvas.getContext("2d")
    }

}

module.exports = GameVIew