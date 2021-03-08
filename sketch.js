//Create variables here
var dog , happyDog , database , foodS , foodStock ;


function preload()
{
  //load images here
  dogImg =  loadImage("images/shadow dog.jpg");
  happyDogImg = loadImage("images/happy shadow.jpg");
  eatingDog = loadImage("images/eating shadow.jpg");
  //eatingDog.scale = 0.5 ;
}

function setup() {
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readstock);
  createCanvas(1000,1000);
  dog =  createSprite(500,500);
  dog.addImage(dogImg);
  dog.scale = 0.7
  
}


function draw() {  
background("white");
textSize(20);
fill("black");
text("Hey Hi Everyone I am Shadow !! ",350,50);
textSize(20);
fill("black");
text("Press the UP_ARROW to play with shadow ",350,890);
fill("black");
text("Press the DOWN_ARROW to feed shadow ",300,950);
drawSprites();  
  //add styles here
  if (keyWentDown(UP_ARROW)){
    writestock(foodS);
    dog.addImage(happyDogImg);
  //  fill("black");
    //text("It is playing time !!",350,50);
   // dog.scale = 0.2 ;
  }

  if (keyWentDown(DOWN_ARROW)){
    writestock(foodS);
    dog.addImage(eatingDog);
  }

}

function readstock(data){
  foodS = data.val();
}

function writestock(x){
  database.ref("/").update({
    food:x 
  })
}


