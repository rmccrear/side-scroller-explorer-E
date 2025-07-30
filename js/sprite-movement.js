
function doSpriteMovement() {
    // Example Code follows.
    // Please delete and replace with your own code.
    if(player.x > 400) {
        player.velocityX = -player.velocityX;
    }
    if(player.y > 400) {
        player.velocityY = -player.velocityY;
    }
    if(player.x<0){
        player.velocityX = -player.velocityX;
    }
    if(player.y<0){
        player.velocityY = -player.velocityY;
    }

    if(star.x > 400) {
        star.x = 0;
    }
    if(star.y > 400) {
        star.y = 0;
    }
    if(star.x<0){
        star.x = 400;
    }
    if(star.y<0){
        star.y = 400;
    }  
}