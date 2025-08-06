
function doSpriteMovement() {
    // Food movement - moves from right to left and repeats
    if(food.x < 0) {
        food.x = 400;
    }
    
    // Enemy movement - moves from right to left and repeats
    if(enemy.x < 0) {
        enemy.x = 400;
    }
    if (player.y >350) {
    player.velocityY = 0;
    player.y = 300;
    } 
}