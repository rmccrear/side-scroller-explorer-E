/**
 * p5.play.d.ts - TypeScript definitions for p5.play library
 * 
 * p5.play is a library for p5.js that facilitates the creation of games and gamelike projects.
 * It provides a flexible Sprite class to manage visual objects in 2D space with features such as:
 * - Animation support with frame-based animations and sprite sheets
 * - Basic collision detection and resolution with physics properties
 * - Mouse and keyboard interactions with intuitive input handling
 * - Virtual camera system for scrolling and zooming
 * - Sprite grouping and management for organizing game objects
 * - Debug tools for development and testing
 * 
 * This file provides TypeScript type definitions for better development experience,
 * including autocomplete, type checking, and IntelliSense support.
 * 
 * @author Paolo Pedercini/molleindustria, 2015
 * @see http://molleindustria.org/
 * @see https://github.com/molleindustria/p5.play
 * 
 * @example
 * // Basic sprite creation and movement
 * let player = createSprite(200, 200, 50, 50);
 * player.velocityX = 5;
 * 
 * // Animation setup
 * player.addAnimation("walk", "walk1.png", "walk2.png", "walk3.png");
 * player.changeAnimation("walk");
 * 
 * // Collision detection
 * if (player.isTouching(enemy)) {
 *   player.bounceOff(enemy);
 * }
 */

/**
 * Type alias for supported key strings in p5.play
 * These string aliases can be used instead of key codes for better readability
 * 
 * @example
 * // Instead of keyWentDown(32), you can use:
 * keyWentDown('SPACE')
 * keyWentDown('LEFT_ARROW')
 * keyWentDown('A')
 */
type P5PlayKey = 
  // Control keys
  | 'BACKSPACE' | 'TAB' | 'ENTER' | 'SHIFT' | 'CTRL' | 'ALT' | 'PAUSE' | 'CAPS_LOCK' | 'ESC' | 'SPACE' | ' ' 
  // Navigation keys
  | 'PAGE_UP' | 'PAGE_DOWN' | 'END' | 'HOME' 
  // Arrow keys (with aliases)
  | 'LEFT_ARROW' | 'LEFT' | 'UP_ARROW' | 'UP' | 'RIGHT_ARROW' | 'RIGHT' | 'DOWN_ARROW' | 'DOWN' 
  // Edit keys
  | 'INSERT' | 'DELETE' 
  // Number keys
  | '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' 
  // Letter keys
  | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z' 
  // Numpad keys
  | '0NUMPAD' | '1NUMPAD' | '2NUMPAD' | '3NUMPAD' | '4NUMPAD' | '5NUMPAD' | '6NUMPAD' | '7NUMPAD' | '8NUMPAD' | '9NUMPAD' 
  // Numpad operators
  | 'MULTIPLY' | 'PLUS' | 'MINUS' | 'DOT' | 'SLASH1' 
  // Function keys
  | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' 
  // Punctuation keys
  | 'EQUAL' | 'COMMA' | 'SLASH' | 'BACKSLASH';

declare namespace p5 {
  /**
   * Extends the p5.js prototype with p5.play methods
   * These methods are available on any p5 instance
   */
  interface p5 {
    /**
     * Core sprite creation and management methods
     */
    
    /**
     * Creates a new sprite at the specified position and size
     * @param x - X coordinate of the sprite's center
     * @param y - Y coordinate of the sprite's center  
     * @param width - Width of the sprite (optional, defaults to 50)
     * @param height - Height of the sprite (optional, defaults to 50)
     * @returns A new Sprite object
     * @example
     * let player = createSprite(200, 200, 50, 50);
     * let enemy = createSprite(300, 300); // Uses default size
     */
    createSprite(x: number, y: number, width?: number, height?: number): Sprite;
    
    /**
     * Removes a sprite from the game and frees its memory
     * @param sprite - The sprite to remove
     */
    removeSprite(sprite: Sprite): void;
    
    /**
     * Updates all sprites' positions, animations, and collisions
     * @param updating - Whether to enable/disable automatic updates (optional)
     */
    updateSprites(updating?: boolean): void;
    
    /**
     * Gets all sprites with the specified tags
     * @param tags - One or more tag strings to filter by
     * @returns Array of sprites matching the tags
     * @example
     * let enemies = getSprites("enemy", "hostile");
     * let collectibles = getSprites("coin", "gem");
     */
    getSprites(...tags: string[]): Sprite[];
    
    /**
     * Draws all sprites to the canvas
     * @param group - Optional group to draw (if not specified, draws all sprites)
     */
    drawSprites(group?: Group): void;
    
    /**
     * Global group containing all sprites in the game
     * Useful for applying operations to all sprites at once
     */
    allSprites: Group;
    
    /**
     * Camera system for viewport management
     */
    
    /**
     * The game's camera object for scrolling and zooming
     */
    camera: Camera;
    
    /**
     * Saves the current camera state (position and zoom)
     * Can be restored with cameraPop()
     */
    cameraPush(): void;
    
    /**
     * Restores the previously saved camera state
     * Must be called after cameraPush()
     */
    cameraPop(): void;
    
    /**
     * Key input methods for handling keyboard events
     */
    
    /**
     * Returns true if the specified key was just pressed this frame
     * @param key - Key code or string alias (e.g., 'SPACE', 'A', 32)
     * @returns True if key was pressed this frame
     * @example
     * if (keyWentDown('SPACE')) {
     *   player.jump();
     * }
     */
    keyWentDown(key: number | P5PlayKey): boolean;
    
    /**
     * Returns true if the specified key was just released this frame
     * @param key - Key code or string alias
     * @returns True if key was released this frame
     */
    keyWentUp(key: number | P5PlayKey): boolean;
    
    /**
     * Returns true if the specified key is currently being held down
     * @param key - Key code or string alias
     * @returns True if key is currently pressed
     * @example
     * if (keyDown('RIGHT_ARROW')) {
     *   player.velocityX = 5;
     * }
     */
    keyDown(key: number | P5PlayKey): boolean;
    
    /**
     * Mouse input methods for handling mouse events
     */
    
    /**
     * Returns true if the specified mouse button is currently pressed
     * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
     * @returns True if mouse button is currently pressed
     * @example
     * if (mouseDown(LEFT)) {
     *   player.attack();
     * }
     */
    mouseDown(buttonCode: number): boolean;
    
    /**
     * Returns true if the specified mouse button was just pressed this frame
     * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
     * @returns True if mouse button was pressed this frame
     * @example
     * if (mouseWentDown(LEFT)) {
     *   player.jump();
     * }
     */
    mouseWentDown(buttonCode: number): boolean;
    
    /**
     * Returns true if the specified mouse button was just released this frame
     * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
     * @returns True if mouse button was released this frame
     * @example
     * if (mouseWentUp(LEFT)) {
     *   player.stopJump();
     * }
     */
    mouseWentUp(buttonCode: number): boolean;
    
    /**
     * Returns true if the specified mouse button is currently not pressed
     * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
     * @returns True if mouse button is not pressed
     * @example
     * if (mouseUp(LEFT)) {
     *   player.idle();
     * }
     */
    mouseUp(buttonCode: number): boolean;
    
    /**
     * Returns true if the mouse cursor is over the specified sprite
     * @param sprite - Sprite to check mouse position against
     * @returns True if mouse is over the sprite
     * @example
     * if (mouseIsOver(player)) {
     *   player.highlight();
     * }
     */
    mouseIsOver(sprite: Sprite): boolean;
    
    /**
     * Returns true if the mouse was pressed while over the specified sprite
     * @param sprite - Sprite to check mouse interaction with
     * @returns True if mouse was pressed over the sprite
     * @example
     * if (mousePressedOver(button)) {
     *   button.click();
     * }
     */
    mousePressedOver(sprite: Sprite): boolean;
    
    /**
     * Returns true if the mouse has moved since the last frame
     * @returns True if mouse moved
     * @example
     * if (mouseDidMove()) {
     *   updateCursor();
     * }
     */
    mouseDidMove(): boolean;
    
    /**
     * Drawing methods for enhanced shapes and graphics
     */
    
    /**
     * Draws a regular polygon with the specified number of sides
     * @param x - X coordinate of the polygon center
     * @param y - Y coordinate of the polygon center
     * @param sides - Number of sides (3 = triangle, 4 = square, etc.)
     * @param size - Size of the polygon (radius from center to vertices)
     * @param rotation - Rotation angle in degrees (optional)
     * @example
     * // Draw a triangle
     * regularPolygon(200, 200, 3, 50);
     * 
     * // Draw a rotated hexagon
     * regularPolygon(300, 300, 6, 40, 30);
     */
    regularPolygon(x: number, y: number, sides: number, size: number, rotation?: number): void;
    
    /**
     * Begins a custom shape definition
     * Use with vertex() to define custom shapes
     * @example
     * shape();
     * vertex(0, 0);
     * vertex(50, 0);
     * vertex(25, 50);
     * endShape();
     */
    shape(): void;
    
    /**
     * Creates a color using RGB values
     * @param r - Red component (0-255)
     * @param g - Green component (0-255)
     * @param b - Blue component (0-255)
     * @param a - Alpha component (0-255, optional)
     * @returns Color object
     * @example
     * let red = rgb(255, 0, 0);
     * let blue = rgb(0, 0, 255, 128); // Semi-transparent blue
     */
    rgb(r: number, g: number, b: number, a?: number): any;
    
    /**
     * Utility methods for advanced functionality
     */
    
    /**
     * Enables or disables quad tree collision detection for better performance
     * @param use - Whether to use quad tree collision detection
     * @example
     * useQuadTree(true); // Enable for better performance with many sprites
     * useQuadTree(false); // Disable for simpler collision detection
     */
    useQuadTree(use: boolean): void;
    
    /**
     * Reads and processes all key presses from the input buffer
     * Called automatically each frame, but can be called manually
     * @example
     * readPresses(); // Process all pending key events
     */
    readPresses(): void;
  }
}

/**
 * Sprite class - The main object for creating game entities
 * 
 * Sprites are the building blocks of p5.play games. Each sprite represents
 * a visual object that can move, animate, collide, and interact with other sprites.
 * 
 * @example
 * // Create a player sprite
 * let player = createSprite(200, 200, 50, 50);
 * player.addAnimation("idle", "player_idle.png");
 * player.addAnimation("walk", "player_walk1.png", "player_walk2.png");
 * 
 * // Set up movement
 * player.velocityX = 0;
 * player.friction = 0.8;
 * 
 * // Handle input
 * if (keyDown('RIGHT_ARROW')) {
 *   player.velocityX = 5;
 *   player.changeAnimation("walk");
 * } else {
 *   player.changeAnimation("idle");
 * }
 */
declare class Sprite {
  constructor(pInst: p5, x: number, y: number, width: number, height: number);
  
  /**
   * Position properties - Control where the sprite is located
   */
  
  /** Current position as a p5.Vector (read-only) */
  position: p5.Vector;
  
  /** Previous frame's position (useful for collision detection) */
  previousPosition: p5.Vector;
  
  /** Target position for smooth movement */
  newPosition: p5.Vector;
  
  /** Change in X position this frame */
  deltaX: number;
  
  /** Change in Y position this frame */
  deltaY: number;
  
  /** 
   * X coordinate of sprite center (shortcut for position.x)
   * @example
   * fly.x = 400; // Move fly to right edge
   * if (frog.x > 400) { frog.x = 0; } // Wrap around screen
   */
  x: number;
  
  /** 
   * Y coordinate of sprite center (shortcut for position.y)
   * @example
   * frog.y = 320; // Set frog to ground level
   * if (frog.y <= 100) { frog.velocityY = 4; } // Start falling
   */
  y: number;
  
  /**
   * Movement properties - Control how the sprite moves
   */
  
  /** Current velocity as a p5.Vector */
  velocity: p5.Vector;
  
  /** Horizontal velocity (shortcut for velocity.x) */
  velocityX: number;
  
  /** Vertical velocity (shortcut for velocity.y) */
  velocityY: number;
  
  /** Maximum speed the sprite can travel */
  maxSpeed: number;
  
  /** Friction applied to movement (0-1, higher = more friction) */
  friction: number;
  
  /**
   * Collision properties - Control how the sprite interacts with others
   */
  
  /** Collision detection shape and settings */
  collider: any;
  
  /** Which sides of the sprite are touching something */
  touching: {
    left: boolean;
    right: boolean;
    top: boolean;
    bottom: boolean;
  };
  
  /** Mass affects collision response (heavier sprites push lighter ones) */
  mass: number;
  
  /** If true, sprite won't move when collided with */
  immovable: boolean;
  
  /** Bounciness factor (0-1, higher = more bouncy) */
  restitution: number;
  
  /**
   * Visual properties - Control how the sprite looks
   */
  
  /** Width of the sprite in pixels */
  width: number;
  
  /** Height of the sprite in pixels */
  height: number;
  
  /** Drawing order (higher depth = drawn on top) */
  depth: number;
  
  /** Whether the sprite is visible */
  visible: boolean;
  
  /** Rotation angle in degrees */
  rotation: number;
  
  /** Speed of rotation in degrees per frame */
  rotationSpeed: number;
  
  /** If true, sprite rotates to face movement direction */
  rotateToDirection: boolean;
  
  /** Scale factor (1 = normal size, 2 = double size, 0.5 = half size) */
  scale: number;
  
  /** Flip sprite horizontally */
  mirrorX: boolean;
  
  /** Flip sprite vertically */
  mirrorY: boolean;
  
  /** Color of the sprite's shape (when no image is set) */
  shapeColor: any;
  
  /**
   * Animation properties - Control sprite animations
   */
  
  /** Current animation object */
  animation: Animation;
  
  /** Current frame number in the animation */
  frame: number;
  
  /** Delay between frames (higher = slower animation) */
  frameDelay: number;
  
  /**
   * Debug properties - Help with development
   */
  
  /** If true, shows collision box and other debug info */
  debug: boolean;
  
  /**
   * Core methods - Essential sprite functionality
   */
  
  /**
   * Updates the sprite's position, animation, and collision detection
   * Called automatically each frame
   */
  update(): void;
  
  /**
   * Removes the sprite from the game
   * Same as removeSprite(this)
   */
  remove(): void;
  
  /**
   * Animation methods - Control sprite animations
   */
  
  /**
   * Adds an animation with a label for easy switching
   * @param label - Name to reference this animation
   * @param animation - Animation object to add
   * @example
   * // Load animations first
   * let flyAnimation = loadSpriteSheet("sprites/fly.png", 64, 45, 2);
   * let frogAnimation = loadAnimation("sprites/frog.png");
   * 
   * // Add animations to sprites
   * let walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
   * player.addAnimation("walk", walkAnim);
   * fly.addAnimation('fly', flyAnimation);
   * frog.addAnimation('frog', frogAnimation);
   */
  addAnimation(label: string, animation: Animation): void;
  
  /**
   * Adds an animation from image files
   * @param label - Name to reference this animation
   * @param frameImages - Image files or p5.Image objects for each frame
   * @example
   * player.addAnimation("walk", "walk1.png", "walk2.png", "walk3.png");
   */
  addAnimation(label: string, ...frameImages: (p5.Image | string)[]): void;
  
  /**
   * Switches to a different animation
   * @param label - Name of the animation to switch to
   * @example
   * player.changeAnimation("walk");
   */
  changeAnimation(label: string): void;
  
  /**
   * Sets the current animation by label
   * @param label - Name of the animation to set
   */
  setAnimation(label: string): void;
  
  /**
   * Sets the current animation directly
   * @param animation - Animation object to set
   */
  setAnimation(animation: Animation): void;
  
  /**
   * Sets the current frame in the animation
   * @param frame - Frame number (0-based)
   */
  setFrame(frame: number): void;
  
  /**
   * Movement methods - Control sprite movement
   */
  
  /**
   * Sets the sprite's velocity
   * @param x - Horizontal velocity (positive = right, negative = left)
   * @param y - Vertical velocity (positive = down, negative = up)
   * @example
   * // Set horizontal movement
   * player.setVelocity(5, -10); // Move right and up
   * food.velocityX = -1; // Move left only
   * enemy.velocityX = -5; // Move left faster
   * 
   * // Set vertical movement
   * player.velocityY = -4; // Jump up
   * player.velocityY = 4; // Fall down
   */
  setVelocity(x: number, y: number): void;
  
  /**
   * Sets the sprite's speed while maintaining direction
   * @param speed - Speed in pixels per frame
   */
  setSpeed(speed: number): void;
  
  /**
   * Sets the sprite's direction while maintaining speed
   * @param direction - Direction in degrees (0 = right, 90 = down, 180 = left, 270 = up)
   */
  setDirection(direction: number): void;
  
  /**
   * Sets the sprite's position
   * @param x - X coordinate
   * @param y - Y coordinate
   */
  setPosition(x: number, y: number): void;
  
  /**
   * Moves sprite to a target position over time
   * @param x - Target X coordinate
   * @param y - Target Y coordinate
   */
  moveTo(x: number, y: number): void;
  
  /**
   * Rotates sprite to point toward a position
   * @param x - Target X coordinate
   * @param y - Target Y coordinate
   */
  pointTo(x: number, y: number): void;
  
  /**
   * Gets the sprite's current direction in degrees
   * @returns Direction angle (0 = right, 90 = down, etc.)
   */
  getDirection(): number;
  
  /**
   * Gets the sprite's current speed
   * @returns Speed in pixels per frame
   */
  getSpeed(): number;
  
  /**
   * Collision methods - Handle sprite interactions
   */
  
  /**
   * Sets the collision detection shape
   * @param type - Collision type ('rectangle', 'circle', 'point', etc.)
   * @param args - Additional parameters for the collision shape
   * @example
   * player.setCollider('circle', 25); // Circular collision with radius 25
   */
  setCollider(type: string, ...args: any[]): void;
  
  /**
   * Checks if sprite is colliding with another sprite or group
   * @param target - Sprite or group to check collision with
   * @param callback - Optional function to call when collision occurs
   * @returns True if collision detected
   * @example
   * if (player.collide(enemy)) {
   *   player.health -= 10;
   * }
   */
  collide(target: Sprite | Group, callback?: Function): boolean;
  
  /**
   * Checks if sprite overlaps with another sprite or group
   * @param target - Sprite or group to check overlap with
   * @param callback - Optional function to call when overlap occurs
   * @returns True if overlap detected
   */
  overlap(target: Sprite | Group, callback?: Function): boolean;
  
  /**
   * Makes sprite bounce off another sprite or group
   * @param target - Sprite or group to bounce off
   * @example
   * player.bounce(wall);
   */
  bounce(target: Sprite | Group): void;
  
  /**
   * Makes sprite bounce off another sprite or group (reverse direction)
   * @param target - Sprite or group to bounce off
   */
  bounceOff(target: Sprite | Group): void;
  
  /**
   * Pushes sprite away from another sprite or group
   * @param target - Sprite or group to displace from
   */
  displace(target: Sprite | Group): void;
  
  /**
   * Checks if sprite is touching another sprite or group
   * @param target - Sprite or group to check
   * @returns True if touching
   * @example
   * // Check collision between game objects
   * if (frog.isTouching(fly)) {
   *   score = score + 10; // Add points
   *   fly.x = 400; // Reset fly position
   * }
   * 
   * // Check collision with groups
   * if (player.isTouching(enemies)) {
   *   player.health -= 10;
   * }
   */
  isTouching(target: Sprite | Group): boolean;
  
  /**
   * Visual methods - Control sprite appearance
   */
  
  /**
   * Sets the sprite's image
   * @param image - Image file path or p5.Image object
   */
  setImage(image: p5.Image | string): void;
  
  /**
   * Changes the current animation
   * @param animation - Animation object to switch to
   */
  changeAnimation(animation: Animation): void;
  
  /**
   * Control methods - Pause and resume sprite behavior
   */
  
  /**
   * Pauses the sprite's animation
   */
  pause(): void;
  
  /**
   * Resumes the sprite's animation
   */
  play(): void;
  
  /**
   * Tagging methods - Organize sprites with labels
   */
  
  /**
   * Adds a tag to the sprite for easy identification
   * @param tag - Tag name to add
   * @example
   * player.addTag("player");
   * enemy.addTag("enemy");
   * enemy.addTag("hostile");
   */
  addTag(tag: string): void;
  
  /**
   * Removes a tag from the sprite
   * @param tag - Tag name to remove
   */
  removeTag(tag: string): void;
  
  /**
   * Checks if sprite has a specific tag
   * @param tag - Tag name to check
   * @returns True if sprite has the tag
   */
  hasTag(tag: string): boolean;
  
  /**
   * Checks if sprite has a specific tag (alias for hasTag)
   * @param tag - Tag name to check
   * @returns True if sprite has the tag
   */
  isTagged(tag: string): boolean;
  
  /**
   * Mouse interaction methods - Handle mouse input
   */
  
  /**
   * Checks if mouse is over the sprite
   * @returns True if mouse is over sprite
   */
  mouseIsOver(): boolean;
  
  /**
   * Checks if mouse is pressed while over the sprite
   * @returns True if mouse is pressed over sprite
   */
  mouseIsPressed(): boolean;
  
  /**
   * Checks if mouse was released while over the sprite
   * @returns True if mouse was released over sprite
   */
  mouseIsReleased(): boolean;
  
  /**
   * Utility methods - Advanced sprite operations
   */
  
  /**
   * Creates a copy of the sprite
   * @returns New sprite with same properties
   */
  clone(): Sprite;
  
  /**
   * Completely removes the sprite from the game
   * Same as remove() but more explicit
   */
  destroy(): void;
}

/**
 * Group class - Manages collections of sprites
 * 
 * Groups allow you to organize sprites and apply operations to multiple sprites at once.
 * Useful for enemies, collectibles, particles, etc.
 * 
 * @example
 * // Create a group for enemies
 * let enemies = createGroup();
 * 
 * // Add enemies to the group
 * for (let i = 0; i < 5; i++) {
 *   let enemy = createSprite(random(100, 300), random(100, 300));
 *   enemies.add(enemy);
 * }
 * 
 * // Apply operations to all enemies
 * enemies.setVelocityEach(2, 0); // Move all enemies right
 * enemies.bounce(player); // All enemies bounce off player
 */
declare class Group {
  constructor();
  
  /**
   * Properties
   */
  
  /** Number of sprites in the group */
  length: number;
  
  /**
   * Core methods - Manage sprites in the group
   */
  
  /**
   * Adds a sprite to the group
   * @param sprite - Sprite to add
   */
  add(sprite: Sprite): void;
  
  /**
   * Removes a sprite from the group
   * @param sprite - Sprite to remove
   */
  remove(sprite: Sprite): void;
  
  /**
   * Removes all sprites from the group
   */
  clear(): void;
  
  /**
   * Gets a sprite by index
   * @param index - Position in the group (0-based)
   * @returns Sprite at the specified index
   */
  get(index: number): Sprite;
  
  /**
   * Gets the number of sprites in the group
   * @returns Number of sprites
   */
  size(): number;
  
  /**
   * Gets the highest depth value among all sprites in the group
   * @returns Maximum depth value
   */
  maxDepth(): number;
  
  /**
   * Converts the group to an array of sprites
   * @returns Array containing all sprites in the group
   */
  toArray(): Sprite[];
  
  /**
   * Collision methods - Handle group interactions
   */
  
  /**
   * Checks if any sprite in the group collides with a target
   * @param target - Sprite or group to check collision with
   * @param callback - Optional function to call when collision occurs
   * @returns True if any collision detected
   */
  collide(target: Sprite | Group, callback?: Function): boolean;
  
  /**
   * Checks if any sprite in the group overlaps with a target
   * @param target - Sprite or group to check overlap with
   * @param callback - Optional function to call when overlap occurs
   * @returns True if any overlap detected
   */
  overlap(target: Sprite | Group, callback?: Function): boolean;
  
  /**
   * Makes all sprites in the group bounce off a target
   * @param target - Sprite or group to bounce off
   */
  bounce(target: Sprite | Group): void;
  
  /**
   * Utility methods - Advanced group operations
   */
  
  /**
   * Creates a copy of the group with all its sprites
   * @returns New group with same sprites
   */
  clone(): Group;
  
  /**
   * Removes all sprites in the group from the game
   */
  destroy(): void;
}

/**
 * Camera class - Controls the game's viewport
 * 
 * The camera allows you to scroll and zoom the view, useful for
 * platformers, top-down games, and other scrolling games.
 * 
 * @example
 * // Follow the player with the camera
 * camera.follow(player);
 * 
 * // Set camera position manually
 * camera.setPosition(200, 200);
 * 
 * // Zoom in/out
 * camera.setZoom(2); // 2x zoom
 */
declare class Camera {
  constructor(pInst: p5, x: number, y: number, zoom: number);
  
  /**
   * Properties
   */
  
  /** Camera position in the world */
  position: p5.Vector;
  
  /** Zoom level (1 = normal, 2 = 2x zoom, 0.5 = half size) */
  zoom: number;
  
  /**
   * Methods
   */
  
  /**
   * Makes the camera follow a sprite
   * @param sprite - Sprite to follow
   */
  follow(sprite: Sprite): void;
  
  /**
   * Stops the camera from following any sprite
   */
  unfollow(): void;
  
  /**
   * Sets the camera's position
   * @param x - X coordinate
   * @param y - Y coordinate
   */
  setPosition(x: number, y: number): void;
  
  /**
   * Sets the camera's zoom level
   * @param zoom - Zoom factor (1 = normal size)
   */
  setZoom(zoom: number): void;
}

/**
 * Animation class - Manages sprite animations
 * 
 * Animations are sequences of images that play over time,
 * creating the illusion of movement or state changes.
 * 
 * @example
 * // Create an animation from image files
 * let walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
 * walkAnim.frameDelay = 5; // Slower animation
 * walkAnim.loop = true; // Loop continuously
 * 
 * // Add to sprite
 * player.addAnimation("walk", walkAnim);
 */
declare class Animation {
  constructor(pInst: p5);
  
  /**
   * Properties
   */
  
  /** Array of images for each frame */
  frames: p5.Image[];
  
  /** Delay between frames (higher = slower) */
  frameDelay: number;
  
  /** Whether animation loops when it reaches the end */
  loop: boolean;
  
  /**
   * Methods
   */
  
  /**
   * Adds an image to the animation
   * @param image - Image file path or p5.Image object
   */
  addFrame(image: p5.Image | string): void;
  
  /**
   * Advances to the next frame
   */
  nextFrame(): void;
  
  /**
   * Goes to the previous frame
   */
  previousFrame(): void;
  
  /**
   * Jumps to a specific frame
   * @param frame - Frame number (0-based)
   */
  goToFrame(frame: number): void;
  
  /**
   * Starts playing the animation
   */
  play(): void;
  
  /**
   * Pauses the animation
   */
  pause(): void;
  
  /**
   * Stops the animation and resets to first frame
   */
  stop(): void;
}

/**
 * SpriteSheet class - Manages sprite sheets (texture atlases)
 * 
 * Sprite sheets are single images containing multiple frames
 * arranged in a grid. This class helps extract individual frames.
 * 
 * @example
 * // Create spritesheet from image
 * let sheet = new SpriteSheet();
 * sheet.addFrame(0, 0, 32, 32); // Frame 1: x=0, y=0, 32x32 pixels
 * sheet.addFrame(32, 0, 32, 32); // Frame 2: x=32, y=0, 32x32 pixels
 * 
 * // Get individual frames
 * let frame1 = sheet.getFrame(0);
 * let frame2 = sheet.getFrame(1);
 */
declare class SpriteSheet {
  constructor(pInst: p5);
  
  /**
   * Methods
   */
  
  /**
   * Adds a frame region to the sprite sheet
   * @param x - X coordinate in the sprite sheet
   * @param y - Y coordinate in the sprite sheet
   * @param width - Width of the frame
   * @param height - Height of the frame
   */
  addFrame(x: number, y: number, width: number, height: number): void;
  
  /**
   * Gets a frame by index
   * @param index - Frame number (0-based)
   * @returns p5.Image object for the frame
   */
  getFrame(index: number): p5.Image;
  
  /**
   * Gets the total number of frames
   * @returns Number of frames in the sprite sheet
   */
  getFrameCount(): number;
}

/**
 * Global functions - Convenience functions available everywhere
 * 
 * These functions provide easy access to common p5.play operations
 * without needing to reference a p5 instance.
 */

/**
 * Creates a new sprite at the specified position and size
 * @param x - X coordinate of the sprite's center
 * @param y - Y coordinate of the sprite's center  
 * @param width - Width of the sprite (optional, defaults to 50)
 * @param height - Height of the sprite (optional, defaults to 50)
 * @returns A new Sprite object
 * @example
 * // Create sprites with different sizes
 * let player = createSprite(200, 200, 50, 50);
 * let enemy = createSprite(300, 300); // Uses default size
 * let smallItem = createSprite(100, 100, 30, 30);
 * 
 * // Create sprites for game objects
 * let fly = createSprite(400, 150, 30, 30);
 * let frog = createSprite(200, 320, 40, 40);
 * let mushroom = createSprite(400, 320, 35, 35);
 */
declare function createSprite(x: number, y: number, width?: number, height?: number): Sprite;

/**
 * Creates a new group for organizing sprites
 * @returns A new Group object
 * @example
 * let enemies = createGroup();
 * let collectibles = createGroup();
 */
declare function createGroup(): Group;

/**
 * Draws all sprites to the canvas
 * @param group - Optional group to draw (if not specified, draws all sprites)
 * @example
 * // Draw all sprites (most common usage)
 * drawSprites();
 * 
 * // Draw specific groups
 * drawSprites(enemies); // Draw only enemies
 * drawSprites(collectibles); // Draw only collectibles
 * 
 * // Typical usage in draw() function
 * function draw() {
 *   drawBackground();
 *   showBoards();
 *   respondToUser();
 *   doSpriteMovement();
 *   doSpriteInteraction();
 *   drawSprites(); // Draw all sprites last
 * }
 */
declare function drawSprites(group?: Group): void;

/**
 * Updates all sprites' positions, animations, and collisions
 * @param updating - Whether to enable/disable automatic updates (optional)
 * @example
 * updateSprites(); // Update all sprites
 * updateSprites(false); // Disable automatic updates
 */
declare function updateSprites(updating?: boolean): void;

/**
 * Gets all sprites with the specified tags
 * @param tags - One or more tag strings to filter by
 * @returns Array of sprites matching the tags
 * @example
 * let enemies = getSprites("enemy", "hostile");
 * let collectibles = getSprites("coin", "gem");
 */
declare function getSprites(...tags: string[]): Sprite[];

/**
 * Removes a sprite from the game
 * @param sprite - The sprite to remove
 * @example
 * removeSprite(enemy);
 */
declare function removeSprite(sprite: Sprite): void;

/**
 * Camera control functions
 */

/**
 * Saves the current camera state (position and zoom)
 * Can be restored with cameraPop()
 * @example
 * cameraPush(); // Save camera state
 * camera.setPosition(100, 100); // Move camera
 * cameraPop(); // Restore previous state
 */
declare function cameraPush(): void;

/**
 * Restores the previously saved camera state
 * Must be called after cameraPush()
 */
declare function cameraPop(): void;

/**
 * Creates invisible sprites at the screen edges for boundary detection
 * Creates four sprites: topEdge, bottomEdge, leftEdge, rightEdge
 * Also creates an 'edges' group containing all four edge sprites
 * 
 * These edge sprites are useful for keeping game objects within the screen bounds
 * and creating boundary collision detection without manually positioning sprites.
 * 
 * @example
 * // Create edge sprites for boundary detection
 * createEdgeSprites();
 * 
 * // Make player bounce off all edges
 * player.bounceOff(edges);
 * 
 * // Make player bounce off specific edges
 * player.bounceOff(topEdge); // Bounce off top edge only
 * player.bounceOff(bottomEdge); // Bounce off bottom edge only
 * 
 * // Keep enemies within screen bounds
 * enemy.bounceOff(edges);
 * 
 * // Create a platformer with floor collision
 * player.bounceOff(bottomEdge); // Player lands on ground
 * player.bounceOff(leftEdge); // Player hits left wall
 * player.bounceOff(rightEdge); // Player hits right wall
 */
declare function createEdgeSprites(): void;

/**
 * Key input global functions - Handle keyboard events
 */

/**
 * Returns true if the specified key was just pressed this frame
 * @param key - Key code or string alias (e.g., 'SPACE', 'A', 32)
 * @returns True if key was pressed this frame
 * @example
 * // Handle jumping controls
 * if (keyWentDown('SPACE')) {
 *   player.jump();
 * }
 * if (keyWentDown('UP')) {
 *   frog.velocityY = -4; // Jump up
 * }
 * 
 * // Handle movement controls
 * if (keyWentDown('LEFT')) {
 *   player.velocityX = -2;
 * }
 * if (keyWentDown('RIGHT')) {
 *   player.velocityX = 2;
 * }
 */
declare function keyWentDown(key: number | P5PlayKey): boolean;

/**
 * Returns true if the specified key was just released this frame
 * @param key - Key code or string alias
 * @returns True if key was released this frame
 * @example
 * if (keyWentUp('SPACE')) {
 *   player.stopJump();
 * }
 */
declare function keyWentUp(key: number | P5PlayKey): boolean;

/**
 * Returns true if the specified key is currently being held down
 * @param key - Key code or string alias
 * @returns True if key is currently pressed
 * @example
 * if (keyDown('RIGHT_ARROW')) {
 *   player.velocityX = 5;
 * }
 */
declare function keyDown(key: number | P5PlayKey): boolean;

/**
 * Mouse input global functions - Handle mouse events
 */

/**
 * Returns true if the specified mouse button is currently pressed
 * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
 * @returns True if mouse button is currently pressed
 * @example
 * if (mouseDown(LEFT)) {
 *   player.attack();
 * }
 */
declare function mouseDown(buttonCode: number): boolean;

/**
 * Returns true if the specified mouse button was just pressed this frame
 * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
 * @returns True if mouse button was pressed this frame
 * @example
 * if (mouseWentDown(LEFT)) {
 *   player.jump();
 * }
 */
declare function mouseWentDown(buttonCode: number): boolean;

/**
 * Returns true if the specified mouse button was just released this frame
 * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
 * @returns True if mouse button was released this frame
 * @example
 * if (mouseWentUp(LEFT)) {
 *   player.stopJump();
 * }
 */
declare function mouseWentUp(buttonCode: number): boolean;

/**
 * Returns true if the specified mouse button is currently not pressed
 * @param buttonCode - Mouse button code (LEFT, RIGHT, CENTER)
 * @returns True if mouse button is not pressed
 * @example
 * if (mouseUp(LEFT)) {
 *   player.idle();
 * }
 */
declare function mouseUp(buttonCode: number): boolean;

/**
 * Returns true if the mouse cursor is over the specified sprite
 * @param sprite - Sprite to check mouse position against
 * @returns True if mouse is over the sprite
 * @example
 * if (mouseIsOver(player)) {
 *   player.highlight();
 * }
 */
declare function mouseIsOver(sprite: Sprite): boolean;

/**
 * Returns true if the mouse was pressed while over the specified sprite
 * @param sprite - Sprite to check mouse interaction with
 * @returns True if mouse was pressed over the sprite
 * @example
 * if (mousePressedOver(button)) {
 *   button.click();
 * }
 */
declare function mousePressedOver(sprite: Sprite): boolean;

/**
 * Returns true if the mouse has moved since the last frame
 * @returns True if mouse moved
 * @example
 * if (mouseDidMove()) {
 *   updateCursor();
 * }
 */
declare function mouseDidMove(): boolean;

/**
 * Drawing global functions - Enhanced shapes and graphics
 */

/**
 * Draws a regular polygon with the specified number of sides
 * @param x - X coordinate of the polygon center
 * @param y - Y coordinate of the polygon center
 * @param sides - Number of sides (3 = triangle, 4 = square, etc.)
 * @param size - Size of the polygon (radius from center to vertices)
 * @param rotation - Rotation angle in degrees (optional)
 * @example
 * // Draw a triangle
 * regularPolygon(200, 200, 3, 50);
 * 
 * // Draw a rotated hexagon
 * regularPolygon(300, 300, 6, 40, 30);
 */
declare function regularPolygon(x: number, y: number, sides: number, size: number, rotation?: number): void;

/**
 * Begins a custom shape definition
 * Use with vertex() to define custom shapes
 * @example
 * shape();
 * vertex(0, 0);
 * vertex(50, 0);
 * vertex(25, 50);
 * endShape();
 */
declare function shape(): void;

/**
 * Creates a color using RGB values
 * @param r - Red component (0-255)
 * @param g - Green component (0-255)
 * @param b - Blue component (0-255)
 * @param a - Alpha component (0-255, optional)
 * @returns Color object
 * @example
 * let red = rgb(255, 0, 0);
 * let blue = rgb(0, 0, 255, 128); // Semi-transparent blue
 */
declare function rgb(r: number, g: number, b: number, a?: number): any;

/**
 * Utility global functions - Advanced functionality
 */

/**
 * Enables or disables quad tree collision detection for better performance
 * @param use - Whether to use quad tree collision detection
 * @example
 * useQuadTree(true); // Enable for better performance with many sprites
 * useQuadTree(false); // Disable for simpler collision detection
 */
declare function useQuadTree(use: boolean): void;

/**
 * Reads and processes all key presses from the input buffer
 * Called automatically each frame, but can be called manually
 * @example
 * readPresses(); // Process all pending key events
 */
declare function readPresses(): void;

/**
 * Animation global functions - Create and manage animations
 */

/**
 * Creates an animation from a sequence of images
 * To be typically used in the preload() function of the sketch.
 * Can load individual image files or create sequence animations from numbered files.
 * 
 * @param frameImages - Image files or p5.Image objects for each frame. Can be individual files or sequence patterns.
 * @returns A new Animation object with the loaded frames
 * @example
 * // Load individual image files for walking animation
 * let walkAnim = loadAnimation("walk1.png", "walk2.png", "walk3.png");
 * player.addAnimation("walk", walkAnim);
 * 
 * // Load sequence animation (numbered files)
 * let sequenceAnim = loadAnimation("data/walking0001.png", "data/walking0005.png");
 * 
 * // Load mixed animation for special effects
 * let glitchAnim = loadAnimation("data/dog.png", "data/horse.png", "data/cat.png", "data/snake.png");
 * 
 * // Load sprite sheet frames
 * let explosionAnim = loadAnimation("explosion1.png", "explosion2.png", "explosion3.png", "explosion4.png");
 * explosion.addAnimation("explode", explosionAnim);
 * 
 * // Load character animations
 * let idleAnim = loadAnimation("idle1.png", "idle2.png");
 * let jumpAnim = loadAnimation("jump1.png", "jump2.png");
 * player.addAnimation("idle", idleAnim);
 * player.addAnimation("jump", jumpAnim);
 */
declare function loadAnimation(...frameImages: (p5.Image | string)[]): Animation;

/**
 * Loads a Sprite Sheet.
 * To be typically used in the preload() function of the sketch.
 * There are two different ways to load a SpriteSheet:
 * 1. Using width, height for each frame and number of frames
 * 2. Using an array of objects that define each frame
 *
 * @param image - Path to the sprite sheet image or p5.Image object
 * @param frameWidth - Width of each frame in pixels, or array of frame definitions
 * @param frameHeight - Height of each frame in pixels (required if frameWidth is a number)
 * @param numFrames - Number of frames in the sprite sheet (required if frameWidth is a number)
 * @param callback - Callback function to execute when image loads
 * @returns A SpriteSheet object containing the loaded frames
 * @example
 * // Method 1 - Using width, height for each frame and number of frames
 * var explodeAnimation = loadSpriteSheet('assets/explode_sprite_sheet.png', 171, 158, 11);
 * 
 * // Method 2 - Using an array of objects that define each frame
 * var playerFrames = loadJSON('assets/tiles.json');
 * var playerAnimation = loadSpriteSheet('assets/player_spritesheet.png', playerFrames);
 */
declare function loadSpriteSheet(image: string | p5.Image, frameWidth: number | any[], frameHeight?: number, numFrames?: number, callback?: Function): SpriteSheet;

/**
 * Sound functions - Play audio using HTML5 Audio API
 */

/**
 * Plays an audio file with optional looping
 * @param filename - Path to the audio file (e.g., "sound.mp3", "music.wav")
 * @param loop - Whether to loop the audio (default: false)
 * @example
 * playSound("jump.mp3"); // Play once
 * playSound("background_music.mp3", true); // Loop continuously
 */
declare function playSound(filename: string, loop?: boolean): void;

/**
 * Stops playing an audio file and resets it to the beginning
 * @param filename - Path to the audio file to stop
 * @example
 * stopSound("background_music.mp3");
 */
declare function stopSound(filename: string): void;

/**
 * p5.js Constants - Used for alignment and positioning
 */

/**
 * Text alignment constants
 */
declare const LEFT: string;
declare const CENTER: string;
declare const RIGHT: string;
declare const TOP: string;
declare const BOTTOM: string;

/**
 * Mouse button constants
 */
declare const LEFT_BUTTON: number;
declare const RIGHT_BUTTON: number;
declare const CENTER_BUTTON: number;

/**
 * Animation global functions - Create and manage animations
 */ 