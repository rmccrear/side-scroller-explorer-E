# 🎮 Game Lab Starter Code

> **Game Lab Side Scroller**

This is starter code that sets up a VSCode environment to mimic the coding experience in Code.org's Game Lab.

## Purpose

The purpose of this repo is to allow you to explore how to use VSCode and Game Lab in a working game. Try to work together to make the following improvements to the game.

## Setup

Clone this repo to your computer and navigate to the project

```bash
  git clone [address of repo]
  cd side-scroller-explorer
```

Run these two commands in the project directory. (requires node.js to be installed). The first command will install some files useful for the project and the second will start a server to run your game in development.

```bash
  npm install
  npx live-server
```

After competing setup, move to tasks.

## Tasks

This game is unfinished! Here are some important updates we'd like to make on the game.

**Quick Fixes**

Please work on these 7 updates to the game. (You don't need to do them in order.) You may work on them all together, break into pairs and divide the work. Remember to commit your code after each step.

When completing these tasks, refer back to the code in [Unit 3](https://studio.code.org/courses/csd-2024/units/3) of Computer Science Discoveries. You may find your own code for [Lesson 21](https://studio.code.org/courses/csd-2024/units/3/lessons/21/student) useful. 

You may also look at[documentation for p5](./P5_DOCS.md) and for [p5.play](./P5_PLAY_DOCS.md) for easy reference.

- [ ] (1) Add a sun or mountains to the background in `background.js`
- [ ] (2) Fix one of the sprites in `sprite-setup.js`
- [ ] (3) Randomize the position and speed of the enemy and food in `sprite-movement.js`
- [ ] (4) Health decreases when the player touches the enemy (multiple files) Hint: use the Watcher in Dev Tools to monitor the changes in the variable.
- [ ] (5) Add health to the display boards in `display-boards.js`
- [ ] (6) Change the rotation of the enemy when it attacks the player in `sprite-interactions.js` (touches)
- [ ] (7) Fix the player's jump so they don't fall through the floor

*Next:* Use GitHub Pages to serve your game as a website.

After completing these steps, take a careful look at `script.js` and try to understand how all the pieces fit. Then move on to Challenges.

**Challenges**

- [ ] (1) Add a Game Over background using a function in `background.js`
- [ ] (2) Customize one of the sprite animations to your use your own image file in `sprite-setup.js`
- [ ] (3) Change color and position of sun as time goes on in `background.js` (Use counter pattern)
- [ ] (4) Change jump to use gravity instead of simply setting the velocity in `user-controls.js` (Use counter pattern)
- [ ] (5) Add a startup screen
- [ ] (6) Don't let the player "double jump" if the up arrow is pressed while it is mid jump (Hint: use a variable like `isJumping`)
- [ ] (7) Use height and width variables instead of the magic number 400 in your code so you can change the size of the canvas.

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system

### Installation

1. **Install dependencies** for Game Lab's p5.js API intellisense:
```bash
npm install
```

2. **Start the development server**:
```bash
npx live-server
```

3. **Open your browser** and navigate to the local server (usually `http://localhost:8080`)

## 📁 Project Structure

In Game Lab, you typically work with one file, but for team collaboration, the code is divided among several files in the `js/` directory.

### 🎯 Team Roles & Responsibilities

| **Role** | **Files** | **Responsibilities** |
|----------|-----------|---------------------|
| 🎨 **Background Designer** | `background.js` | Design and code the background (color, sky, terrain, etc.) |
| 🧑‍🎨 **Sprite Designer/Animator** | `animations.js`, `sprite-setup.js` | Add sprite images/animations. Set up sprite properties like scale or start location |
| 👾 **Obstacle/Enemy Movement** | `sprite-movement.js` | Code how obstacles and enemies move using patterns or velocity |
| 🕹️ **Controls & Interactions** | `user-controls.js`, `sprite-interactions.js` | Code the player's controls and how sprites interact (bounce, overlap, disappear) |

> **Note**: Also share and update common files like `variables.js` and `display-boards.js` as needed.

### 📂 File Organization

```
game-lab-starter/
├── 📁 js/                    # Your team's code files
│   ├── variables.js          # Shared variables
│   ├── background.js         # Background design
│   ├── display-boards.js     # Score and stats display
│   ├── animations.js         # Sprite animations
│   ├── sprite-setup.js       # Sprite initialization
│   ├── sprite-movement.js    # Enemy/obstacle movement
│   ├── sprite-interactions.js # Collision and interactions
│   └── user-controls.js      # Player controls
├── 📁 sprites/               # Sprite images (don't modify)
├── 📁 vendor/                # Game Lab libraries (don't modify)
├── 📁 .vscode/               # VSCode settings (don't modify)
├── script.js                 # Main game script
├── style.css                 # Page styling
├── index.html                # Main HTML file
├── p5.play.d.ts              # TypeScript definitions (don't modify)
├── jsconfig.json             # VSCode configuration (don't modify)
├── package.json              # Node.js dependencies (don't modify)
└── README.md                 # This file (don't modify)
```

## 💻 Development

### Writing Code

Each file in the `js/` directory contains a function definition. Write your code inside these functions so it can be executed by the main `script.js` file.

**Example:**
```javascript
// In background.js
function drawBackground() {
    // Your background code here
    background("skyblue");
    fill("green");
    rect(0, 300, 400, 100); // ground
}
```

### Key Files You'll Work With

| **File** | **Purpose** |
|----------|-------------|
| `js/variables.js` | Define shared variables used across the game |
| `js/background.js` | Draw the game background using p5.js drawing functions |
| `js/display-boards.js` | Display score, lives, and other game statistics |
| `js/animations.js` | Create and manage sprite animations |
| `js/sprite-setup.js` | Initialize sprites with properties and starting positions |
| `js/sprite-movement.js` | Program enemy and obstacle movement patterns |
| `js/sprite-interactions.js` | Handle collisions, bouncing, and sprite interactions |
| `js/user-controls.js` | Implement player input and controls |

## 🔧 Configuration Files

These files help set up the development environment - **don't modify them**:

- `jsconfig.json` - VSCode intellisense configuration
- `p5.play.d.ts` - TypeScript definitions for p5.play library
- `package.json` & `package-lock.json` - Node.js project configuration

## 🎯 Tips for Success

1. **Coordinate with your team** - Use the role assignments to avoid conflicts
2. **Test frequently** - Run `npx live-server` and check your changes often
3. **Use intellisense** - VSCode will provide code completion for p5.js functions
4. **Comment your code** - Help your teammates understand your implementation
5. **Share variables** - Use `variables.js` for data that multiple files need

## 🎮 Happy Coding!

Build something amazing with your team! 🚀
