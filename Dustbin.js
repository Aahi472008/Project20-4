class DustbinClass{
    constructor(x,y){
      
        }
        display(){
            var pos =this.body.position;
            rectMode(CENTER);
            fill("red");
            rect(pos.x, pos.y, this.width, this.height);
        }
    }
}