var world, engine;
var b1lock1, b2lock, b3lock, b4lock, platform1, polygon1, string1;
var dragnum = null;
var num = "onString";
var keynum = 1;
var score = 0;
var chances = 10;
var backgroundImg = 150;
var nightImg, dayImg;
var compdate = new Date();
var comphour= compdate.getHours();


function preload(){
    nightImg= loadImage("night.png");
    dayImg= loadImage("day.png");
    responsiveBackground();
}

function setup() {
    createCanvas(1200, 600);
    engine = Matter.Engine.create();
    world = engine.world;

    platform1 = new Platform(600, 610, 1200, 20);
    platform2 = new Platform(550, 400, 200, 15);
    platform3 = new Platform(950, 250, 150, 10);
    platform4 = new Platform(700, 150, 100, 10);
    platform5 = new Platform(1000, 350, 40, 10);
    polygon1 = new Polygon(200, 200, 30);
    string1 = new String(polygon1.body, { x: 200, y: 200 });

    //1,1st line
    b1lock1 = new Block(475, 300, 1);
    b1lock2 = new Block(500, 300, 1);
    b1lock3 = new Block(525, 300, 1);
    b1lock4 = new Block(550, 300, 1);
    b1lock5 = new Block(575, 300, 1);
    b1lock6 = new Block(600, 300, 1);
    b1lock7 = new Block(625, 300, 1);
    //1,2nd line
    b1lock8 = new Block(487, 260, 1);
    b1lock9 = new Block(512, 260, 1);
    b1lock10 = new Block(537, 260, 1);
    b1lock11 = new Block(562, 260, 1);
    b1lock12 = new Block(587, 260, 1);
    b1lock13 = new Block(612, 260, 1);
    //1,3rd line
    b1lock14 = new Block(500, 230, 1);
    b1lock15 = new Block(525, 230, 1);
    b1lock16 = new Block(550, 230, 1);
    b1lock17 = new Block(575, 230, 1);
    b1lock18 = new Block(600, 230, 1);
    //1,4th line
    b1lock19 = new Block(512, 200, 1);
    b1lock20 = new Block(537, 200, 1);
    b1lock21 = new Block(562, 200, 1);
    b1lock22 = new Block(587, 200, 1);
    //1,5th line
    b1lock23 = new Block(525, 170, 1);
    b1lock24 = new Block(550, 170, 1);
    b1lock25 = new Block(575, 170, 1);
    //1,6th line
    b1lock26 = new Block(537, 140, 1);
    b1lock27 = new Block(562, 140, 1);
    //1,7th line
    b1lock28 = new Block(550, 110, 1);


    //2,1st line
    b2lock1 = new Block(900, 200, 1);
    b2lock2 = new Block(925, 200, 1);
    b2lock3 = new Block(950, 200, 1);
    b2lock4 = new Block(975, 200, 1);
    b2lock5 = new Block(1000, 200, 1);
    //2,2nd line
    b2lock6 = new Block(912, 170, 1);
    b2lock7 = new Block(937, 170, 1);
    b2lock8 = new Block(962, 170, 1);
    b2lock9 = new Block(987, 170, 1);
    //2,3rd line
    b2lock10 = new Block(925, 140, 1);
    b2lock11 = new Block(950, 140, 1);
    b2lock12 = new Block(975, 140, 1);
    //2,4th line
    b2lock13 = new Block(937, 110, 1);
    b2lock14 = new Block(962, 110, 1);
    //2,5th line
    b2lock15 = new Block(950, 80, 1);

    //3, 1st line
    b3lock1 = new Block(675, 50, 1);
    b3lock2 = new Block(700, 50, 1);
    b3lock3 = new Block(725, 50, 1);

    //3, 2nd line
    b3lock4 = new Block(687, 25, 1);
    b3lock5 = new Block(712, 25, 1);
    //4, 3rd line
    b3lock6 = new Block(700, 0, 1);

    //5, 1st line
    b4lock1 = new Block(1000, 310, 1);
}

function draw() {
    background(backgroundImg);
    rectMode(CENTER);
    rect(120, 570, 210, 50);
    rect(1133, 26, 80, 37)
    Matter.Engine.update(engine);
    drag();
    push();
    fill("#663333");
    platform1.display();
    platform2.display();
    platform3.display();
    platform4.display();
    platform5.display();
    pop();
    string1.display();
    polygon1.display();
    //1,1st line
    push();
    fill("#FF7CBF");
    b1lock1.display();
    b1lock2.display();
    b1lock3.display();
    b1lock4.display();
    b1lock5.display();
    b1lock6.display();
    b1lock7.display();
    //1,2nd line
    fill("#6087FF");
    b1lock8.display();
    b1lock9.display();
    b1lock10.display();
    b1lock11.display();
    b1lock12.display();
    b1lock13.display();
    //1,3rd line
    fill("#00FF40");
    b1lock14.display();
    b1lock15.display();
    b1lock16.display();
    b1lock17.display();
    b1lock18.display();
    //1,4th line
    fill("#FFBC2F");
    b1lock19.display();
    b1lock20.display();
    b1lock21.display();
    b1lock22.display();
    //1,5th line
    fill("#61FFFF");
    b1lock23.display();
    b1lock24.display();
    b1lock25.display();
    //1,6th line
    fill("#FF8E8E");
    b1lock26.display();
    b1lock27.display();
    //1,7th line
    fill("#BB78FF");
    b1lock28.display();


    //2,1st line
    fill("#FFA5A5");
    b2lock1.display();
    b2lock2.display();
    b2lock3.display();
    b2lock4.display();
    b2lock5.display();
    //2,2nd line
    fill("#D2A5FF");
    b2lock6.display();
    b2lock7.display();
    b2lock8.display();
    b2lock9.display();
    //2,3rd line
    fill("#A5FFFF");
    b2lock10.display();
    b2lock11.display();
    b2lock12.display();
    //2,4rd line
    fill("#C7FF8E");
    b2lock13.display();
    b2lock14.display();
    //2,5rd line
    fill("#FFED3D");
    b2lock15.display();
    pop();

    push();
    //3, 1st line
    fill("#006666");
    b3lock1.display();
    b3lock2.display();
    b3lock3.display();
    //3, 2nd line
    fill("#333399");
    b3lock4.display();
    b3lock5.display();
    //3, 3rd line
    fill("#CC33CC");
    b3lock6.display();
    pop();

    push();
    fill("#CC0000");
    b4lock1.display();
    pop();

    chance0();
    score50();

    text("Press R to reset", 20, 575);
    text("Press Space to reposition the polygon", 20, 560);
    text("Press C to get the code", 20, 590);
    text("Score: " + score, 1100, 20);
    text("Chances: " + chances, 1100, 40);
}

function mouseDragged() {
    if (chances > 0 && keynum === 1) {
        dragnum = 1;
        keynum = null;
    }
}

function drag() {
    if (dragnum === 1 && num === "onString") {
        Matter.Body.setPosition(polygon1.body, { x: mouseX, y: mouseY });
    }
}

function mouseReleased() {
    if (dragnum === 1 && num === "onString" && chances > 0) {
        dragnum = null;
        num = "thrown";
        string1.throw();
    }
}

function keyPressed() {
    if (chances > 0) {
        if (keyCode === 32) {
            keynum = 1;
            string1.attach(polygon1.body);
            Matter.Body.setPosition(polygon1.body, { x: 200, y: 200 });
            num = "onString";
        }
    }
    if (keyCode === 82) {
        document.location.reload();
    }
    if (keyCode === 67) {
        codelink();
    }
}

function codelink() {
    window.location.href = "https://github.com/sagarsaurabhssnl/PRO-C32";
}

function chance0() {
    if (chances <= 0 && score < 50) {
        push();
        fill(color(random(0, 255), random(0, 255), random(0, 255)));
        textSize(30);
        text("Sorry but you are now out of chances", 50, 100);
        text("Press R to restart", 50, 150);
        pop();
    }
}

function score50() {
    if (score >= 50) {
        push();
        fill(color(random(0, 255), random(0, 255), random(0, 255)));
        textSize(30);
        text("Missoin Completed !", 50, 100);
        text("Press R to replay", 50, 150);
        pop();
    }
}

function responsiveBackground(){
    if(comphour>6&&comphour<18){
        backgroundImg= dayImg;
    }else{
        backgroundImg= nightImg;
    }
}