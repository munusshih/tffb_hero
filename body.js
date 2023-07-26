class Body {
  constructor(x, y, path, img) {
    this.x = x;
    this.y = y;
    this.img = img;
    let options = {
      mass: Math.random(),
      friction: Math.random(),
      restitution: 0.6,
      render: {
        fillStyle: "blue",
        strokeStyle: 'red'
      },
    }

    this.vert = Matter.Vertices.fromPath(path);
    //console.log(this.vert);
    this.body = Bodies.fromVertices(this.x, this.y, this.vert, options, true)

    Composite.add(world, this.body);
  }

  show() {
    //console.log(this.body.vertices[0].x);
    let x, y;
    // drawingContext.save(); // p5clip
    // image(bg2,0,0,width,height); // p5clip
    beginShape();
    noStroke();
    fill("#E7196E");
    for (let i = 0; i < this.body.vertices.length; i++) {
      x = this.body.vertices[i].x;
      y = this.body.vertices[i].y;
      // if(i==this.body.vertices.length){
      //   x = this.body.vertices[0].x;
      //   y = this.body.vertices[0].y;
      // }
      vertex(x, y);
    }
    endShape();
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    scale(scalingFactor);
    rotate(angle);
    // rectMode(CENTER);
    // strokeWeight(1);
    // stroke(255)
    // fill('black');
    // rect(0, 0, 40, 40)
    // fill(0);
    imageMode(CENTER);
    image(this.img, 0, 0);
    imageMode(CORNER);
    pop();
    //     drawingContext.clip(); // p5clip
    // image(bg2,0,0,width,height); // p5clip
    // drawingContext.restore(); // p5clip
  }

}


//     drawingContext.save(); // p5clip
//     // for (let i = 0; i < bodies.length; i++) {
//     //     bodies[i].show();
//     // }
//   b1.show();
//   b2.show();
//   b3.show();

//     drawingContext.clip(); // p5clip
//     image(bg2,0,0,width,height); // p5clip
//     drawingContext.restore(); // p5clip