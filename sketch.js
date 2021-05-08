var canvas, object1, box;
var object2, object3, object4;
var music;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

object1 = createSprite(100, 585, 150, 20);
object1.shapeColor = "pink";
object2 = createSprite(290, 585, 150, 20);
object2.shapeColor = "blue";
object3 = createSprite(490, 585, 150, 20);
object3.shapeColor = "red";
object4 = createSprite(690, 585, 150, 20);
object4.shapeColor = "purple";

    //create box sprite and give velocity

box = createSprite(random(20, 750), 300, 50, 50);
box.shapeColor = "white";
box.velocityX = 2;
box.velocityY = 2;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);
      

    //add condition to check if box touching surface and make it box
    
    if (object3.isTouching(box)){
        box.shapeColor = "white";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if (object1.isTouching(box) && box.bounceOff(object1)){
        box.shapeColor = "pink";
    }

    if (object2.isTouching(box) && box.bounceOff(object2)){
        box.shapeColor = "blue";
    }

    if (object3.isTouching(box) && box.bounceOff(object3)){
        box.shapeColor = "red";
    }

    if (object4.isTouching(box) && box.bounceOff(object4)){
        box.shapeColor = "purple";
    }

    
    drawSprites();
}
