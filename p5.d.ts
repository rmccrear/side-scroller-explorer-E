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
 * Disables the outline (stroke) for shapes
 * @example
 * noStroke();
 * ellipse(100, 100, 50, 50); // Circle without outline
 */
declare function noStroke(): void;

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
 * Canvas dimensions
 */
declare const width: number;
declare const height: number; 