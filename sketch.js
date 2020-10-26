var Engine = Matter.Engine;
var Worlds = Matter.Worlds;
var Bodies = Matter.Bodies;

var engine, world;

var ground;

function setup(){
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

    ground = new GROUND(width/2, height, width, 50);
}

function draw(){
    Engine.update(engine);

    background(255);

    ground.displayGround();
}