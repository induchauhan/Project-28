class string
{
    constructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.008,
            length:10
        }
       this.pointB=pointB;
        this.sling=Constraint.create(options);
        World.add(world,this.sling);
    }
    attach(body)
    {
        this.sling.bodyA=body;
    }
   fly()
   {
        this.sling.bodyA=null;
   }
  
    display()
    {
       if(this.sling.bodyA){
        var p1=this.sling.bodyA.position;
        var p2=this.pointB;
        push();
        strokeWeight(2);
        stroke(48,22,8);
        line(p1.x,p1.y,p2.x,p2.y);
        pop();
       }
    }

};