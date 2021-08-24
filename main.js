NoseX = 0;
NoseY = 0;
function preload(){

}
function draw() {
 fill('#00ffb3');
 stroke('#1500ff');
 square(NoseX, NoseY, 100);
}
function setup() {
    canvas = createCanvas(450, 450);
    canvas.position(900, 130);

    webcam = createCapture(VIDEO);
    webcam.size(450, 450);

    posenet = ml5.poseNet(webcam, Modelloaded);

    posenet.on('pose', gotPoses);
}

function Modelloaded() {
    console.log("Model Loaded !!!!!!!!!!!!!");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX : " + NoseX + " NoseY : " + NoseY);
    }
}