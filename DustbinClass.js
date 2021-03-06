class dustbin{
    constructor(x,y,height,angle){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,20,height,options);
        this.width = 20;
        this.height = height; 
        Matter.Body.setAngle(this.body, angle);
        World.add(world,this.body); 
        
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill(189, 189, 189);
        rect(pos.x, pos.y, this.width, this.height)
        pop();
    }

}