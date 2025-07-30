# 🎮 Game Lab Starter Code

> **CSD Unit 3 Lesson 27 or 28**

This is starter code that sets up a VSCode environment to mimic the coding experience in Code.org's Game Lab.

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

In GameLab, you typically work with one file, but for team collaboration, the code is divided among several files in the `js/` directory.

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
