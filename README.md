# MacDuper

Play MacDuper here! https://davidcabuay.github.io/MacDuper/
## Background

Based on the cult classic "MacGruber", the player is tasked to defuse an explosive using commonly found household items. When the game begins, the player is presented with a list of riddles that correspond to household items and the countdown timer starts. 

The player must select the items that correlates to the riddles on the given list before the timer runs out. The player must select carefully as picking the wrong item decreases the remaining time on the explosive. The objective of the game is to collect all the items to defuse the explosive within the time limit.

## Functionality & Technical Implementations

With the MacDuper game, users will be able to:

- Start and reset the main game display
- Toggle the sound control button
- Click on items that corresponds to the item description


Items are given random coordinates and are ensured that no items overlap each other:
```
// src/index.js

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
```

Item images are then drawn on the board and given hitboxes to handle click events:

```
function createBoard(){
    for(let i = 0; i < itemArr.length; i++){
        const item = new Image();
        const xy = randomCoordinate();
        item.src = itemArr[i].img;
        item.addEventListener('load', function(){
            ctx.drawImage(item, xy[0], xy[1], itemWidth, itemHeight);
            canvas.addEventListener("click", function(e) {
                const rect = canvas.getBoundingClientRect();
                const topDistance = Math.floor(rect.top);
                const leftDistance = Math.floor(rect.left);
                if (e.x - leftDistance >= xy[0] && e.x - leftDistance <= xy[0] + itemWidth && e.y - topDistance >= xy[1] && e.y - topDistance <= xy[1] + itemHeight) {
                    const id = itemArr[i].id;
                    pickItem(id, itemArr[i]);
                }
            
            });
        });
    }
}
```
<!-- In addition, this project will include:

- A production README -->


<!-- ## Wireframes

![Homepage](https://user-images.githubusercontent.com/96511730/216433903-dbec972d-e4d9-4c95-acbd-fe8b21f75aa9.png) -->


<!-- - On the top right of the page, there will be Nav links that include links to this project's Github repo, my LinkedIn.
- On the top left of the page, there will be a Sound Control/Mute button.
- On the left of the page, there will be a list of item descriptions/riddles.
- On the top left of the main game display, there will be an explosive that displays the remaining time. -->



## Technologies
The technologies that will be implemented in this project inlcudes, but not limited to:

- `Canvas API` - used to render the main game display
- `Webpack` - used to bundle the source JavaScript code
- `npm` - used to manage project dependencies

<!-- ## Implementation Timeline

- **Friday Afternoon & Weekend**: Setup project and learn more about Canvas. Be able to render the game blueprint to Canvas.
- **Monday**: Work on the main algorithm of the game. Verify that selecting the correct item will strikethrough the corresponding element on the list. Work on the timer.
- **Tuesday**: Work on rendering the items to Canvas. Make sure the item placement in the main game display is randomized. Create the start/reset button.
- **Wednesday**: Work on styling the webpage and incoporating background sounds. Work on the sound button. Work on bonuses if there is enough time.
- **Thursday Morning**: Deploy to GitHub. -->

## Future implementations:

- Add different levels of difficulty
- Add more items to the
- Add different background settings
- Add animations when items are selected
- Refactor code
