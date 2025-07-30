// @ts-check

/// <reference types="p5/global" />
/// <reference path="p5.play.d.ts" />

function preload() {
  setupAnimations();
}

function setup() {
  createCanvas(400, 400, null, document.querySelector("#game-container"));
  setupSprites();
}

function draw() {
  // re-draw the background
  // in: background.js
  drawBackground();
  // draw the score board and other boards
  // in: display-boards.js
  showBoards();
  
  // respond to user input 
  // in: user-controls.js
  respondToUser();

  // control sprite movement (going off screen, etc)
  // in: sprite-movement.js
  doSpriteMovement();

  // control sprite interaction (bounce, displace, collide)
  // in: sprite-interaction.
  doSpriteInteraction();

  // This just draws all the sprites
  drawSprites();
}