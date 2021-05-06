var canvas;
var music;
var redbox;
var bluebox;
var greenbox;
var yellowbox;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     box=createSprite(random(20,750));
    box.width=50;
    box.height=50;
    box.shapeColor="white";
    box.velocityX=6;
    box.velocityY=7;
    redbox=createSprite(715,582,205,30);
    redbox.shapeColor="red";
    bluebox=createSprite(505,582,205,30);
    bluebox.shapeColor="blue";
    greenbox=createSprite(297,582,205,30);
    greenbox.shapeColor="green";
    yellowbox=createSprite(86,582,205,30);
    yellowbox.shapeColor="yellow";
    //yellowbox.velocityY=-6;


    //create box sprite and give velocity

}

function draw() {
    
    background(rgb(169,169,169));
    //create edgeSprite

           edges=createEdgeSprites();

           yellowbox.bounceOff(edges);
         //square  box.bounceOff(edges);
         

    //add condition to check if box touching surface and make it box
    
    if(redbox.isTouching(box)){
        box.shapeColor="red";
    }

    if(bluebox.isTouching(box)){
        box.shapeColor="blue";
    }

    if(greenbox.isTouching(box)){
        box.shapeColor="green";
        music.play();
    }
    if(yellowbox.isTouching(box)){
        box.shapeColor="yellow";
        box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }
    box.bounceOff(edges);
         box.bounceOff(redbox);
         box.bounceOff(bluebox);
         box.bounceOff(greenbox);
         box.bounceOff(yellowbox);

   
    drawSprites();
  
    
    
}
