
function showBoards() {
  // Display score
  fill(255, 255, 255); // White text
  textSize(24);
  textAlign(LEFT, TOP);
  text("Score: " + score, 10, 10);
  // Display health
  fill(255, 255, 255);
  textSize(24);
  text("Health: " + health, 10, 40); 
  // Display Game Over message if health is zero
  if (health <= 0) {
    player.visible = false;
    enemy.visible = false;
    food.visible = false;
    // Display Game Over message
    background(0, 0, 0);
    fill(210, 1, 3); // Red text
    textSize(48);
    textAlign(TOP, CENTER);
    text("Game Over!", width / 200, height / 200);
  } 
}