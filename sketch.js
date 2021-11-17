function setup() {
    let cnv = createCanvas(800, 400);
    cnv.parent('canHolder');
}

function draw() {
    background(220);
    noStroke();
    fill(230, 100, 40);
    ellipse(width / 2, height / 2, 200, 200);
    fill(255, 100);
    ellipse((width / 2) + 5, (height / 2) + 5, 180, 180);
}