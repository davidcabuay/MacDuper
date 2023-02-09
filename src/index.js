
document.addEventListener("DOMContentLoaded",() => {

    const canvas= document.getElementById("game-canvas");
    const ctx = canvas.getContext("2d")


const  itemArr = [
    {
        name: 'screwdriver',
        txt: 'I turn and twist, with a handle to grip, With screws I work to tighten or strip',
        // img: 'https://picsum.photos/200/301',
        img: 'assets/screwdriver.png',
        id: 0
    },
    {
        name: 'copper wire',
        txt: 'I am thin, I am red, Electricity, I carry ahead',
        img: 'assets/copperwire.png',
        id: 1
    } ,
    {
        name: 'sharpie',
        txt: 'I am used for art, or just to jot, A permanent marker is what I get called a lot!',
        img: 'assets/sharpie.png',
        id: 2
    },
    {
        name: 'paper clip',
        txt: 'Papers and notes, I keep in line, A humble helper all the time',
        img: 'assets/paperclip.png',
        id: 3
    },
    {
        name: 'paper',
        txt: 'I am usually white but now I am scruched tight, I am the canvas you write on at night',
        img: 'assets/paper.png',
        id: 4
    },
    {
        name: 'toothpaste',
        txt: 'I come in a tube, and i foam and I squirt, I keep your teeth clean and remove the dirt',
        img: 'assets/toothpaste.png',
        id: 5
    },
    {
        name: 'toothbrush',
        txt: 'With bristles firm and clean, I keep your teeth serene',
        img: 'assets/toothbrush.png',
        id: 6
    },
    {
        name: 'quarter',
        txt: 'I am round and shiny with a picture or two, In wallets and purses you can find my crew',
        img: 'assets/coin.png',
        id: 7
    },
    {
        name: 'tide pod',
        txt: 'I have many colors, but I am not to eat, I am used for the laundry to clean your sheets',
        img: 'assets/tidepod.png',
        id: 8
    },
    {
        name: 'pizza',
        txt: 'With cheese, sauce and dough, I am complete, A favorite food you can not wait to eat',
        img: 'assets/pizza.png',
        id: 9
    },
    {
        name: 'loose thread',
        txt: 'I am thin and long and can be spun, With needle and cloth I would not be undone',
        img: 'assets/thread.png',
        id: 10
    },
    {
        name: 'hotdog',
        txt: 'I am long in a bun and often called a glizzy, you can eat me on the go whenever you are busy',
        img: 'assets/hotdog.png',
        id:11
    },
    // {
    //     name: 'chapstick',
    //     txt: 'chapstick',
    //     img: 'assets/chapstick.png',
    //     id: 12
    // },
    {
        name: 'clothespin',
        txt: 'I am small and wooden, with two arms and a spring, I clip clothes to the line and let the breeze make them swing ,',
        img: 'assets/clothespin.png',
        id: 13
    },
    {
        name: 'comb',
        txt: 'I have teeth that are fine and sturdy, I comb your hair to make you look thirty',
        img: 'assets/comb.png',
        id: 14
    },
    {
        name: 'feather',
        txt: 'From birds I come to keep them warm, I am used for writing and decoration and even to peform',
        img: 'assets/feather.png',
        id: 15
    },
    {
        name: 'fork',
        txt: 'I have tines that are sharp and slick, With me you eat, no chopsticks',
        img: 'assets/fork.png',
        id: 16
    },
    {
        name: 'gum',
        txt: 'I am chewy and sticky, and I fight halitosis, I freshen your breath for some minty bliss',
        img: 'assets/gum.png',
        id: 17
    },
    {
        name: 'pills',
        txt: 'I am small and oblong and filled with surprise, With medicine or vitamins, I protect you from demise ',
        img: 'assets/pills.png',
        id: 18
    },
    {
        name: 'rubberband',
        txt: 'I am stretchy and strong, and come in a band, I hold things together, under your command ',
        img: 'assets/rubberband.png',
        id: 19
    },
    {
        name: 'scissors',
        txt: 'I have two blades, that can be used for trimming, I cut paper or fabric, do not use me for killing',
        img: 'assets/scissors.png',
        id: 20
    },
    {
        name: 'scrunchie',
        txt: 'I am soft and stretchy, and come in a knot, I keep your hair back, to hide your bald spot',
        img: 'assets/scrunchie.png',
        id: 21
    },
    {
        name: 'spoon',
        txt: 'I have a bowl, and a handle so long, if you think I am a fork then you are wrong',
        img: 'assets/spoon.png',
        id: 22
    },
    {
        name: 'spring',
        txt: 'I am coiled and tight and made of metal, with tension and force stronger than a boiling kettle',
        img: 'assets/spring.png',
        id: 23
    },
    {
        name: 'thermometer',
        txt: 'I measure heat and come in many forms, Like oral or ear, I am here to inform',
        img: 'assets/thermometer.png',
        id: 24
    },
    {
        name: 'wrench',
        txt: 'I am a tool, that loosens and tightens, with nuts and bolts, then and again ',
        img: 'assets/wrench.png',
        id: 25
    },
    {
        name: 'pen',
        txt: 'I have a point, that writes on paper, with a blob of ink, you are my maker ',
        img: 'assets/pen.png',
        id: 26
    },
    {
        name: 'brush',
        txt: 'I have bristles, straight  and in angles, with the knots in your hair, I can help you de-tangle',
        img: 'assets/brush.png',
        id: 27
    }

];


const backMusic = new Audio()
backMusic.setAttribute('src', "assets/backmusic.mp3");
const twentys = new Audio()
twentys.setAttribute('src', "assets/test20.mp3");
const tens = new Audio()
tens.setAttribute('src', "assets/10good.mp3");
const fifteens = new Audio()
fifteens.setAttribute('src', "assets/15good.mp3");
const fives = new Audio()
fives.setAttribute('src', "assets/5good.mp3");
const explosion = new Audio()
explosion.setAttribute('src', "assets/explosion.mp3");
const victory = new Audio()
victory.setAttribute('src', "assets/victory.mp3");
victory.volume = 0.2;
const noreal = new Audio()
noreal.setAttribute('src', "assets/noreal.mp3");
const congreal = new Audio()
congreal.setAttribute('src', "assets/congreal.mp3");
const missImp = new Audio()
missImp.setAttribute('src', "assets/MissImp.mp3");
missImp.volume = 0.1;
const nice = new Audio()
nice.setAttribute('src', "assets/nice.mp3");
const omgwedie = new Audio()
omgwedie.setAttribute('src', "assets/omgwedie.mp3");
const death = new Audio()
death.setAttribute('src', "assets/death.mp3");

const muteButton = document.getElementById("mute");

muteButton.addEventListener("click", () => {
    if (backMusic.muted === false &&
        twentys.muted === false &&
        fifteens.muted === false &&
        tens.muted === false &&
        fives.muted === false &&
        victory.muted === false &&
        explosion.muted === false &&
        noreal.muted === false &&
        missImp.muted === false &&
        nice.muted === false &&
        omgwedie.muted === false &&
        death.muted === false &&
        congreal.muted === false){
            backMusic.muted = true;
            twentys.muted = true; 
            fifteens.muted = true; 
            tens.muted = true; 
            fives.muted = true; 
            victory.muted = true; 
            explosion.muted = true;
            noreal.muted = true; 
            congreal.muted = true;
            missImp.muted = true;
            nice.muted = true; 
            death.muted = true;
            omgwedie.muted = true;
            muteButton.innerHTML = "Unmute"
        } else{
            backMusic.muted = false;
            twentys.muted = false; 
            fifteens.muted = false; 
            tens.muted = false; 
            fives.muted = false; 
            victory.muted = false; 
            explosion.muted = false;
            noreal.muted = false; 
            congreal.muted = false;
            missImp.muted = false;
            nice.muted = false; 
            death.muted = false;
            omgwedie.muted = false;
            muteButton.innerHTML = "Mute"
        }

})


const list = document.getElementById("reflist")
const items = document.getElementById("items")
const startButton = document.getElementById('initialize')
const restartButton = document.querySelector('#homebutton')
const restart1Button = document.querySelector('#losebutton')
// const itemHash = [];
const numItems = 3;
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
        nice.play()
        const listEntry = matched;
        console.log(listEntry)
        listEntry.className = "found";
        foundItems.push(listEntry);
        // item.removeEventListener('click', pickItem);
    } else {
        noreal.play();
        limit = limit - 2;
    }
}

// function currentSound(){
//     if c
// }

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

const losepage = document.getElementById("losepage")
const winpage = document.getElementById("winpage")
function startTimer(timeLimit){
    limit = timeLimit
    twentys.play();
    const t = setInterval(function(){
        document.getElementById("timer").innerHTML= limit;
        limit--;
        if (limit===14) fifteens.play();
        if (limit===9) tens.play();
        if (limit===4) fives.play();
        if (limit===1) omgwedie.play();
        if (foundItems.length ===listHash.length){
            clearInterval(t);
            winpage.style.display = "flex";
            victory.play();
            document.getElementById("timer").innerHTML = "GG"
            setTimeout(()=> {congreal.play()}, 1000);
            
        }
        else if (limit<0){
            clearInterval(t);
            losepage.style.display = "flex";
            explosion.play();
            document.getElementById("timer").innerHTML = "GG";
            setTimeout(()=> {death.play()}, 1000);
            
        }
    },1000)
}

restartButton.addEventListener('click', function(){
    window.location.reload();
    return false;
})

restart1Button.addEventListener('click', function(){
    window.location.reload();
    return false;
})
startButton.addEventListener('click', startGame);
const gamepage = document.getElementById("gamepage");
const startpage = document.getElementById("startpage");
const title = document.getElementById("title")

function startGame(){
    //remove the startscreen
    startpage.setAttribute("hidden", true)
    document.body.style.backgroundImage = "url('assets/background.png')"
    gamepage.removeAttribute("hidden")
    title.removeAttribute("hidden")
    //removechild
    //coundown 3,2,1 print on screen
    backMusic.play()
    createList();
    setTimeout(() => {startTimer(20);
                        backMusic.pause()
                        missImp.play()}, 2000);
    createBoard();
    startButton.removeEventListener('click', startGame)
}




})