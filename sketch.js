var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var Person1,Person2,Person3,Person4,Persons
var line1,line2,line3,line4
var Track

function preload() {
  
Track = loadImage("images/Track.jpg")






}



function setup(){

  canvas = createCanvas(displayWidth+20,displayHeight-20);
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
  }



}
