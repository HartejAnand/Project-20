var garden,gardenImg;
var cat,catSitting,catWalking,catStanding;
var mouse,mouseCheese,mouseDancing,mouseStanding;

function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");

    catSitting=loadAnimation("images/cat1.png");
    catWalking=loadAnimation("images/cat2.png","images/cat3.png");
    catStanding=loadAnimation("images/cat4.png");

    mouseCheese=loadAnimation("images/mouse1.png");
    mouseDancing=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseStanding=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden=createSprite(500,400);
    garden.addImage(gardenImg);
    
    cat=createSprite(800,600);
    cat.addAnimation("sitting",catSitting);
    cat.addAnimation("walking",catWalking);
    cat.addAnimation("standing",catStanding);
    cat.scale=0.25;

    mouse=createSprite(100,650);
    mouse.addAnimation("holding",mouseCheese);
    mouse.addAnimation("dancing",mouseDancing);
    mouse.addAnimation("standing",mouseStanding);
    mouse.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.changeAnimation("standing",catStanding);
        mouse.changeAnimation("standing",mouseStanding);
        cat.velocityX=0;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    mouse.changeAnimation("dancing",mouseDancing);
    if(keyDown("left")){
        cat.changeAnimation("walking",catWalking);
        cat.velocityX=-3;
    }
}
