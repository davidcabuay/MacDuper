const Game = require("./game.js");

class GameView{
    constructor(canvas){
        this.game = new Game(canvas);
        this.ctx = canvas.getContext("2d")
    }

}

module.exports = GameVIew

// restartButton.addEventListener('click', function(){
//     window.location.reload();
//     return false;
// })

// startButton.addEventListener('click', startGame)

// function createBoard(){
//     for(let i = 0; i<itemArr.length; i++){
//         const item = document.createElement("img");
//         let xy = randomCoordinate();
//         console.log(xy)
//         // const item = new Image();
//         // item.src = itemArr[i].img
//         item.setAttribute("src", itemArr[i].img);
//         item.setAttribute("data-id", itemArr[i].id);
//         // item.className = "item-image";
//         item.style.height = 'auto';
//         item.style.width = 'auto';
//         item.style.maxHeight = '100px';
//         item.style.maxWidth = '100px';
//         item.style.top = xy[1] + "px";
//         item.style.left = xy[0] + "px";
//         itemHash.push(item);
//         item.addEventListener('click', pickItem);
//         // canvas.appendChild(item);
//         // ctx.drawImage(item, xy[0],xy[1])
//         items.append(item)
//     }
// }

// function pickItem(){
//     const matched = match(this);
//     if (matched!== undefined){
//         const listEntry = matched;
//         console.log(listEntry)
//         listEntry.className = "found";
//         foundItems.push(listEntry);
//         this.removeEventListener('click', pickItem);
//     }else{
//         limit = limit - 2

//     }
    
//     }


// function match(item){
//     let itemId = item.getAttribute('data-id')
//     let match = undefined
//     listHash.forEach(ele => {
//         let listId = ele.getAttribute('data-id')
//         if (listId === itemId){
//             console.log(ele)
//             match = ele
            
//         }
//     })
//     return match
// }

// <button id="initialize">START</button> -->
// <button id="restart">RESTART</button> -->