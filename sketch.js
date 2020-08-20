var bananaimage,obstacleimage,backimage,score,obstaclegroup

function preload(){
  
monkey = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

backimage = loadImage("jungle.png");
  
obstacleimage = loadImage("stone.png");
  
bananaimage = loadImage("banana.png");  
  
}

function setup() {
 player = createSprite(50,340,20,50)
  player.addAnimation("run",monkey)
  player.scale=0.1
  
  createCanvas(400, 400);
  
  back = createSprite(200,200,400,400);
  back.addImage(backimage);
  back.scale=1.5
  back.velocityX=-4
  back.x=back.width/2
  ground = createSprite(200,350,400,10)
  ground.velocityX=-4
  ground.x=ground.width/2
  ground.visible=false
  obstaclegroup=new Group()
  bananagroup=new Group()
}

function draw() {
  
background("white")
  
spawnobstacles()
  spawnbanana()
  if (keyDown("space")&& player.y >= 205) {
      player.velocityY = -5;
    }
   player.velocityY = player.velocityY + 0.8       
  
 if(ground.x<100){
  ground.x=ground.width/2 
 }
  if(back.x<100){
  back.x=back.width/2
 }
  player.collide(ground ); 
  switch(score){
   
       case 10:player.scale=0.12
      break;
       case 20:player.scale=0.14
      break; 
      case 30:player.scale=0.16
      break;
      case 40:player.scale=0.18
      break;
      default:break;
  }
 
  
 drawSprites()
  stroke("white")
  textSize(20)
  fill("white");
  text("Score:"+score,500,50);
}
  function spawnbanana (){
  if (frameCount % 60 === 0) {
    var banana= createSprite(600, 300, 40, 10);
   banana.y = Math.round(random(280, 320))
    banana.scale = 0.4;
    banana.velocityX = -3;
    if(bananagroup.isTouching(player)) {
    player.scale=1.5;
  }                              

    //assign lifetime to the variable
    banana.lifetime = 134;

    //adjust the depth
    banana.depth = player.depth
  player.depth = player.depth + 1;
    bananagroup.add(banana)
   if(bananagroup.isTouching(player)){
      player.scale=1.5                      
  }}           
}
  function spawnobstacles (){
  if (frameCount % 60 === 0) {
    var stone = createSprite(600, 300, 40, 10);
    stone.addImage(obstacleimage)
   stone.y = Math.round(random(280, 320))
    stone.scale = 0.2;
    stone.velocityX = -5;

    //assign lifetime to the variable
    stone.lifetime = 200;
     if(obstaclegroup.isTouching(player)){
    player.scale=0.5
  }        
    
                  
    //adjust the depth
    stone.depth = player.depth
  player.depth = player.depth + 1;
    obstaclegroup.add(stone)
  }}