
function drawBackground() {
    // Blue sky background
    background(135, 206, 235);
    
    // TODO: Sun on the right side
    fill(248, 248, 64);
    ellipse(350, 50, 100, 100); 
     
    // Grass at the bottom (100px high)
    fill(34, 139, 34);
    rect(0, 400 - 100, 400, 100);
}