
function drawBackground() {
    // Blue sky background
    background(135, 206, 235);
    
    // Sun on the right side
    fill(255, 255, 0);
    noStroke();
    ellipse(350, 50, 60, 60);
    
    // Grass at the bottom (100px high)
    fill(34, 139, 34);
    rect(0, height - 100, width, 100);
}