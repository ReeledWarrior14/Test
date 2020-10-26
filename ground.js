// class GROUND {
//     constructor(x, y, width, height){
//         this.body = Bodies.rectangle(x, y, width, height);
//         Worlds.add(world, this.body);
//         this.width = width
//         this.height = height;
//     }

//     displayGround(){
//         var x = this.body.position.x;
//         var y = this.body.position.y;
//         rect(x, y, this.width, this.height);
//     }
// }

class GROUND {
    constructor(x, y, width, height){
        this.Mybody = Bodies.rectangle(x, y, width, height);
        Worlds.add(world, this.Mybody);
        this.width = width;
        this.height = height;
    }        
    displayGround(){
        var x = this.Mybody.position.x;
        var y = this.Mybody.position.y;
        push()
        fill('gray');
        rectMode(CENTER);
        rect(x, y , this.width, this.height);
        pop();
    }
}