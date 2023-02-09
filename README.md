# MacDuper

Play MacDuper here! https://davidcabuay.github.io/MacDuper/
## Background

Based on the cult classic "MacGruber", the player is tasked to defuse an explosive using commonly found household items. When the game begins, the player is presented with a list of riddles that correspond to household items and the countdown timer starts. 

In an unorganized drawer filled with miscellaneous items, the player must select the items that correlates to the riddles on the given list before the timer runs out. The player must select carefully as picking the wrong item decreases the remaining time on the explosive. The objective of the game is to collect all the items to defuse the explosive within the time limit.

## Functionality & MVPs

With the MacDuper game, users will be able to:

- Start and reset the main game display
- Click on items that corresponds to the item description
- Toggle the sound control button

In addition, this project will include:

- An **About** modal describing the background and rules of the game
- A production README


## Wireframes

![Homepage](https://user-images.githubusercontent.com/96511730/216433903-dbec972d-e4d9-4c95-acbd-fe8b21f75aa9.png)


- On the top right of the page, there will be Nav links that include links to this project's Github repo, my LinkedIn and the About modal.
- On the top left of the page, there will be a Sound Control/Mute button.
- On the left of the page, there will be a list of item descriptions/riddles.
- On the top left of the main game display, there will be an explosive that displays the remaining time.
- On the top right of the main display, there will be a Start/Reset button.


## Technologies
The technologies that will be implemented in this project inlcudes, but not limited to:

- `Canvas API` - used to render the main game display
- `Webpack` - used to bundle the source JavaScript code
- `npm` - used to manage project dependencies

## Implementation Timeline

- **Friday Afternoon & Weekend**: Setup project and learn more about Canvas. Be able to render the game blueprint to Canvas.
- **Monday**: Work on the main algorithm of the game. Verify that selecting the correct item will strikethrough the corresponding element on the list. Work on the timer.
- **Tuesday**: Work on rendering the items to Canvas. Make sure the item placement in the main game display is randomized. Create the start/reset button.
- **Wednesday**: Work on styling the webpage and incoporating background sounds. Work on the sound button. Work on bonuses if there is enough time.
- **Thursday Morning**: Deploy to GitHub.

## Bonus
If time allows, the following updates may be included:

- Add background sounds/ voice lines that correspond to the remaining time on the explosive
- Add different background settings
