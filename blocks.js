class Block {
  constructor(x, y, num) {
    var options = {
      restitution: 0.3
    }
    this.body = Matter.Bodies.rectangle(x, y, 25, 35, options);
    Matter.World.add(world, this.body);
    this.Visibility = 255
    this.num = num;
  }

  scorecount(){
    score=score+1;
    this.num=null;
  }

  display() {
    if (this.body.speed < 8) {
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      rect(0, 0, 25, 35);
      pop();
    } else {
      Matter.World.remove(world, this.body);
      push();
      if(this.num===1){
      this.scorecount();
      }
      this.Visibility = this.Visibility - 5;
      tint(255, this.Visibility)
      pop();
    }
  }
}