
function respondToUser() {
  // Example Code follows.
  // Please delete and replace with your own code.
  if (keyWentDown("LEFT")) {
    player.velocityX = -2;
    playSound("../sprites/boop.mp3");
  }
  if (keyWentDown("RIGHT")) {
    player.velocityX = 2;
  }
}