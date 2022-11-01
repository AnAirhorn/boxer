var box, score;
var boxPoor, boxNorm, boxSilver, boxGold, boxBlack, boxKing;
var titleScreen, titleScreenImg;
var cursor;
var gamestate = "START";

function preload(){
  titleScreenImg = loadImage("boxerTitle.png")
  boxPoor = loadImage("box1.png")
  boxNorm = loadImage("box.png");
  boxSilver = loadImage("box2.png")
  boxGold = loadImage("box3.png");
  boxBlack = loadImage("box4.png");
  boxKing = loadImage("box5.png");
}



function setup() {
  createCanvas(1000, 500);

  //Title Screen
  titleScreen = createSprite(500, 250)
  titleScreen.addImage(titleScreenImg);

  //Box
  box = createSprite(150, 230, 150, 150)
  box.shapeColor = "chocolate"
  box.addImage(boxPoor);
  box.scale = 0.3

  //Score
  score = 0
  
}

function draw() {
  background("#00A2E8");
  console.log("Update 1 - Glitch with 10,000 boxes fixed")
  if(gamestate === "START"){
    //visibility
    box.visible = false;
    titleScreen.visible = true;

    //exit
    if(keyDown("up") || keyDown("w")){
      gamestate = "PLAY"
      console.log("GAMESTATE IS NOW PLAY")
    }
  }

  if(gamestate === "PLAY"){
    titleScreen.visible = false
    box.visible = true

    //score
    fill("white")
    textSize(30)
    text("" + score + " boxes", 100, 100)
    if(keyWentDown("space")){
      boxClicked()
    }
    textSize(20)
    text("Press SPACE to obtain a box", 500, 100)
    text("After getting 30 boxes, you'll make 2 boxes per click", 400, 120)
    text("After getting 100 boxes, you'll make 5 boxes per click", 390, 140)
    text("After getting 500 boxes, you'll make 10 boxes per click", 390, 160)
    text("After getting 1000 and 10000 boxes, you're box/per click will grow.", 365, 180)
    
  }

  drawSprites();
}

function boxClicked(){
      score+= 1;
    
 
    //automatic Granny upgrade to 2x
    if(score >= 30 && score <= 100){
        score+= 1;
        box.addImage(boxNorm);
    }

    if(score >= 100 && score <= 500){
      score+= 4;
      box.addImage(boxSilver);
    }

    //automatic factory upgrade to 10x
    if(score >= 500 && score <= 1000) {
      score += 10;
      box.addImage(boxGold);
    }

    //automatic plant upgrade to 30x
    if(score >= 1000 && score <= 10000) {
        score += 30;
        box.addImage(boxBlack);
        
    }

    //automatic super factory upgrade to 1000x
    if(score > 10000) {
        score += 100;
        box.addImage(boxKing);
    }
}
