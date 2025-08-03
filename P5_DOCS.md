# p5.js Basics Documentation for Beginners

Welcome to the essential guide for p5.js! This documentation covers only the most important functions you need to get started with creative coding and game development.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Canvas Setup](#canvas-setup)
3. [Drawing Shapes](#drawing-shapes)
4. [Colors and Styling](#colors-and-styling)
5. [Text and Display](#text-and-display)
6. [Math and Random Numbers](#math-and-random-numbers)
7. [Mouse and Input](#mouse-and-input)
8. [Transformations](#transformations)
9. [Simple Examples](#simple-examples)

---

## Getting Started

### What is p5.js?

p5.js is a JavaScript library that makes creative coding and drawing easy. It's perfect for:
- Creating interactive graphics
- Making simple games
- Learning programming concepts
- Creating visual art

### Basic Structure

Every p5.js program has two main functions:

```javascript
function setup() {
  // Runs once at the start
  createCanvas(400, 400);
}

function draw() {
  // Runs every frame (60 times per second)
  background(220);
  // Your drawing code goes here
}
```

---

## Canvas Setup

### Creating a Canvas

The canvas is your drawing area. You must create it in `setup()`:

```javascript
function setup() {
  createCanvas(400, 400); // Width: 400px, Height: 400px
}
```

**Parameters:**
- `width` - Canvas width in pixels
- `height` - Canvas height in pixels

**Common sizes:**
- `createCanvas(400, 400)` - Square canvas
- `createCanvas(800, 600)` - Wide canvas
- `createCanvas(300, 500)` - Tall canvas

---

## Drawing Shapes

### Basic Shapes

p5.js provides simple functions to draw shapes:

#### Rectangle
```javascript
rect(x, y, width, height);
```
- `x, y` - Top-left corner position
- `width, height` - Size of rectangle

**Example:**
```javascript
rect(100, 100, 50, 30); // Rectangle at (100,100) with size 50x30
```

#### Ellipse (Circle/Oval)
```javascript
ellipse(x, y, width, height);
```
- `x, y` - Center position
- `width, height` - Size (use same values for circle)

**Example:**
```javascript
ellipse(200, 200, 50, 50); // Circle with radius 25
ellipse(300, 300, 60, 40); // Oval
```

#### Line
```javascript
line(x1, y1, x2, y2);
```
- `x1, y1` - Start point
- `x2, y2` - End point

**Example:**
```javascript
line(0, 0, 100, 100); // Diagonal line
line(50, 50, 150, 50); // Horizontal line
```

#### Triangle
```javascript
triangle(x1, y1, x2, y2, x3, y3);
```
- `x1, y1` - First corner
- `x2, y2` - Second corner
- `x3, y3` - Third corner

**Example:**
```javascript
triangle(100, 100, 150, 50, 200, 100); // Triangle
```

#### Point
```javascript
point(x, y);
```
- `x, y` - Position of the point

**Example:**
```javascript
point(100, 100); // Single pixel point
```

---

## Colors and Styling

### Setting Colors

Colors in p5.js use RGB values (0-255):

#### Background Color
```javascript
background(r, g, b);
```
**Example:**
```javascript
background(255, 0, 0); // Red background
background(0, 255, 0); // Green background
background(0, 0, 255); // Blue background
background(255, 255, 255); // White background
background(0, 0, 0); // Black background
```

#### Fill Color (inside of shapes)
```javascript
fill(r, g, b);
```
**Example:**
```javascript
fill(255, 255, 0); // Yellow fill
rect(100, 100, 50, 50); // Yellow rectangle
```

#### Stroke Color (outline of shapes)
```javascript
stroke(r, g, b);
```
**Example:**
```javascript
stroke(255, 0, 0); // Red outline
rect(100, 100, 50, 50); // Rectangle with red border
```

#### Stroke Weight (thickness of lines)
```javascript
strokeWeight(thickness);
```
**Example:**
```javascript
strokeWeight(5); // Thick lines
line(0, 0, 100, 100); // Thick line
```

### Color Tips

- **RGB Values**: Red, Green, Blue (0-255 each)
- **0 = no color, 255 = full color**
- **Common colors:**
  - White: `(255, 255, 255)`
  - Black: `(0, 0, 0)`
  - Red: `(255, 0, 0)`
  - Green: `(0, 255, 0)`
  - Blue: `(0, 0, 255)`
  - Yellow: `(255, 255, 0)`
  - Purple: `(255, 0, 255)`
  - Cyan: `(0, 255, 255)`

### Disabling Fill and Stroke

```javascript
noFill(); // Shapes with no fill (transparent inside)
noStroke(); // Shapes with no outline
```

---

## Text and Display

### Drawing Text

#### Set Text Size
```javascript
textSize(size);
```
**Example:**
```javascript
textSize(24); // Large text
textSize(12); // Small text
```

#### Set Text Alignment
```javascript
textAlign(horizontal, vertical);
```
**Options:**
- Horizontal: `LEFT`, `CENTER`, `RIGHT`
- Vertical: `TOP`, `CENTER`, `BOTTOM`

**Example:**
```javascript
textAlign(CENTER, CENTER); // Center text
textAlign(LEFT, TOP); // Top-left text
```

#### Draw Text
```javascript
text("Your text here", x, y);
```
**Example:**
```javascript
text("Hello World!", 200, 200);
text("Score: " + score, 10, 30);
```

---

## Math and Random Numbers

### Random Numbers

#### Random number between 0 and max
```javascript
random(max);
```
**Example:**
```javascript
let x = random(400); // Random X position
let y = random(300); // Random Y position
```

#### Random number between min and max
```javascript
random(min, max);
```
**Example:**
```javascript
let speed = random(2, 8); // Random speed between 2-8
let size = random(10, 50); // Random size between 10-50
```

### Math Functions

#### Map (convert one range to another)
```javascript
map(value, start1, stop1, start2, stop2);
```
**Example:**
```javascript
// Map mouse position to color
let red = map(mouseX, 0, width, 0, 255);
fill(red, 0, 0);
```

#### Constrain (keep value within limits)
```javascript
constrain(value, min, max);
```
**Example:**
```javascript
let x = constrain(mouseX, 0, width); // Keep within canvas
```

#### Distance between two points
```javascript
dist(x1, y1, x2, y2);
```
**Example:**
```javascript
let distance = dist(playerX, playerY, enemyX, enemyY);
if (distance < 50) {
  // Collision detected!
}
```

---

## Mouse and Input

### Mouse Position

p5.js automatically tracks mouse position:

```javascript
mouseX // Current X position of mouse
mouseY // Current Y position of mouse
```

**Example:**
```javascript
function draw() {
  background(220);
  
  // Draw circle at mouse position
  ellipse(mouseX, mouseY, 20, 20);
}
```

### Canvas Dimensions

```javascript
width // Canvas width
height // Canvas height
```

**Example:**
```javascript
// Draw rectangle in center of canvas
rect(width/2 - 25, height/2 - 25, 50, 50);
```

---

## Transformations

### Moving the Drawing Origin

```javascript
translate(x, y);
```
**Example:**
```javascript
translate(200, 200); // Move origin to center
ellipse(0, 0, 50, 50); // Draw circle at center
```

### Rotating

```javascript
rotate(angle);
```
**Note:** Angles are in radians. Use `PI` for common angles:
- `PI/2` = 90 degrees
- `PI` = 180 degrees
- `PI*2` = 360 degrees

**Example:**
```javascript
rotate(PI/4); // Rotate 45 degrees
rect(0, 0, 50, 50); // Rotated rectangle
```

### Scaling

```javascript
scale(factor);
```
**Example:**
```javascript
scale(2); // Make everything twice as big
ellipse(0, 0, 25, 25); // Actually draws 50x50 circle
```

### Save and Restore State

```javascript
push(); // Save current state
// ... do transformations ...
pop(); // Restore previous state
```

**Example:**
```javascript
push();
translate(100, 100);
rotate(PI/4);
rect(0, 0, 50, 50);
pop(); // Back to original state
```

---

## Simple Examples

### Example 1: Following Mouse

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw circle that follows mouse
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 30, 30);
}
```

### Example 2: Random Shapes

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Draw random rectangles
  fill(random(255), random(255), random(255));
  rect(random(width), random(height), 50, 50);
}
```

### Example 3: Simple Animation

```javascript
let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Animate rectangle moving right
  fill(0, 255, 0);
  rect(x, 200, 50, 50);
  
  x = x + 2; // Move 2 pixels per frame
  
  // Reset when it goes off screen
  if (x > width) {
    x = 0;
  }
}
```

### Example 4: Interactive Drawing

```javascript
function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  // Draw line from previous mouse position to current
  if (mouseIsPressed) {
    stroke(0);
    strokeWeight(3);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
```

### Example 5: Color Changing Background

```javascript
function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Background color changes with mouse position
  let red = map(mouseX, 0, width, 0, 255);
  let green = map(mouseY, 0, height, 0, 255);
  background(red, green, 100);
  
  // White circle in center
  fill(255);
  ellipse(width/2, height/2, 50, 50);
}
```

---

## Best Practices

### Organization
1. **Always call `createCanvas()` in `setup()`**
2. **Call `background()` in `draw()` to clear the screen**
3. **Set colors before drawing shapes**
4. **Use meaningful variable names**

### Performance
1. **Don't create objects in `draw()` if possible**
2. **Use `push()` and `pop()` for transformations**
3. **Keep your code organized and readable**

### Common Mistakes
1. **Forgetting to call `createCanvas()`**
2. **Not calling `background()` in `draw()`**
3. **Setting colors after drawing shapes**
4. **Using wrong coordinate system**

---

## Next Steps

Once you're comfortable with these basics, you can explore:
- **p5.play library** - For game development
- **Images and sprites** - For more complex graphics
- **Sound** - For audio in your projects
- **Advanced math** - For complex animations
- **Web APIs** - For external data and interactions

Remember: The best way to learn is by experimenting! Try changing values, combining functions, and creating your own projects.

Happy coding! 🎨 