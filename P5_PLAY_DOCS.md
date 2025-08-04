# p5.play Documentation

Welcome to the comprehensive guide for p5.play! This library extends p5.js to make game development easier and more fun. Whether you're creating a simple sprite-based game or a complex platformer, p5.play provides the tools you need.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Core Concepts](#core-concepts)
3. [Sprite Basics](#sprite-basics)
4. [Movement and Physics](#movement-and-physics)
5. [Collision Detection](#collision-detection)
6. [Animations](#animations)
7. [Input Handling](#input-handling)
8. [Groups](#groups)
9. [Camera System](#camera-system)
10. [Drawing and Graphics](#drawing-and-graphics)
11. [Sound](#sound)
12. [Advanced Features](#advanced-features)
13. [Examples and Tutorials](#examples-and-tutorials)

---

## Getting Started

### What is p5.play?

p5.play is a library that makes game development with p5.js much easier. It provides:

- **Sprites**: Visual objects that can move, animate, and interact
- **Collision Detection**: Automatic detection when sprites touch each other
- **Input Handling**: Easy keyboard and mouse controls
- **Animation System**: Create smooth animations from images
- **Camera System**: Scroll and zoom your game world
- **Physics**: Basic physics like gravity, friction, and bouncing

### Basic Setup

To use p5.play, you need to include it in your HTML file:

```html
<script src="p5.js"></script>
<script src="p5.play.js"></script>
```

### Your First p5.play Program

Here's a simple example to get you started:

```javascript
let player;

function setup() {
  createCanvas(400, 400);
  
  // Create a player sprite
  player = createSprite(200, 200, 50, 50);
  player.shapeColor = color(255, 0, 0); // Red color
}

function draw() {
  background(220);
  
  // Handle player movement
  if (keyDown('RIGHT_ARROW')) {
    player.velocityX = 5;

## Snippets

Quick reference for all 28 core p5.play functions and properties.

### Sprite Properties

```javascript
// Position
sprite.x = 200;                    // X coordinate of center
sprite.y = 300;                    // Y coordinate of center

// Movement
sprite.velocityX = 5;              // Horizontal velocity (positive = right)
sprite.velocityY = -3;             // Vertical velocity (positive = down)

// Visual
sprite.scale = 2;                  // Scale factor (1 = normal, 2 = double)
sprite.width = 50;                 // Width in pixels
sprite.height = 50;                // Height in pixels
sprite.visible = true;             // Show/hide sprite
sprite.rotateToDirection = true;   // Auto-rotate to movement direction
sprite.rotation = 45;              // Rotation angle in degrees
sprite.rotationSpeed = 5;          // Rotation speed in degrees per frame
sprite.shapeColor = color(255,0,0); // Shape color (when no image)
sprite.depth = 1;                  // Drawing order (higher = on top)
sprite.bounciness = 0.8;          // Bounciness factor (0-1)
```

### Sprite Methods

```javascript
// Debug
sprite.debug = true;               // Show collision box and debug info

// Collision
sprite.isTouching(target);         // Check if touching another sprite/group
sprite.bounce(target);             // Bounce off another sprite/group
sprite.bounceOff(target);          // Bounce off target (reverse direction)
sprite.collide(target);            // Handle collision detection and response
sprite.displace(target);           // Push away from target if overlapping
sprite.setCollider(type, ...args); // Set collision shape (rect, circle, point)

// Animation
sprite.nextFrame();                // Advance to next animation frame
sprite.setFrame(frame);            // Set specific animation frame
sprite.setVelocity(x, y);         // Set velocity directly
sprite.addAnimation(label, animation); // Add animation to sprite
```

### Utility Functions

```javascript
// Edge creation
createEdgeSprites();               // Create invisible screen edge sprites

// Animation loading
loadAnimation(...frameImages);     // Create animation from image files
loadSpriteSheet(image, frameWidth, frameHeight, numFrames); // Load sprite sheet
```

### Common Usage Patterns

```javascript
// Movement pattern
if (keyDown("RIGHT_ARROW")) {
  player.velocityX = 5;
  player.changeAnimation("walk");
} else {
  player.velocityX = 0;
  player.changeAnimation("idle");
}

// Collision pattern
if (player.isTouching(enemy)) {
  player.bounceOff(enemy);
  player.shapeColor = color(255, 0, 0); // Turn red
}

// Animation pattern
let walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
player.addAnimation("walk", walkAnim);
player.changeAnimation("walk");
```
  } else if (keyDown('LEFT_ARROW')) {
    player.velocityX = -5;
  } else {
    player.velocityX = 0;
  }
  
  // Draw all sprites
  drawSprites();
}
```

---

## Core Concepts

### What is a Sprite?

A **sprite** is a visual object in your game that can:
- Move around the screen
- Have animations
- Collide with other sprites
- Respond to user input
- Have different shapes and colors

Think of sprites as the characters, enemies, items, and objects in your game.

### The Game Loop

p5.play games follow this basic structure:

```javascript
function setup() {
  // Initialize your game
  createCanvas(800, 600);
  // Create sprites, set up game objects
}

function draw() {
  // Game loop - runs every frame
  background(220); // Clear the screen
  
  // Handle input
  handleInput();
  
  // Update game logic
  updateGame();
  
  // Draw everything
  drawSprites();
}
```

---

## Sprite Basics

### Creating Sprites

The most basic way to create a sprite:

```javascript
// Create a sprite at position (200, 200) with size 50x50
let player = createSprite(200, 200, 50, 50);

// Create a sprite with default size (50x50)
let enemy = createSprite(300, 300);

// Create a small sprite
let coin = createSprite(100, 100, 30, 30);
```

### Sprite Properties

Sprites have many properties you can modify:

```javascript
let player = createSprite(200, 200, 50, 50);

// Position
player.x = 250; // X coordinate
player.y = 300; // Y coordinate

// Size
player.width = 60;
player.height = 40;

// Visual properties
player.shapeColor = color(255, 0, 0); // Red color
player.visible = true; // Show/hide sprite
player.rotation = 45; // Rotate 45 degrees
player.scale = 2; // Make sprite twice as big

// Physics properties
player.velocityX = 5; // Move right at 5 pixels per frame
player.velocityY = -3; // Move up at 3 pixels per frame
player.friction = 0.8; // Add friction (0-1)
player.mass = 1; // How heavy the sprite is
```

### Sprite Methods

Common methods for working with sprites:

```javascript
let player = createSprite(200, 200, 50, 50);

// Movement methods
player.setVelocity(5, -2); // Set velocity directly
player.setPosition(300, 200); // Move to specific position
player.moveTo(400, 300); // Smooth movement to position

// Collision methods
if (player.isTouching(enemy)) {
  // Handle collision
}

// Visual methods
player.setImage("player.png"); // Set sprite image
player.changeAnimation("walk"); // Change animation

// Utility methods
player.addTag("player"); // Add a tag for identification
player.remove(); // Remove sprite from game
```

---

## Movement and Physics

### Basic Movement

There are several ways to move sprites:

```javascript
let player = createSprite(200, 200, 50, 50);

// Method 1: Set velocity directly
player.velocityX = 5; // Move right
player.velocityY = -3; // Move up

// Method 2: Use setVelocity method
player.setVelocity(5, -3);

// Method 3: Use setSpeed and setDirection
player.setSpeed(5); // Set speed to 5 pixels per frame
player.setDirection(45); // Point at 45 degrees (up-right)
```

### Physics Properties

Sprites have built-in physics:

```javascript
let player = createSprite(200, 200, 50, 50);

// Friction - slows down movement over time
player.friction = 0.8; // 0 = no friction, 1 = stops immediately

// Mass - affects collision response
player.mass = 2; // Heavier sprites push lighter ones

// Bounciness
player.restitution = 0.8; // How bouncy the sprite is (0-1)

// Maximum speed
player.maxSpeed = 10; // Limit how fast sprite can move
```

### Gravity and Jumping

To create gravity and jumping:

```javascript
let player = createSprite(200, 200, 50, 50);
let gravity = 0.5;

function draw() {
  background(220);
  
  // Apply gravity
  player.velocityY += gravity;
  
  // Jump when space is pressed
  if (keyWentDown('SPACE')) {
    player.velocityY = -10; // Jump up
  }
  
  // Keep player on ground
  if (player.y > 350) {
    player.y = 350;
    player.velocityY = 0;
  }
  
  drawSprites();
}
```

---

## Collision Detection

### Basic Collision

p5.play makes collision detection easy:

```javascript
let player = createSprite(200, 200, 50, 50);
let enemy = createSprite(300, 200, 50, 50);

function draw() {
  background(220);
  
  // Check if sprites are touching
  if (player.isTouching(enemy)) {
    console.log("Player hit enemy!");
    player.shapeColor = color(255, 0, 0); // Turn red
  }
  
  drawSprites();
}
```

### Collision Response

Different ways to handle collisions:

```javascript
let player = createSprite(200, 200, 50, 50);
let wall = createSprite(400, 200, 50, 200);

// Method 1: Bounce off
player.bounceOff(wall);

// Method 2: Push away
player.displace(wall);

// Method 3: Custom collision response
if (player.isTouching(wall)) {
  player.velocityX = -player.velocityX; // Reverse direction
}
```

### Collision Shapes

You can set different collision shapes:

```javascript
let player = createSprite(200, 200, 50, 50);

// Rectangle collision (default)
player.setCollider('rectangle');

// Circular collision
player.setCollider('circle', 25); // Radius of 25

// Point collision (just the center point)
player.setCollider('point');
```

### Screen Boundaries

Create invisible walls at screen edges:

```javascript
// Create edge sprites for screen boundaries
createEdgeSprites();

let player = createSprite(200, 200, 50, 50);

function draw() {
  background(220);
  
  // Make player bounce off screen edges
  player.bounceOff(edges);
  
  drawSprites();
}
```

---

## Animations
> **📚 For detailed animation workflow and troubleshooting, see [Sprite Animation Workflow](#sprite-animation-workflow) below.**

### Creating Animations

Animations are sequences of images that play over time:

```javascript
let player = createSprite(200, 200, 50, 50);

// Load animation from image files
let walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
let idleAnim = loadAnimation("idle1.png", "idle2.png");

// Add animations to sprite
player.addAnimation("walk", walkAnim);
player.addAnimation("idle", idleAnim);

// Change to walking animation
player.changeAnimation("walk");
```

### Animation Properties

Control how animations play:

```javascript
let walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");

// Set frame delay (higher = slower animation)
walkAnim.frameDelay = 5;

// Set whether animation loops
walkAnim.loop = true;

// Control animation playback
walkAnim.play(); // Start playing
walkAnim.pause(); // Pause
walkAnim.stop(); // Stop and reset to first frame
```

### Sprite Sheet Animations

For more efficient animations, use sprite sheets:

```javascript
// Load sprite sheet (single image with multiple frames)
let playerAnim = loadSpriteSheet("player_sheet.png", 32, 32, 4);

let player = createSprite(200, 200, 50, 50);
player.addAnimation("walk", playerAnim);
```

---

## Input Handling

### Keyboard Input

Handle keyboard input with these functions:

```javascript
let player = createSprite(200, 200, 50, 50);

function draw() {
  background(220);
  
  // Check if key is currently pressed
  if (keyDown('RIGHT_ARROW')) {
    player.velocityX = 5;
  }
  if (keyDown('LEFT_ARROW')) {
    player.velocityX = -5;
  }
  
  // Check if key was just pressed this frame
  if (keyWentDown('SPACE')) {
    player.velocityY = -10; // Jump
  }
  
  // Check if key was just released
  if (keyWentUp('SPACE')) {
    // Handle key release
  }
  
  drawSprites();
}
```

### Mouse Input

Handle mouse input:

```javascript
let button = createSprite(200, 200, 100, 50);
button.shapeColor = color(0, 255, 0);

function draw() {
  background(220);
  
  // Check if mouse is over sprite
  if (mouseIsOver(button)) {
    button.shapeColor = color(255, 255, 0); // Yellow
  } else {
    button.shapeColor = color(0, 255, 0); // Green
  }
  
  // Check if mouse was pressed over sprite
  if (mousePressedOver(button)) {
    console.log("Button clicked!");
  }
  
  // Check mouse button states
  if (mouseDown(LEFT)) {
    // Left mouse button is pressed
  }
  
  drawSprites();
}
```

### Supported Keys

p5.play supports many key names for better readability:

```javascript
// Arrow keys
keyDown('LEFT_ARROW') or keyDown('LEFT')
keyDown('RIGHT_ARROW') or keyDown('RIGHT')
keyDown('UP_ARROW') or keyDown('UP')
keyDown('DOWN_ARROW') or keyDown('DOWN')

// Letter keys
keyDown('A'), keyDown('B'), keyDown('C'), etc.

// Control keys
keyDown('SPACE'), keyDown('ENTER'), keyDown('SHIFT'), keyDown('CTRL')

// Number keys
keyDown('0'), keyDown('1'), keyDown('2'), etc.

// Function keys
keyDown('F1'), keyDown('F2'), etc.
```

---

## Groups

### What are Groups?

Groups are collections of sprites that you can manage together. Useful for:
- Enemies
- Collectibles
- Particles
- Any group of similar objects

### Creating and Using Groups

```javascript
// Create a group
let enemies = createGroup();

// Add sprites to group
for (let i = 0; i < 5; i++) {
  let enemy = createSprite(random(100, 300), random(100, 300), 30, 30);
  enemy.shapeColor = color(255, 0, 0);
  enemies.add(enemy);
}

// Apply operations to all sprites in group
enemies.setVelocityEach(2, 0); // Move all enemies right

// Check collision with group
if (player.isTouching(enemies)) {
  console.log("Player hit an enemy!");
}

// Remove all enemies
enemies.destroy();
```

### Group Methods

Common group operations:

```javascript
let collectibles = createGroup();

// Add sprites
collectibles.add(coin1);
collectibles.add(coin2);

// Remove sprites
collectibles.remove(coin1);

// Get group size
console.log(collectibles.size()); // Number of sprites

// Get sprite by index
let firstCoin = collectibles.get(0);

// Clear all sprites
collectibles.clear();

// Convert to array
let coinArray = collectibles.toArray();
```

---

## Camera System

### Basic Camera Usage

The camera allows you to scroll and zoom your game world:

```javascript
let player = createSprite(200, 200, 50, 50);

// Make camera follow player
camera.follow(player);

// Set camera position manually
camera.setPosition(100, 100);

// Zoom in/out
camera.setZoom(2); // 2x zoom
camera.setZoom(0.5); // Half size
```

### Camera Properties

```javascript
// Camera position
camera.position.x = 200;
camera.position.y = 200;

// Camera zoom
camera.zoom = 1.5; // 1.5x zoom

// Save and restore camera state
cameraPush(); // Save current camera state
camera.setPosition(300, 300); // Move camera
cameraPop(); // Restore previous state
```

---

## Drawing and Graphics

### Enhanced Shapes

p5.play adds some useful drawing functions:

```javascript
// Draw regular polygons
regularPolygon(200, 200, 3, 50); // Triangle
regularPolygon(300, 300, 6, 40, 30); // Rotated hexagon

// Create custom shapes
shape();
vertex(0, 0);
vertex(50, 0);
vertex(25, 50);
endShape();

// Create colors
let red = rgb(255, 0, 0);
let blue = rgb(0, 0, 255, 128); // Semi-transparent
```

### Drawing Order

Sprites are drawn in order based on their `depth` property:

```javascript
let background = createSprite(200, 200, 400, 400);
background.depth = 0; // Draw first (in background)

let player = createSprite(200, 200, 50, 50);
player.depth = 1; // Draw second

let foreground = createSprite(200, 200, 400, 400);
foreground.depth = 2; // Draw last (in foreground)
```

---

## Sound

### Playing Audio

p5.play includes simple sound functions:

```javascript
// Play sound once
playSound("jump.mp3");

// Play music with looping
playSound("background_music.mp3", true);

// Stop sound
stopSound("background_music.mp3");
```

### Sound Tips

- Use short sound effects for actions (jump, collect, hit)
- Use longer music files for background music
- Common formats: .mp3, .wav, .ogg
- Keep file sizes small for web games

---

## Advanced Features

### Tags and Organization

Use tags to organize sprites:

```javascript
let player = createSprite(200, 200, 50, 50);
player.addTag("player");

let enemy1 = createSprite(300, 200, 30, 30);
enemy1.addTag("enemy");
enemy1.addTag("hostile");

let enemy2 = createSprite(400, 200, 30, 30);
enemy2.addTag("enemy");
enemy2.addTag("hostile");

// Get all sprites with specific tags
let allEnemies = getSprites("enemy");
let hostileEnemies = getSprites("enemy", "hostile");
```

### Debug Mode

Enable debug mode to see collision boxes and other helpful information:

```javascript
let player = createSprite(200, 200, 50, 50);
player.debug = true; // Show collision box and other debug info
```

### Performance Optimization

For games with many sprites:

```javascript
// Enable quad tree collision detection for better performance
useQuadTree(true);

// Disable automatic sprite updates if needed
updateSprites(false);
// Then call updateSprites() manually when needed
```

### Sprite Cloning

Create copies of sprites:

```javascript
let original = createSprite(200, 200, 50, 50);
original.shapeColor = color(255, 0, 0);

// Create a copy
let copy = original.clone();
copy.x = 300; // Move copy to different position
```

---

## Examples and Tutorials

### Simple Platformer

```javascript
let player;
let platforms;
let gravity = 0.5;

function setup() {
  createCanvas(800, 600);
  
  // Create player
  player = createSprite(100, 300, 30, 30);
  player.shapeColor = color(0, 255, 0);
  
  // Create platforms group
  platforms = createGroup();
  
  // Add some platforms
  for (let i = 0; i < 5; i++) {
    let platform = createSprite(200 + i * 100, 400 + random(-50, 50), 80, 20);
    platform.shapeColor = color(100, 100, 100);
    platforms.add(platform);
  }
}

function draw() {
  background(135, 206, 235); // Sky blue
  
  // Apply gravity
  player.velocityY += gravity;
  
  // Handle input
  if (keyDown('LEFT_ARROW')) {
    player.velocityX = -5;
  } else if (keyDown('RIGHT_ARROW')) {
    player.velocityX = 5;
  } else {
    player.velocityX = 0;
  }
  
  // Jump
  if (keyWentDown('SPACE') && player.isTouching(platforms)) {
    player.velocityY = -12;
  }
  
  // Check platform collisions
  player.bounceOff(platforms);
  
  drawSprites();
}
```

### Collectible Game

```javascript
let player;
let collectibles;
let score = 0;

function setup() {
  createCanvas(800, 600);
  
  // Create player
  player = createSprite(400, 300, 40, 40);
  player.shapeColor = color(0, 255, 0);
  
  // Create collectibles group
  collectibles = createGroup();
  
  // Add collectibles
  for (let i = 0; i < 10; i++) {
    let coin = createSprite(random(50, 750), random(50, 550), 20, 20);
    coin.shapeColor = color(255, 255, 0);
    coin.addTag("coin");
    collectibles.add(coin);
  }
}

function draw() {
  background(220);
  
  // Handle player movement
  if (keyDown('LEFT_ARROW')) {
    player.velocityX = -4;
  } else if (keyDown('RIGHT_ARROW')) {
    player.velocityX = 4;
  } else {
    player.velocityX = 0;
  }
  
  if (keyDown('UP_ARROW')) {
    player.velocityY = -4;
  } else if (keyDown('DOWN_ARROW')) {
    player.velocityY = 4;
  } else {
    player.velocityY = 0;
  }
  
  // Check coin collection
  if (player.isTouching(collectibles)) {
    score += 10;
    console.log("Score: " + score);
  }
  
  // Display score
  fill(0);
  textSize(24);
  text("Score: " + score, 20, 30);
  
  drawSprites();
}
```

### Top-Down Shooter

```javascript
let player;
let enemies;
let bullets;
let score = 0;

function setup() {
  createCanvas(800, 600);
  
  // Create player
  player = createSprite(400, 300, 30, 30);
  player.shapeColor = color(0, 255, 0);
  
  // Create groups
  enemies = createGroup();
  bullets = createGroup();
  
  // Add enemies
  for (let i = 0; i < 5; i++) {
    let enemy = createSprite(random(50, 750), random(50, 550), 25, 25);
    enemy.shapeColor = color(255, 0, 0);
    enemy.addTag("enemy");
    enemies.add(enemy);
  }
}

function draw() {
  background(0);
  
  // Handle player movement
  if (keyDown('LEFT_ARROW')) {
    player.velocityX = -5;
  } else if (keyDown('RIGHT_ARROW')) {
    player.velocityX = 5;
  } else {
    player.velocityX = 0;
  }
  
  if (keyDown('UP_ARROW')) {
    player.velocityY = -5;
  } else if (keyDown('DOWN_ARROW')) {
    player.velocityY = 5;
  } else {
    player.velocityY = 0;
  }
  
  // Shooting
  if (keyWentDown('SPACE')) {

---

## Sprite Animation Workflow

### Animation Workflow

**Important**: The animation system has changed! Previously, students used `setAnimation(label)` to set animations. Now you must manually load images and add animations to sprites.

### Step-by-Step Animation Process

#### Step 1: Load Animation Assets
First, load your animation images in the `preload()` function:

```javascript
let walkAnim, idleAnim, jumpAnim;

function preload() {
  // Method 1: Load individual image files
  walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
  idleAnim = loadAnimation("idle1.png", "idle2.png");
  
  // Method 2: Load sprite sheet
  jumpAnim = loadSpriteSheet("jump_sheet.png", 32, 32, 4);
}
```

#### Step 2: Add Animations to Sprite
Add the loaded animations to your sprite:

```javascript
function setup() {
  createCanvas(400, 400);
  
  player = createSprite(200, 200, 50, 50);
  
  // Add animations to sprite
  player.addAnimation("walk", walkAnim);
  player.addAnimation("idle", idleAnim);
  player.addAnimation("jump", jumpAnim);
}
```

#### Step 3: Change Animations
Use `changeAnimation()` to switch between animations:

```javascript
function draw() {
  background(220);
  
  // Change animation based on player state
  if (keyDown("RIGHT_ARROW") || keyDown("LEFT_ARROW")) {
    player.changeAnimation("walk");
  } else if (keyDown("SPACE")) {
    player.changeAnimation("jump");
  } else {
    player.changeAnimation("idle");
  }
  
  drawSprites();
}
```

### Animation Loading Methods

#### Method 1: Individual Image Files
Load separate image files for each frame:

```javascript
function preload() {
  // Load walking animation from separate files
  let walkAnim = loadAnimation(
    "walk1.png", 
    "walk2.png", 
    "walk3.png", 
    "walk4.png"
  );
  
  // Load idle animation
  let idleAnim = loadAnimation("idle1.png", "idle2.png");
}
```

#### Method 2: Sprite Sheet
Load a single image containing multiple frames:

```javascript
function preload() {
  // Load sprite sheet: image, frameWidth, frameHeight, numFrames
  let playerAnim = loadSpriteSheet("player_sheet.png", 32, 32, 8);
  let explosionAnim = loadSpriteSheet("explosion.png", 64, 64, 6);
}
```

### Animation Properties

Control how animations play:

```javascript
function preload() {
  walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
  
  // Set animation properties
  walkAnim.frameDelay = 5; // Slower animation (higher = slower)
  walkAnim.loop = true; // Animation loops (default: true)
}

function setup() {
  player = createSprite(200, 200, 50, 50);
  player.addAnimation("walk", walkAnim);
  
  // Control animation playback
  player.animation.play(); // Start playing
  player.animation.pause(); // Pause animation
  player.animation.stop(); // Stop and reset to first frame
}
```

### Complete Animation Example

```javascript
let player, walkAnim, idleAnim, jumpAnim;

function preload() {
  // Load all animations
  walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
  idleAnim = loadAnimation("idle1.png", "idle2.png");
  jumpAnim = loadSpriteSheet("jump_sheet.png", 32, 32, 4);
}

function setup() {
  createCanvas(400, 400);
  
  // Create player sprite
  player = createSprite(200, 200, 50, 50);
  
  // Add all animations
  player.addAnimation("walk", walkAnim);
  player.addAnimation("idle", idleAnim);
  player.addAnimation("jump", jumpAnim);
  
  // Start with idle animation
  player.changeAnimation("idle");
}

function draw() {
  background(220);
  
  // Handle movement and animation
  if (keyDown("RIGHT_ARROW")) {
    player.velocityX = 3;
    player.changeAnimation("walk");
  } else if (keyDown("LEFT_ARROW")) {
    player.velocityX = -3;
    player.changeAnimation("walk");
  } else if (keyDown("SPACE")) {
    player.velocityY = -5;
    player.changeAnimation("jump");
  } else {
    player.velocityX = 0;
    player.changeAnimation("idle");
  }
  
  drawSprites();
}
```

### Animation Tips

1. **Always load in `preload()`**: This ensures images are loaded before the game starts
2. **Use meaningful names**: Name your animations clearly (`"walk"`, `"idle"`, `"jump"`)
3. **Check file paths**: Make sure your image files are in the correct folder
4. **Optimize with sprite sheets**: Use sprite sheets for better performance
5. **Set appropriate frame delays**: Higher values = slower animations

### Common Animation Patterns

```javascript
// Pattern 1: Movement-based animations
if (player.velocityX !== 0) {
  player.changeAnimation("walk");
} else {
  player.changeAnimation("idle");
}

// Pattern 2: State-based animations
if (player.isTouching(ground)) {
  player.changeAnimation("idle");
} else {
  player.changeAnimation("jump");
}

// Pattern 3: Event-based animations
if (keyWentDown("SPACE")) {
  player.changeAnimation("jump");
}
```

### Troubleshooting Animations

**Animation not playing?**
- Check that images are loaded in `preload()`
- Verify file paths are correct
- Make sure you called `addAnimation()` before `changeAnimation()`

**Animation too fast/slow?**
- Adjust `frameDelay` property (higher = slower)
- Check your animation's `frameDelay` value

**Animation not changing?**
- Ensure you're calling `changeAnimation()` with the correct label
- Verify the animation was added with `addAnimation()`

---
    let bullet = createSprite(player.x, player.y, 10, 10);
    bullet.shapeColor = color(255, 255, 0);
    bullet.addTag("bullet");
    bullets.add(bullet);
    
    // Point bullet toward mouse
    let angle = atan2(mouseY - player.y, mouseX - player.x);
    bullet.setSpeed(10);
    bullet.setDirection(degrees(angle));
  }
  
  // Check bullet-enemy collisions
  bullets.overlap(enemies, function(bullet, enemy) {
    bullet.remove();
    enemy.remove();
    score += 100;
  });
  
  // Display score
  fill(255);
  textSize(24);
  text("Score: " + score, 20, 30);
  
  drawSprites();
}
```

---

## Best Practices

### Organization

1. **Use meaningful variable names**: `player`, `enemies`, `collectibles`
2. **Group related sprites**: Use groups for enemies, items, etc.
3. **Use tags for identification**: `player.addTag("player")`
4. **Comment your code**: Explain what each section does

### Performance

1. **Remove unused sprites**: Call `remove()` when sprites are no longer needed
2. **Use quad tree collision**: `useQuadTree(true)` for many sprites
3. **Limit sprite count**: Too many sprites can slow down your game
4. **Optimize images**: Use smaller image files for better loading

### Game Design

1. **Start simple**: Build basic functionality first, then add features
2. **Test frequently**: Make sure each feature works before adding more
3. **Balance your game**: Make it challenging but fair
4. **Add feedback**: Visual and audio feedback for player actions

### Common Mistakes

1. **Forgetting `drawSprites()`**: Always call this in your `draw()` function
2. **Not handling collisions**: Check for collisions in your game loop
3. **Ignoring physics**: Remember gravity, friction, and bouncing
4. **Poor organization**: Use groups and tags to keep code organized

---

## Troubleshooting

### Common Issues

**Sprites not appearing?**
- Make sure you call `drawSprites()` in your `draw()` function
- Check that sprites are within the canvas bounds
- Verify sprite images are loaded correctly

**Collisions not working?**
- Make sure sprites have collision shapes set
- Check that you're calling collision detection methods
- Verify sprite positions and sizes

**Animations not playing?**
- Ensure animation files are loaded in `preload()`
- Check that you're calling `changeAnimation()` correctly
- Verify animation properties like `frameDelay`

**Performance problems?**
- Reduce the number of sprites
- Enable quad tree collision detection
- Optimize image sizes
- Remove unused sprites

### Getting Help

- Check the p5.play documentation
- Look at example code
- Test small pieces of code separately
- Use `console.log()` to debug your code

---

## Conclusion

p5.play is a powerful library that makes game development accessible and fun. Start with simple projects and gradually add more complex features. Remember to experiment, test frequently, and most importantly, have fun creating games!

Happy coding! 🎮 