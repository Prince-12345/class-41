var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1img , car2img , car3img , car4img, trackimg;
var form, player, game;
var playerRank = 0;
var cars, car1, car2, car3, car4;

//relative path 
//absolute path
//Absolute path example: C:\Documents\CarRacingGame\imag es\car1.png Relative path example: images\car1.png

function preload(){
car1img = loadImage("images/car1.png");
car2img = loadImage("images/car2.png");
car3img = loadImage("images/car3.png");
car4img = loadImage("images/car4.png");
trackimg = loadImage("images/track.jpg");
}



function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    fill("yellow");
  stroke("Black");
  strokeWeight(2);
  text(mouseX +" , "+ mouseY , mouseX , mouseY);
  }

  if(gameState === 2){
    game.end();
  }
  
}
