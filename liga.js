class Liga {
constructor(bodyA,pointB){
    var options = {
    bodyA : bodyA,
    pointB : pointB,
    length : 2,
    stiffness : 0.04
   }
   this.resortera1 = loadImage ("sprites/resortera1.png");
   this.resortera2 = loadImage ("sprites/resortera2.png");
   this.resortera3 = loadImage ("sprites/resortera3.png");
   this.pointB = pointB;
   this.cadena = Constraint.create (options);
   World.add(world, this.cadena);
}
fly(){
this.cadena.bodyA = null;
}
adjunto(body){
this.cadena.bodyA = body;
}
display(){
    image(this.resortera1,200,20)
    image(this.resortera2,170,20)
    if (this.cadena.bodyA){
    var pointA = this.cadena.bodyA.position;
    var pointB = this.pointB;
    push();
    stroke(48,22,8);
    if (pointA.x<200){
        strokeWeight (6);
        line (pointA.x-25,pointA.y,pointB.x-10,pointB.y);
        line (pointA.x-25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.resortera3,pointA.x-30,pointA.y-10,10,25);
    }
    else{
        strokeWeight (3);
        line (pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line (pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.resortera3,pointA.x-30,pointA.y-10,10,25);
    }
     pop();
    }
    }
}
//async = funcion asincronica
//await = Esperar 
//slice = para ingresar 
