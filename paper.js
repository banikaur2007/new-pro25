class Paper
{
constructor(x,y,radius){
this.body=Bodies.circle(x,y,radius-10, {restitution:0.3,
 isStatic:false,
 friction:0,
 density:1.2,
});
this.radius=radius;
this.image=loadImage("paper.png")
World.add(world, this.body);

	}
	display()
	{
	push()
	translate(this.body.position.x,this.body.position.y);
    angleMode(RADIUS);
    rotate(this.body.angle)
    stroke("purple")
	strokeWeight(4);
	fill("yellow")
    imageMode(RADIUS);
	image(this.image,0,0,this.radius, this.radius);
	pop()
			
	}

}
