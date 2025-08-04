# p5.js Core Functions Documentation

A focused guide covering the 18 essential p5.js functions for creative coding and game development.

## Table of Contents

1. [Canvas Setup](#canvas-setup)
2. [Background & Colors](#background--colors)
3. [Shape Drawing](#shape-drawing)
4. [Text Functions](#text-functions)
5. [Math & Utility Functions](#math--utility-functions)
6. [Complete Function Reference](#complete-function-reference)

---

## Canvas Setup

### createCanvas(width, height)
Creates the drawing canvas.

```javascript
function setup() {
  createCanvas(400, 400); // 400x400 pixel canvas
}
```

---

## Background & Colors

### background(r, g, b)
Sets the background color using RGB values (0-255).

```javascript
background(255, 0, 0);     // Red background
background(0, 255, 0);     // Green background
background(0, 0, 255);     // Blue background
background(255, 255, 255); // White background
background(0, 0, 0);       // Black background
```

### fill(r, g, b)
Sets the fill color for shapes.

```javascript
fill(255, 255, 0);        // Yellow fill
rect(100, 100, 50, 50);   // Yellow rectangle
```

### noFill()
Removes fill from shapes (transparent inside).

```javascript
noFill();
ellipse(100, 100, 50, 50); // Circle with no fill
```

### stroke(r, g, b)
Sets the stroke (outline) color.

```javascript
stroke(255, 0, 0);        // Red outline
rect(100, 100, 50, 50);   // Rectangle with red border
```

### noStroke()
Removes stroke from shapes.

```javascript
noStroke();
ellipse(100, 100, 50, 50); // Circle with no outline
```

### strokeWeight(size)
Sets the thickness of lines and shape outlines.

```javascript
strokeWeight(5);           // Thick lines
line(0, 0, 100, 100);     // Thick line
```

---

## Shape Drawing

### rect(x, y, width, height)
Draws a rectangle.

```javascript
rect(100, 100, 50, 30);   // Rectangle at (100,100), size 50x30
rect(0, 0, width, height); // Full canvas rectangle
```

### ellipse(x, y, width, height)
Draws an ellipse (circle or oval).

```javascript
ellipse(200, 200, 50, 50); // Circle with radius 25
ellipse(300, 300, 60, 40); // Oval
```

### line(x1, y1, x2, y2)
Draws a line between two points.

```javascript
line(0, 0, 100, 100);     // Diagonal line
line(50, 50, 150, 50);    // Horizontal line
```

### point(x, y)
Draws a single pixel point.

```javascript
point(100, 100);           // Single pixel at (100,100)
```

### arc(x, y, width, height, start, stop, mode)
Draws an arc (portion of an ellipse).

```javascript
arc(100, 100, 80, 80, 0, PI, PIE);    // Pie slice
arc(200, 100, 80, 80, 0, PI, OPEN);   // Open arc
arc(300, 100, 80, 80, 0, PI, CHORD);  // Chord
```

**Arc Modes:**
- `PIE` - Pie slice (closed with lines to center)
- `OPEN` - Open arc (no closing lines)
- `CHORD` - Chord (closed with straight line)

### shape()
Begins a custom shape definition.

```javascript
shape();
vertex(0, 0);      // First point
vertex(50, 0);     // Second point
vertex(25, 50);    // Third point
endShape();         // Complete the shape
```

### regularPolygon(x, y, sides, size, rotation)
Draws a regular polygon.

```javascript
regularPolygon(200, 200, 3, 50);      // Triangle
regularPolygon(300, 300, 6, 40, 30);  // Rotated hexagon
```

---

## Text Functions

### text(str, x, y)
Draws text at the specified position.

```javascript
text("Hello World!", 200, 200);
text("Score: " + score, 10, 30);
```

### textAlign(horizontal, vertical)
Sets text alignment.

```javascript
textAlign(CENTER, CENTER); // Center text
textAlign(LEFT, TOP);      // Top-left text
textAlign(RIGHT, BOTTOM);  // Bottom-right text
```

**Options:**
- Horizontal: `LEFT`, `CENTER`, `RIGHT`
- Vertical: `TOP`, `CENTER`, `BOTTOM`

### textFont(font, size)
Sets the text font and size.

```javascript
textFont("Arial");
textFont("Times", 24);
textFont("Courier", 16);
```

### textSize(pixels)
Sets the text size in pixels.

```javascript
textSize(24);              // Large text
textSize(12);              // Small text
textSize(48);              // Very large text
```

---

## Math & Utility Functions

### random(max)
Returns a random number between 0 and max.

```javascript
let x = random(400);       // Random X position
let y = random(300);       // Random Y position
let size = random(50);     // Random size
```

### random(min, max)
Returns a random number between min and max.

```javascript
let speed = random(2, 8);  // Random speed between 2-8
let color = random(0, 255); // Random color value
```

### map(value, start1, stop1, start2, stop2)
Maps a value from one range to another.

```javascript
// Map mouse position to color
let red = map(mouseX, 0, width, 0, 255);
fill(red, 0, 0);

// Map value to new range
let newValue = map(oldValue, 0, 100, 0, 255);
```

### constrain(value, min, max)
Keeps a value within specified limits.

```javascript
let x = constrain(mouseX, 0, width);  // Keep within canvas
let speed = constrain(speed, 0, 10);   // Limit speed
```

### dist(x1, y1, x2, y2)
Calculates distance between two points.

```javascript
let distance = dist(playerX, playerY, enemyX, enemyY);
if (distance < 50) {
  // Collision detected!
}
```

---

## Complete Function Reference

### Canvas & Setup
| Function | Parameters | Description |
|----------|------------|-------------|
| `createCanvas` | `(width, height)` | Creates drawing canvas |

### Background & Colors
| Function | Parameters | Description |
|----------|------------|-------------|
| `background` | `(r, g, b)` | Sets background color |
| `fill` | `(r, g, b)` | Sets fill color |
| `noFill` | `()` | Removes fill |
| `stroke` | `(r, g, b)` | Sets stroke color |
| `noStroke` | `()` | Removes stroke |
| `strokeWeight` | `(size)` | Sets line thickness |

### Shapes
| Function | Parameters | Description |
|----------|------------|-------------|
| `rect` | `(x, y, width, height)` | Draws rectangle |
| `ellipse` | `(x, y, width, height)` | Draws ellipse |
| `line` | `(x1, y1, x2, y2)` | Draws line |
| `point` | `(x, y)` | Draws point |
| `arc` | `(x, y, w, h, start, stop, mode?)` | Draws arc |
| `shape` | `()` | Begins custom shape |
| `regularPolygon` | `(x, y, sides, size, rotation?)` | Draws polygon |

### Text
| Function | Parameters | Description |
|----------|------------|-------------|
| `text` | `(str, x, y)` | Draws text |
| `textAlign` | `(horizontal, vertical?)` | Sets text alignment |
| `textFont` | `(font, size?)` | Sets text font |
| `textSize` | `(pixels)` | Sets text size |

### Math & Utilities
| Function | Parameters | Description |
|----------|------------|-------------|
| `random` | `(max)` or `(min, max)` | Returns random number |
| `map` | `(value, start1, stop1, start2, stop2)` | Maps value to new range |
| `constrain` | `(value, min, max)` | Constrains value to range |
| `dist` | `(x1, y1, x2, y2)` | Calculates distance |

---

## Quick Examples

### Basic Drawing
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
  
  fill(0, 255, 0);
  ellipse(200, 200, 50, 50);
  
  stroke(0, 0, 255);
  strokeWeight(3);
  line(0, 0, 400, 400);
}
```

### Interactive Drawing
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Circle follows mouse
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 30, 30);
  
  // Text shows coordinates
  fill(0);
  textSize(16);
  text("Mouse: " + mouseX + ", " + mouseY, 10, 30);
}
```

### Random Shapes
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Random colored rectangles
  fill(random(255), random(255), random(255));
  rect(random(width), random(height), 50, 50);
}
```

### Arc Examples
```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Different arc types
  fill(255, 0, 0);
  arc(100, 100, 80, 80, 0, PI, PIE);
  
  fill(0, 255, 0);
  arc(200, 100, 80, 80, 0, PI, OPEN);
  
  fill(0, 0, 255);
  arc(300, 100, 80, 80, 0, PI, CHORD);
}
```

---

## Color Reference

### Common RGB Values
| Color | RGB Values |
|-------|------------|
| White | `(255, 255, 255)` |
| Black | `(0, 0, 0)` |
| Red | `(255, 0, 0)` |
| Green | `(0, 255, 0)` |
| Blue | `(0, 0, 255)` |
| Yellow | `(255, 255, 0)` |
| Purple | `(255, 0, 255)` |
| Cyan | `(0, 255, 255)` |
| Orange | `(255, 165, 0)` |
| Gray | `(128, 128, 128)` |

### Tips
- **0 = no color, 255 = full color**
- **Mix colors by combining RGB values**
- **Use `random(255)` for random colors**
- **Use `map()` to create color gradients**

---

## Best Practices

1. **Always call `createCanvas()` in `setup()`**
2. **Call `background()` in `draw()` to clear screen**
3. **Set colors before drawing shapes**
4. **Use meaningful variable names**
5. **Keep your code organized and readable**

This documentation covers all 18 core functions defined in your p5.d.ts file. Happy coding! 🎨 