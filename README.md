# JS-Project: Master of Potions

# Background 
Master of Potions is a game which users should be able to play around with different materials to make magical potions. The game will mainly focus on animation/visualization that create a fantasy-like vibe along with magical interaction with users. The main game scene will be in a lab-like environment and all kinds of materials will be display on different places around the lab. Users can hover over materials to see certain effects and click on the material to manipulate it accordingly. 

# Functionality & MVPs
Important animations (therefore should be prioritize) include:
  1) process of making potions (different methods with different animations?);
  2) when potion-making succeeds;
  3) when potion-making fails;

important visualizations include:
  1) when the cursor hovers over different objects;
  2) click on the object.
With the project done, users should:
* have access to multiple formulas for potions by clicking on certian object (like a scroll)
* be able to manipulate different materials by different ways (like brewing, extraction, burning)
* be able to see reactions when potions are made (successfully or unsuccessfully)

# Wireframes
<img width="1041" alt="Screen Shot 2022-02-04 at 11 17 32 AM" src="https://user-images.githubusercontent.com/94944347/152566206-3533fae2-fb7a-4e9b-b8a0-0215b4e9f20f.png">


* START button will direct user to the gameplay page.
* TUTOTIAL button will drop down simple introduction and tutorial for the player to understand the game
* ABOUT button will include links of this project's Github repo and creator's information


<img width="1036" alt="Screen Shot 2022-02-04 at 11 29 35 AM" src="https://user-images.githubusercontent.com/94944347/152566238-ca4202c6-7a5f-4694-8dbd-49ab55877f2b.png">

* Gameborad will provide these functions: 
  1) Main borad(workstation) that will display the animation of manipulation and game results
  2) Tools bar will provide functionality which users can interact with materials
  3) Ingredient bar will display available materials that users can use and interact with
  4) Hovering over materials should display details of the material
  5) Manipulation bar will finish the potion-making process and export the result

# Technologies, Libraries, APIs
This project will be implemented with the following technologies:
* HTML, CSS & JavaScript
* The Canvas API to render the game board
* Paper.js or Three.js to accomplish visualization and animation
* Webpack to transpile the source JavaScript code

# Timeline
* Friday Afternoon: Familiarize myself with the workflow, technologies and libraries that I will be using.
* Weekend: Have the project set up including having the canvas created and ensuring webpack running. I will also start the implementation of my gameplay page. This should include the initial state, how the potion is resulted and display after certain selections. 
* Monday: Keep working on the gameplay and ensure that interaction between materials class and potions class are working well and understand the logic under the hood. 
* Tuesday: After ensuring that the game is "playable", I will start to add visual effects and animation to the objects upon interactions with the user. I will spend the whole day figuring out how these effects can be implented and then decide if I should go deeper or simplify them.
* Wednesday: Keep working on the previous and polish my project preparing for the final presentation. Debugging and testing should happen during every stage but there should be a integrate test at the end to ensure the project works fine. 
* Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

# Bonus features
* Easter eggs like secret formula and special potion
* There could be various sound effects
