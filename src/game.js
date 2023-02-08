// const Item = require("./item.js");
// const List = require("./list.js");
const Timer = require("./timer.js");
const listArr = require("./list.js");
const itemArr = require("./item.js");


const list = document.querySelector("#reflist")
const itemh = document.querySelector("#items")

class Game{
    constructor(){
        // this.ctx = canvas.getContext("2d")
        this.items = {};
        this.numitems = 5;
        this.list = {}

    }

    createList(){
        
        for(let i =0; i<this.numitems; i++){
            const listText = document.createElement("li");
            listText.setAttribute('class', "listed");
            listText.innerHTML = listArr[i].text;
            this.list.push(listText);
            list.append(listText);
            console.log(listText)
        }
    }

    createBoard(){
        for(let i = 0; i<this.numitems; i++){
            const item = document.createElement("img");
            item.setAttribute("src", "scripts/temp.png");
            this.items.push(item);
            item.addEventListener('click', pickItem);
            itemh.append(item);
            console.log(item)
        }
    }

    match(item){
        this.list.forEach(lEle =>{
            if (lEle.name = item.name) return true;
            })
    }

    pickItem(){
        let itemName = this.name;
        this.list.name(itemName).get

        if (match(this)){
            //change className of found item
            this.list[itemId].className = "found"
            //animate 
            //remove eventListener
        }else{
            //decrease timer by 2s
        }   
        // check if winner    
        //iterate through list and check if all "found"
        if (this.list.every(ele => ele.className === "found")){
            result = document.getElementById("result")
            result.innerHTML = "YOU DEFUSED THE BOMB"
            }
        
    }

    // winner(){
    //     //iterate through list and check if all "found"

    //     if (this.list.every(ele => ele.className=== "found")){
    //         result = document.getElementById("result")
    //         result.innerHTML = "YOU DEFUSED THE BOMB"
    //     }
    // }


}
module.exports = Game;