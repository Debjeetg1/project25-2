class PaperBall
{
    constructor(x , y , radius)
    {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
         
        this.image = loadImage('sprite/paper.jpg')
        this.body = Bodies.circle(x , y , radius , options);
        this.radius = radius;
        

        World.add(world , this.body);
    
    }

    display()
    {
        var pos  = this.body.position;
        
        push();
        translate(pos.x  , pos.y);
        strokeWeight(4);
        stroke("green");
        fill("white");
        // circle(0 ,0 , this.radius);
        imageMode(CENTER);
        image(this.image , 0 , 0 , 50 ,50)

    
        pop();
    }
}