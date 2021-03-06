class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;



    if(this.body.velocity.x>10 && this.body.position.x>200){
      
      var position = [this.body.position.x,this.body.position.y];
      this.trajectory.push(position);

    }

    for(var r = 1;r<this.trajectory.length;r++){
      image(this.smokeImage,this.trajectory[r][0],this.trajectory[r][1]);
    }

    super.display();
  }
}
