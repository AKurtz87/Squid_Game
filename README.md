# Squid_Game 🦑

This is a web-based game that can be played in a browser. The game is implemented using JavaScript and HTML elements, and makes use of the p5.js library for graphics and animation.

## Gameplay

The objective of the game is to control a Squid character and avoid colliding with various obstacles as they move across the screen. The player can control the Squid's movement using the arrow keys or by clicking and dragging the mouse. The game is divided into two levels, each of which presents different challenges and obstacles to avoid.

<img width="542" alt="image" src="https://user-images.githubusercontent.com/91114967/224359120-549873eb-a3fd-47c7-b87c-9305d47cc1d7.png">

In addition to the Squid character, there are several other objects that appear on the screen during gameplay, including fish, stars, sharks, and ink. These objects can either help or hinder the player's progress, depending on how they interact with the Squid.

When the squid achieve a specific score, the game shift to level 2 where the squid has to defeat the Monster!

<img width="570" alt="image" src="https://user-images.githubusercontent.com/91114967/224359395-21db99d5-13b6-46b6-8a83-3bc34a1fb831.png">

The player's score is displayed on the screen during gameplay, and decreases over time. The player also has a limited number of lives, which are displayed as hearts on the screen. If the player collides with an obstacle, they lose a life, and the game ends if they run out of lives.

## Files

The game is implemented using a set of JavaScript files that define various objects and functions used in the game logic, including:

- squid.js: defines the Squid character and its movement and collision detection logic.
- lure.js: defines the Lure object, which is used to attract fish.
- sketch.js: sets up the game loop and initializes various game objects and settings.
- score.js: defines the Score object, which tracks the player's score during gameplay.
- life.js: defines the Life object, which tracks the player's remaining lives.
- fish.js: defines the Fish object, which appears on the screen and can be collected by the player for points.
- star.js: defines the Star object, which appears on the screen and can be collected by the player for extra lives.
- shark.js: defines the Shark object, which appears on the screen and can damage the player's Squid character.
- gamb.js: defines the Gamb object, which appears on the screen and can provide a temporary speed boost for the player's Squid character.
- ink.js: defines the Ink object, which appears on the screen and can temporarily obstruct the player's vision.
- carrot.js: defines the Carrot object, which appears on the screen and can be collected by the player for points.
- monster.js: defines the Monster object, which appears on the screen and can damage the player's Squid character.
- level_1.js: defines the Level_1 object, which initializes the objects and settings for the first level of the game.
- level_2.js: defines the Level_2 object, which initializes the objects and settings for the second level of the game.
- utilities.js: defines various utility functions used throughout the game.

In addition, there is an HTML file (index.html) that sets up the web page for the game, including loading the **p5.js library** and the various JavaScript files.

## Running the Game

To run the game, start the server by running the JavaScript file that contains the server code. The server is configured to serve static files, including the HTML, CSS, JavaScript, and image files needed to run the game.

To start the server, navigate to the directory where the server file is located and run the command **node app.js** in the terminal. This will start the server, and the game can be accessed by opening a web browser and navigating to **localhost:3000**

Once the game is loaded in the web browser, the player can control the Squid character using **W** and **S** and shoot ink by **P**. The images used in the game are served by the server from the "images" directory, which is configured using app.use(express.static("images"));. This allows the images to be loaded by the browser and displayed on the canvas as needed during gameplay.

## Future Work

Possible future improvements to the game could include adding additional levels, introducing new obstacles and objects, and refining the game mechanics to make them more challenging and engaging. Additionally, the game could be made more visually appealing by adding more detailed graphics and animations.
