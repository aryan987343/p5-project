function preload() {

};

function setup() {
canvas = createCanvas(600,600);
canvas.position(100,250);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
rect(500, 175, 30, 30);
circle(500, 350, 55);
ellipse(500, 50, 55, 55);
image(video,0,0,400,400);
}

function take_snap() {
    save("filter.png")
}