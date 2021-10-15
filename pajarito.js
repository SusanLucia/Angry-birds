class Pajarito extends BaseClass  {
 constructor(x,y){
  super(x,y,65,65);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");
    this.trayectoria = [];
    
  }
  display(){
    //var pos =this.body.position;
    //pos.x = mouseX; 
    //pos.y = mouseY;
   super.display();
   if(this.body.velocity.x>10 && this.body.position.x>200){
    var posiciones = [this.body.position.x,this.body.position.y];
    this.trayectoria.push (posiciones);
   }
  
   for(var i = 0; i<this.trayectoria.length; i++){
     image(this.smoke,this.trayectoria[i][0],this.trayectoria[i][1])
   }
  }
};
