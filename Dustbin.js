class Dustbin{
    constructor(x,y,width,height,factor){
        var options={
            isStatic:true         
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.factor = factor;
        this.image = loadImage("Pic/dustbingreen.png");
        //this.image.scale = 1.5;
        World.add(world, this.body);

    }
/*     display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        pop();
    } */

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height*this.factor);
        pop();
      }
}