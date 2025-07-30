
function setupSprites() {
  // Initialize score
  score = 0;
  
  // Create food sprite - moving from right to left
  food = createSprite(400, 150, 30, 30);
  food.addAnimation('food', foodAnimation);
  food.velocityX = -1;
  food.velocityY = 0;
  
  // Create player sprite
  player = createSprite(200, 320, 40, 40);
  player.addAnimation('player', playerAnimation);
  
  // Create enemy sprite - moving from right to left
  enemy = createSprite(400, 320, 35, 35);
  enemy.addAnimation('enemy', enemyAnimation);
  enemy.velocityX = -5;
  enemy.velocityY = 0;
}