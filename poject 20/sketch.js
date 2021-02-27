var cat,mouse
var background
function preload() {
    //load the images here
cat.loadImage=("cat1.png","cat2.png","cat3.png","cat4.png")
mouse.loadImage=("mouse1.png","mouse2.png","mouse3.png","mouse4.png")
background.loadImage=("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat.createSprite=(700,200,50,50);
cat.addImage=(cat1.png)

mouse.createSprite=(300,200,50,50);
mouse.addImage=(mouse1.png)
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catlastImage",cat3.png)
        cat.changeAnimation("catlastImage")
        }
    if(cat.istouching(mouse)){
    mouse.addAnimation("mouseTeasing",mouse3.png)
    mouse.changeAnimation("mouseTeasing")
    cat.addAnimation("catSitting",cat4.png)
    cat.changeAnimation("catSitting")
    }
    drawSprites();
}

function keyPressed(){

if(keyCode ===  LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("catRunning",cat2.png)
cat.changeAnimation("catRunning")
}
}
