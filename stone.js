class stone
{
    constructor(x,y,width,height)
    {
        var options = {
            'isStatic':false,
            'restitution': 0,
            'friction':1.0,
            'density':1.2
        }
        this.body= Bodies.rectangle(x,y,width,height, options);
        this.width=width;
        this.image=loadImage("stone.png");
        this.height=height;
        World.add(world,this.body);

    }

    display()
    {
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}