
function doSpriteInteraction() {
    // Check if player touches food
    if (player.isTouching(food)) {
        score = score + 10; // Add 10 points
        food.x = 400; // Send food back to start (right edge)
    }
    if (player.isTouching(enemy)) {
       health = health - 1; // Subtract 1 points

    }
}