class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = radius;
        this.image = loadImage("Pic/paper.png");
        //this.image.scale = 5;
        World.add(world, this.body);

    }
    display(){
     var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.radius);
      pop();
    }
}