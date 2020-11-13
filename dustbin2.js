
class DustBin1
{
    constructor(x , y , width , height)
    {
        var options = {

            friction: 1.0,
            isStatic: true


        }
        
        this.body = Bodies.rectangle(x , y , width , height ,options);
        this.width = width;
        this.height = height;
        this.image  = loadImage('sprite/dustbin.jpg');
     
        World.add(world , this.body)

    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x , pos.y);
        fill("white")
        rectMode(CENTER);
        // rect(0 , 0 , this.width , this.height);
        
        imageMode(CENTER);
        image(this.image, 0 , 0 , 150 ,150)
        
        pop();
    }
}

