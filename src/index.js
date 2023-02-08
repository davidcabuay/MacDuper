
document.addEventListener("DOMContentLoaded",() => {

    const canvas= document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d")


const  itemArr = [
    {
        name: 'screwdriver',
        txt: 'I turn and twist, with a handle to grip, With screws I work to tighten or strip',
        // img: 'https://picsum.photos/200/301',
        img: '../src/scripts/screwdriver.png',
        id: 0
    },
    {
        name: 'copper wire',
        txt: 'I am thin, I am red, Electricity, I carry ahead',
        img: '../src/scripts/copperwire.png',
        id: 1
    } ,
    {
        name: 'sharpie',
        txt: 'I am used for art, or just to jot, A permanent marker is what I get called a lot!',
        img: '../src/scripts/sharpie.png',
        id: 2
    },
    {
        name: 'paper clip',
        txt: 'Papers and notes, I keep in line, A humble helper all the time',
        img: '../src/scripts/paperclip.png',
        id: 3
    },
    {
        name: 'paper',
        txt: 'I am usually white but now I am scruched tight, I am the canvas you write on at night',
        img: '../src/scripts/paper.png',
        id: 4
    },
    {
        name: 'toothpaste',
        txt: 'I come in a tube, and i foam and I squirt, I keep your teeth clean and remove the dirt',
        img: '../src/scripts/toothpaste.png',
        id: 5
    },
    {
        name: 'toothbrush',
        txt: 'With bristles firm and clean, I keep your teeth serene',
        img: '../src/scripts/toothbrush.png',
        id: 6
    },
    {
        name: 'quarter',
        txt: 'I am round and shiny with a picture or two, In wallets and purses you can find my crew',
        img: '../src/scripts/coin.png',
        id: 7
    },
    {
        name: 'tide pod',
        txt: 'I have many colors, but I am not to eat, I am used for the laundry to clean your sheets',
        img: '../src/scripts/tidepod.png',
        id: 8
    },
    {
        name: 'pizza',
        txt: 'With cheese, sause and dough, I am complete, A favorite food you can not wait to eat',
        img: '../src/scripts/pizza.png',
        id: 9
    },
    {
        name: 'loose thread',
        txt: 'I am thin and long and can be spun, With needle and cloth I would not be undone',
        img: '../src/scripts/thread.png',
        id: 10
    },
    {
        name: 'hotdog',
        txt: 'I am long in a bun and often called a glizzy, you can eat me on the go whenever you are busy',
        img: '../src/scripts/hotdog.png',
        id:11
    },
    // {
    //     name: 'chapstick',
    //     txt: 'chapstick',
    //     img: '../src/scripts/chapstick.png',
    //     id: 12
    // },
    {
        name: 'clothespin',
        txt: 'I am small and wooden, with two arms and a spring, I clip clothes to the line and let the breeze make them swing ,',
        img: '../src/scripts/clothespin.png',
        id: 13
    },
    {
        name: 'comb',
        txt: 'I have teeth that are fine and sturdy, I comb your hair to make you look thirty',
        img: '../src/scripts/comb.png',
        id: 14
    },
    {
        name: 'feather',
        txt: 'From birds I come to keep them warm, I am used for writing and decoration and even to peform',
        img: '../src/scripts/feather.png',
        id: 15
    },
    {
        name: 'fork',
        txt: 'I have tines that are sharp and slick, With me you eat, no chopsticks',
        img: '../src/scripts/fork.png',
        id: 16
    },
    {
        name: 'gum',
        txt: 'I am chewy and sticky, and I fight halitosis, I freshen your breath for your awaited kiss',
        img: '../src/scripts/gum.png',
        id: 17
    },
    {
        name: 'pills',
        txt: 'I am small and oblong and filled with surprise, With medicine or vitamins, I protect you from demise ',
        img: '../src/scripts/pills.png',
        id: 18
    },
    {
        name: 'rubberband',
        txt: 'I am stretchy and strong, and come in a band, I hold things together, under your command ',
        img: '../src/scripts/rubberband.png',
        id: 19
    },
    {
        name: 'scissors',
        txt: 'I have two blades, that can be used for trimming, I cut paper or fabric, do not use me for killing',
        img: '../src/scripts/scissors.png',
        id: 20
    },
    {
        name: 'scrunchie',
        txt: 'I am soft and stretchy, and come in a knot, I keep your hair back, to hide your bald spot',
        img: '../src/scripts/scrunchie.png',
        id: 21
    },
    {
        name: 'spoon',
        txt: 'I have a bowl, and a handle so long, if you think I am a fork then you are wrong',
        img: '../src/scripts/spoon.png',
        id: 22
    },
    {
        name: 'spring',
        txt: 'I am coiled and tight and made of metal, with tension and force stronger than a boiling kettle',
        img: '../src/scripts/spring.png',
        id: 23
    },
    {
        name: 'thermometer',
        txt: 'I measure heat and come in many forms, Like oral or ear, I am here to inform',
        img: '../src/scripts/thermometer.png',
        id: 24
    },
    {
        name: 'wrench',
        txt: 'I am a tool, that loosens and tightens, with nuts and bolts, then and again ',
        img: '../src/scripts/wrench.png',
        id: 25
    },
    {
        name: 'pen',
        txt: 'I have a point, that writes on paper, with a blob of ink, you are my maker ',
        img: '../src/scripts/pen.png',
        id: 26
    },
    {
        name: 'brush',
        txt: 'I have bristles, straight  and in angles, with the knots in your hair, I can help you de-tangle',
        img: '../src/scripts/brush.png',
        id: 27
    }

];



const list = document.querySelector("#reflist")
const items = document.querySelector("#items")
const startButton = document.querySelector('#initialize')
const restartButton = document.querySelector('#restart')
const itemHash = [];
const numItems = 5;
const listHash = [];
const foundItems = [];


const shuffled = itemArr.sort(()=> Math.random() - 0.5)
function createList(){
    for(let i = 0; i<numItems; i++){
        const listText = document.createElement("li");
        listText.setAttribute('class', "listed");
        listText.setAttribute('data-id', shuffled[i].id);
        listText.innerHTML = shuffled[i].txt;
        listHash.push(listText);
        list.append(listText);

    }
}

const itemWidth= 50;
const itemHeight = 50;
const occupiedCoordinates = [];


const randomCoordinate = function(){
    const maxHeight = canvas.offsetHeight - itemHeight;
    const maxWidth = canvas.offsetWidth - itemWidth;
    const x = Math.floor( Math.random() * maxWidth);
    const y = Math.floor( Math.random() * maxHeight);
    const r = [x,y];
    console.log(maxHeight)
    console.log(maxWidth)
    console.log(r)
    if (occupiedCoordinates.some(coord => 
        coord[0] < x + itemWidth &&
        coord[0] + itemWidth > x &&
        coord[1] < y + itemHeight &&
        coord[1] + itemHeight > y)){
        return randomCoordinate();
    }
    occupiedCoordinates.push(r);
    return r;
}


function createBoard(){
    for(let i = 0; i < itemArr.length; i++){
        const item = new Image();
        // console.log(canvas.offsetHeight)
        const xy = randomCoordinate();
        item.src = itemArr[i].img;
        item.addEventListener('load', function(){
            ctx.drawImage(item, xy[0], xy[1], itemWidth, itemHeight);
            // Add click event listener for each image
            canvas.addEventListener("click", function(e) {
                // Check if the click was inside the image bounds
                // console.log(e.x, xy[0], e.y, xy[1])
                const rect = canvas.getBoundingClientRect();
                const topDistance = Math.floor(rect.top);
                const leftDistance = Math.floor(rect.left);
                if (e.x - leftDistance >= xy[0] && e.x - leftDistance<= xy[0] + itemWidth &&
                    e.y - topDistance >= xy[1] && e.y - topDistance <= xy[1] + itemHeight) {
                    const id = itemArr[i].id;
                    console.log(id)
                    pickItem(id, itemArr[i]);
                }
            
            });
        });
    }
}

function pickItem(id, item) {
    const matched = match(id);
    // console.log(matched);
    if (matched !== undefined) {
        const listEntry = matched;
        console.log(listEntry)
        listEntry.className = "found";
        foundItems.push(listEntry);
        // item.removeEventListener('click', pickItem);
    } else {
        limit = limit - 2;
    }
}

function match(id) {
    let match = undefined;
    // console.log(id + " parameter id");
    listHash.forEach(ele => {
        let listId = ele.getAttribute('data-id');
        console.log(listId + " list ID")
        console.log(id + " parameter id")
        listId = listId
        if (parseInt(listId) === parseInt(id)) {
            console.log("listID === parameter id")
            match = ele;
        }
    });
    console.log(match)
    return match;
}

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

function startTimer(timeLimit){
    limit = timeLimit
    const t = setInterval(function(){
        document.getElementById("timer").innerHTML= limit;
        limit--;
        if (foundItems.length ===listHash.length){
            clearInterval(t);
            document.getElementById("timer").innerHTML = "GG"
            // startButton.innerHTML = "START"
        }
        else if (limit<0){
            clearInterval(t);
            document.getElementById("timer").innerHTML = "GG"
            // startButton.innerHTML = "START"
        }
    },1000)
}

restartButton.addEventListener('click', function(){
    window.location.reload();
    return false;
})

startButton.addEventListener('click', startGame)
const gamepage = document.getElementById("gamepage")

function startGame(){
    //remove the startscreen
    document.body.style.backgroundImage = "url('../src/scripts/background.png')"
    gamepage.removeAttribute("hidden")
    //removechild
    //coundown 3,2,1 print on screen
    createList();
    setTimeout(() => startTimer(20), 2000);
    createBoard();
    startButton.removeEventListener('click', startGame)
}




})