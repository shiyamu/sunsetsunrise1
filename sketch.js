const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg, hr;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    backgroundImg = loadImage("sunrise1.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(backgroundImg);
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    textAlign(CENTER);
    textSize(32);
    if(hr>12 && hr<=24){
        text(hr-12 + " PM", 600, 100)
    }
    else{
        text(hr + " AM", 600, 100)
    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    console.log(response);
    var responseJSON = await response.json();
    console.log(responseJSON);
    var date_time = responseJSON.datetime;
    console.log(date_time);
     hr = date_time.slice(11,13);
    console.log(hr);
    

    if(hr >= 04 && hr <= 06){
        var bg = "sunrise1.png";
    }
    else if(hr >= 06 && hr <= 08) {
        var bg = "sunrise2.png";
    }
    else if(hr >= 08 && hr <= 10) {
        var bg = "sunrise3.png";
    }
    else if(hr >= 10 && hr <= 12) {
        var bg = "sunrise4.png";
    }
    else if(hr >= 12 && hr <= 14) {
        var bg = "sunrise5.png";
    }
    else if(hr >= 14 && hr <= 16) {
        var bg = "sunrise6.png";
    }
    else if(hr >= 16 && hr <= 18) {
        var bg = "sunset7.png";
    }
    else if(hr >= 18 && hr <= 20) {
        var bg = "sunset8.png";
    }
    else if(hr >= 20 && hr <= 22) {
        var bg = "sunset9.png";
    }
    else if(hr >= 22 && hr <= 24) {
        var bg = "sunset10.png";
    }
    else if(hr >= 24 && hr <= 02) {
        var bg = "sunset11.png";
    }
    else {
        var bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);
}
