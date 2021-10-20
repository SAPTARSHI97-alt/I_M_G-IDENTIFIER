img = "";
status = "";
function preload() {
img = loadImage('spectacles.jpeg');
}
function setup() {
    canvas = createCanvas(600, 400);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status:detecting objects";


}

function draw(){
    image(img, 0, 0, 600, 400);
    fill("#00FF00");
    text("Spectacles", 45, 75);
    noFill();
    stroke("#00FF00");
    rect(30, 60, 450, 350);

}

function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }

}

function addUserback5() {

    window.location = "index.html";
}
