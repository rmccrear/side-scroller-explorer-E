// extras.js - Simple sound playing using HTML5 Audio

let sounds = {};

function playSound(filename, loop = false) {
  if (!sounds[filename]) {
    sounds[filename] = new Audio(filename);
  }
  sounds[filename].currentTime = 0;
  sounds[filename].loop = loop;
  sounds[filename].play();
}

function stopSound(filename) {
  if (sounds[filename]) {
    sounds[filename].pause();
    sounds[filename].currentTime = 0;
  }
} 

/**
 * Generates a random number between min and max (inclusive)
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 * @returns {number} Random number between min and max
 * @example
 * let randomX = randomNumber(0, 400); // Random X position
 * let randomY = randomNumber(100, 300); // Random Y position
 * let randomSpeed = randomNumber(1, 5); // Random speed
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Edge sprites for screen boundaries
var topEdge, bottomEdge, leftEdge, rightEdge, edges;

function createEdgeSprites() {
  // Create edge sprites just outside the screen boundaries
  topEdge = createSprite(width/2, -10, width, 20);
  bottomEdge = createSprite(width/2, height + 10, width, 20);
  leftEdge = createSprite(-10, height/2, 20, height);
  rightEdge = createSprite(width + 10, height/2, 20, height);
  
  // Make them invisible
  topEdge.visible = false;
  bottomEdge.visible = false;
  leftEdge.visible = false;
  rightEdge.visible = false;
  
  // Make them immovable
  topEdge.immovable = true;
  bottomEdge.immovable = true;
  leftEdge.immovable = true;
  rightEdge.immovable = true;
  
  // Create edges group
  edges = createGroup();
  edges.add(topEdge);
  edges.add(bottomEdge);
  edges.add(leftEdge);
  edges.add(rightEdge);
}