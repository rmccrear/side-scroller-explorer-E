/**
 * extras.d.ts - TypeScript definitions for extras.js utility functions
 * 
 * This file provides TypeScript type definitions for custom utility functions
 * that extend the p5.play library with additional functionality.
 * 
 * @see vendor/extras.js
 */

/**
 * Sound management functions using HTML5 Audio API
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
 * Utility functions for common game operations
 */

/**
 * Generates a random number between min and max (inclusive)
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Random number between min and max
 * @example
 * let randomX = randomNumber(0, 400); // Random X position
 * let randomY = randomNumber(100, 300); // Random Y position
 * let randomSpeed = randomNumber(1, 5); // Random speed
 */
declare function randomNumber(min: number, max: number): number;

/**
 * Screen boundary management functions
 */

/**
 * Creates invisible edge sprites for screen boundary detection
 * Creates four sprites: topEdge, bottomEdge, leftEdge, rightEdge
 * Also creates an 'edges' group containing all four edge sprites
 * 
 * @example
 * createEdgeSprites();
 * player.bounceOff(edges); // Bounce off all edges
 * player.bounceOff(topEdge); // Bounce off top edge only
 */
declare function createEdgeSprites(): void;

/**
 * Global variables created by createEdgeSprites()
 */

/** Top edge sprite for boundary detection */
declare var topEdge: Sprite;

/** Bottom edge sprite for boundary detection */
declare var bottomEdge: Sprite;

/** Left edge sprite for boundary detection */
declare var leftEdge: Sprite;

/** Right edge sprite for boundary detection */
declare var rightEdge: Sprite;

/** Group containing all edge sprites */
declare var edges: Group;

/**
 * Internal sound management
 */

/** Object storing loaded audio files */
declare var sounds: { [filename: string]: HTMLAudioElement }; 