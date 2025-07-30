/**
 * p5.d.ts - TypeScript definitions for p5.js core functions
 * 
 * This file provides TypeScript type definitions for essential p5.js functions
 * that are commonly used in projects.
 * 
 * @see https://p5js.org/reference/
 */

/**
 * p5.js Core Functions - Essential p5.js functions used in projects
 */

/**
 * Creates a canvas element and sets its size
 * @param w - Width of the canvas
 * @param h - Height of the canvas
 * @param renderer - Optional renderer (P2D, WEBGL, etc.)
 * @returns The created canvas element
 * @example
 * createCanvas(400, 400); // Basic canvas
 * createCanvas(400, 400, P2D); // With renderer
 */
declare function createCanvas(w: number, h: number, renderer?: any): HTMLCanvasElement;

/**
 * p5.js Drawing Functions - Used for background and UI elements
 */

/**
 * Sets the background color of the canvas
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @example
 * background(135, 206, 235); // Sky blue
 * background(34, 139, 34); // Forest green
 */
declare function background(r: number, g: number, b: number): void;

/**
 * Sets the fill color for shapes
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @example
 * fill(255, 255, 0); // Yellow
 * fill(255, 255, 255); // White
 */
declare function fill(r: number, g: number, b: number): void;

/**
 * Sets the stroke (outline) color for shapes
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @example
 * stroke(0, 0, 0); // Black outline
 * stroke(255, 0, 0); // Red outline
 */
declare function stroke(r: number, g: number, b: number): void;

/**
 * Sets the stroke weight (thickness of lines)
 * @param weight - Thickness in pixels
 * @example
 * strokeWeight(1); // Thin line
 * strokeWeight(5); // Thick line
 */
declare function strokeWeight(weight: number): void;

/**
 * Disables the fill for shapes
 * @example
 * noFill();
 * ellipse(100, 100, 50, 50); // Circle without fill
 */
declare function noFill(): void;

/**
 * Disables the outline (stroke) for shapes
 * @example
 * noStroke();
 * ellipse(100, 100, 50, 50); // Circle without outline
 */
declare function noStroke(): void;

/**
 * Draws a line between two points
 * @param x1 - X coordinate of first point
 * @param y1 - Y coordinate of first point
 * @param x2 - X coordinate of second point
 * @param y2 - Y coordinate of second point
 * @example
 * line(0, 0, 100, 100); // Diagonal line
 * line(50, 50, 150, 50); // Horizontal line
 */
declare function line(x1: number, y1: number, x2: number, y2: number): void;

/**
 * Draws a point at the specified coordinates
 * @param x - X coordinate
 * @param y - Y coordinate
 * @example
 * point(100, 100); // Single point
 * point(200, 150); // Another point
 */
declare function point(x: number, y: number): void;

/**
 * Draws a triangle
 * @param x1 - X coordinate of first vertex
 * @param y1 - Y coordinate of first vertex
 * @param x2 - X coordinate of second vertex
 * @param y2 - Y coordinate of second vertex
 * @param x3 - X coordinate of third vertex
 * @param y3 - Y coordinate of third vertex
 * @example
 * triangle(100, 100, 150, 50, 200, 100); // Triangle
 */
declare function triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

/**
 * Draws an ellipse (circle or oval)
 * @param x - X coordinate of center
 * @param y - Y coordinate of center
 * @param w - Width of ellipse
 * @param h - Height of ellipse
 * @example
 * ellipse(350, 50, 60, 60); // Sun circle
 * ellipse(100, 100, 50, 30); // Oval
 */
declare function ellipse(x: number, y: number, w: number, h: number): void;

/**
 * Draws a rectangle
 * @param x - X coordinate of top-left corner
 * @param y - Y coordinate of top-left corner
 * @param w - Width of rectangle
 * @param h - Height of rectangle
 * @example
 * rect(0, 300, 400, 100); // Grass at bottom
 * rect(10, 10, 100, 50); // UI panel
 */
declare function rect(x: number, y: number, w: number, h: number): void;

/**
 * p5.js Text Functions - Used for displaying text
 */

/**
 * Sets the text size
 * @param size - Font size in pixels
 * @example
 * textSize(24); // Large text
 * textSize(12); // Small text
 */
declare function textSize(size: number): void;

/**
 * Sets the text alignment
 * @param horizontalAlign - Horizontal alignment ('LEFT', 'CENTER', 'RIGHT')
 * @param verticalAlign - Vertical alignment ('TOP', 'CENTER', 'BOTTOM')
 * @example
 * textAlign(LEFT, TOP); // Top-left alignment
 * textAlign(CENTER, CENTER); // Center alignment
 */
declare function textAlign(horizontalAlign: string, verticalAlign?: string): void;

/**
 * Draws text on the canvas
 * @param str - Text string to display
 * @param x - X coordinate
 * @param y - Y coordinate
 * @example
 * text("Score: " + score, 10, 10); // Display score
 * text("Game Over", 200, 200); // Center text
 */
declare function text(str: string, x: number, y: number): void;

/**
 * p5.js Math Functions - Used for calculations and random numbers
 */

/**
 * Returns a random number between 0 and the specified value
 * @param max - Maximum value (exclusive)
 * @returns Random number between 0 and max
 * @example
 * let x = random(400); // Random X position
 * let y = random(300); // Random Y position
 * let speed = random(5, 10); // Random speed between 5-10
 */
declare function random(max: number): number;

/**
 * Returns a random number between two values
 * @param min - Minimum value (inclusive)
 * @param max - Maximum value (exclusive)
 * @returns Random number between min and max
 * @example
 * let x = random(0, 400); // Random X position
 * let speed = random(2, 8); // Random speed
 */
declare function random(min: number, max: number): number;

/**
 * Maps a value from one range to another
 * @param value - Value to map
 * @param start1 - Start of first range
 * @param stop1 - End of first range
 * @param start2 - Start of second range
 * @param stop2 - End of second range
 * @returns Mapped value
 * @example
 * let mappedX = map(mouseX, 0, width, 0, 255); // Map mouse to color
 * let mappedY = map(y, 0, height, 0, 100); // Map position to percentage
 */
declare function map(value: number, start1: number, stop1: number, start2: number, stop2: number): number;

/**
 * Constrains a value between a minimum and maximum
 * @param value - Value to constrain
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Constrained value
 * @example
 * let constrainedX = constrain(x, 0, width); // Keep within canvas
 * let constrainedSpeed = constrain(speed, 0, 10); // Limit speed
 */
declare function constrain(value: number, min: number, max: number): number;

/**
 * Calculates the distance between two points
 * @param x1 - X coordinate of first point
 * @param y1 - Y coordinate of first point
 * @param x2 - X coordinate of second point
 * @param y2 - Y coordinate of second point
 * @returns Distance between points
 * @example
 * let distance = dist(player.x, player.y, enemy.x, enemy.y);
 * if (distance < 50) { // Collision detection
 *   // Handle collision
 * }
 */
declare function dist(x1: number, y1: number, x2: number, y2: number): number;

/**
 * p5.js Color Functions - Used for color manipulation
 */

/**
 * Creates a color object
 * @param r - Red value (0-255)
 * @param g - Green value (0-255)
 * @param b - Blue value (0-255)
 * @param a - Alpha value (0-255, optional)
 * @returns Color object
 * @example
 * let red = color(255, 0, 0);
 * let blue = color(0, 0, 255, 128); // Semi-transparent
 */
declare function color(r: number, g: number, b: number, a?: number): any;

/**
 * p5.js Transform Functions - Used for moving, rotating, and scaling
 */

/**
 * Saves the current drawing state (style and transformations)
 * @example
 * push(); // Save state
 * translate(100, 100); // Move origin
 * rotate(PI/4); // Rotate 45 degrees
 * rect(0, 0, 50, 50); // Draw rotated rectangle
 * pop(); // Restore state
 */
declare function push(): void;

/**
 * Restores the previously saved drawing state
 * @example
 * push(); // Save state
 * fill(255, 0, 0); // Red fill
 * rect(0, 0, 50, 50); // Red rectangle
 * pop(); // Restore original fill
 */
declare function pop(): void;

/**
 * Moves the origin point for drawing
 * @param x - X offset
 * @param y - Y offset
 * @example
 * translate(200, 200); // Move origin to center
 * ellipse(0, 0, 100, 100); // Draw circle at center
 */
declare function translate(x: number, y: number): void;

/**
 * Rotates the drawing context
 * @param angle - Rotation angle in radians
 * @example
 * rotate(PI/4); // Rotate 45 degrees
 * rotate(PI/2); // Rotate 90 degrees
 */
declare function rotate(angle: number): void;

/**
 * Scales the drawing context
 * @param x - Horizontal scale factor
 * @param y - Vertical scale factor (optional, uses x if not specified)
 * @example
 * scale(2); // Double size
 * scale(0.5); // Half size
 * scale(2, 1); // Stretch horizontally
 */
declare function scale(x: number, y?: number): void;

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
 * Mathematical constants
 */
declare const PI: number;
declare const TWO_PI: number;
declare const HALF_PI: number;

/**
 * Canvas dimensions
 */
declare const width: number;
declare const height: number;

/**
 * Mouse position variables
 */
declare const mouseX: number;
declare const mouseY: number;

/**
 * Frame rate and timing
 */
declare const frameCount: number;
declare const frameRate: number; 