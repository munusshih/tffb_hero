const { Engine, World, Bodies, Composite, Render, Mouse, MouseConstraint, MatterAttractors } = Matter;
const path = "4632.90610302337 1606.48993231831 4635.85388558808 1629.72020113174 4658.26438664809 1720.00156837195 4718.04538647838 1741.99874750627 4838.3844299161 1742.78983467671 4906.11559040485 1741.02063607217 4928.22341771857 1664.33395523638 4864.19268876427 1609.42015896159 4759.94170930749 1534.46422052224";
const illustrationPath = "49.63 1.21 40.08 6.5 32.77 16.31 35.59 37.09 39.21 42.66 19.96 54.55 9.65 67.52 .51 106.26 4.33 129.2 6.87 155.31 3.5 168.28 7.66 178.09 17.21 185.9 16.36 202.25 17.58 218.44 19.22 226.87 18.02 269.43 22.68 278.07 20.12 282.52 12.48 288.27 13.15 299.35 26.89 306.23 63.47 302.01 67.95 295.28 80.32 299.13 121.55 296.69 129.49 284.53 131.97 285.83 136.85 296.69 164.34 296.25 171.21 288.05 167.51 275.38 171.21 269.65 169.84 199.37 174.29 186.96 173.01 174.69 175.2 160.57 172.22 131.13 170.19 118.28 172.04 113.92 172.77 103.16 166.34 92.07 156.87 86.63 160.3 77.31 160.79 67.85 156.21 59.71 146.89 53.05 131.92 49.05 125.55 50.75 117.23 54.55 111.9 63.42 109.67 67.15 107 63.51 97.63 50.31 91.63 43.24 85.78 41.53 87.86 29.77 83.15 13.98 75.83 3.01 61.03 .5 49.63 1.21";

const newP = "49.6 1.2 40.1 6.5 32.8 16.3 35.6 37.1 39.2 42.7 20 54.5 9.7 67.5 .5 106.3 4.3 129.2 6.9 155.3 3.5 168.3 7.7 178.1 17.2 185.9 16.4 202.3 17.6 218.4 19.2 226.9 18 269.4 22.7 278.1 20.1 282.5 12.5 288.3 13.1 299.4 26.9 306.2 63.5 302 67.9 295.3 80.3 299.1 121.6 296.7 129.5 284.5 132 285.8 136.9 296.7 164.3 296.3 171.2 288 167.5 275.4 171.2 269.6 169.8 199.4 174.3 187 173 174.7 175.2 160.6 172.2 131.1 170.2 118.3 172 113.9 172.8 103.2 166.3 92.1 156.9 86.6 160.3 77.3 160.8 67.9 156.2 59.7 146.9 53.1 131.9 49 125.5 50.8 117.2 54.5 111.9 63.4 109.7 67.2 107 63.5 97.6 50.3 91.6 43.2 85.8 41.5 87.9 29.8 83.1 14 75.8 3 61 .5 49.6 1.2";

const newp2 = "178.9 .5 168 3.5 163.6 8.2 154.4 12.4 151 21.7 151 26.3 145 30.6 136.3 29.4 129.4 25.4 113 29.2 99.2 36.8 88.9 43.8 82.2 51.2 83.9 59.6 91.6 63.2 97.9 63.2 99.7 67.5 84.5 76 73.5 85.5 60.6 102.7 39.5 128.5 19.2 147.4 4.4 152 .5 158.3 4.2 168.8 19.7 173.3 32.1 167.6 43.3 162.2 72.8 133.1 74.3 134.2 67.4 144 44.7 169.8 36.3 178.5 29.3 185 29.3 196.2 27.3 200.1 34.5 212.4 53.4 209.2 60.1 206.9 62 216.9 62.6 225 62.7 231.5 69.4 239.5 80.9 239.5 87 229.2 87.7 223.4 141.4 163.1 147.8 151.6 160.1 149.4 180.6 130.9 189.3 115.6 189.3 105.5 186.6 95.6 192.7 92.9 201.9 92.1 208.4 86.5 216 80.2 216.9 71.3 214.5 56.5 204.1 45.7 191.6 43.1 187.3 43.9 189.4 38.8 194.2 35.4 202.1 25.2 201.9 13.9 191.9 2.9 178.9 .5";

let newp3 = "m68.6,1l-11.1,7.8v16.6l1.1,8.2-3.3,8.6-7.8,17.1-2.2,16.8-5.5,10.1-10.4,4.4-8.2,20.7-14.6,19.1s-6,10-5.5,12.2,9.3,41.2,9.3,41.2l12.4,12,29.2,20.8,11,7.1,11.5,28.8s4.2,31.9,3.9,32.6,11.4,9.2,11.4,9.2l29.5-4.8,9.9,9.2s4,12.9,5.9,15.6,3.9,5.5,9.7,4.4,26.6-17.9,26.6-17.9c0,0,4.7-3.7,8.9,0s9.8,7,9.8,7l10.8-7,18.2-15.4,11.1-1.7h13.3l22.4-12.7,18.6-10.2,15.7-6.9,12.5-11,25.2-7.5,14.6-14.9,7.5-6.9,14.9-15.1,16.2-11.1,18.6-10.9,18.6-30.8,6-32.9,3.8-19.7s2.4-9.3,2.2-10.6l-2.4-9.9-1-25.1-13.2-13.1-50.1-16.1-33.7-8.8-27.2,5.3-27.1,13.5-4.7,8.4h-8.2l-8.2-5.7-2.9-6.2-5.2-4.2-12.1-5.8-20.4.9-12,9.3-5.2,6.7-2.5,12.6-7.8,9.9-8.8,18.4-.9,9.9s-4.4.7-5.3,0-10.6-12.4-10.6-12.4l-12.8.9-3.9,8.2-4.4-6.7-5.8-11.7-5.1-12.2-2-7.8-10.4-7.5-9.6,3.5-12.3-2.3-11-6.1s-8.4-9.1-8.7-10.1-4.3-13.4-4.3-13.4l-4.8-4.2h-7Z";

newp3 = "51.1 .5 36.9 13.6 9.8 19.3 .5 35 3.6 97.6 25.8 100.1 27 124 14.9 145 14 189.1 6.6 202.7 .5 241.3 6.6 276.3 17.4 283.1 17.4 324.9 8.9 357.7 4.5 374.4 19.1 385.8 75.3 388.7 114 382.2 118.3 367.4 108.6 355 104.2 319.8 104.2 280.7 118.3 269.6 125.3 254.8 123.3 210.8 108.6 190.5 108.6 178.2 112.1 162.6 104.2 122.1 104.2 102.8 122.4 97.6 129.1 85.3 129.1 29.6 118.3 21.6 97.8 21.6 92.8 26.4 88.6 8.7 62 .5 51.1 .5";

let num;
let mConstraint;
let engine;
let render;
let world;
let b1, b2, b3, b4, b5, b6;
let boxes = [];
let ground, wall1, wall2, ceil;
let bodies = [];
let illu, illu2, bg2, hero, illu3, illu4;
const mat = document.getElementById("mat");
Matter.use(
  // 'matter-attractors' // PLUGIN_NAME
);
function preload() {
  illu = loadImage('illustration.png');
  illu2 = loadImage('illu-2.png');
  bg2 = loadImage('bgReveal.png');
  hero = loadImage('hero1.jpg');
  illu3 = loadImage("newp2.png");
  illu4 = loadImage("newp7.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  frameRate(30);
  // create an engine
  engine = Engine.create();
  world = engine.world;
  num = 1;
  world.gravity.x = Math.sin(num / 1000) / 100;
  world.gravity.y = Math.cos(num / 1000) / 100;
  // Engine.run is deprecated
  ground = new Boundary(width / 2, height + 50, width, 100);
  wall1 = new Boundary(-50, height / 2, 100, height);
  wall2 = new Boundary(width + 50, height / 2, 100, height);
  ceil = new Boundary(width / 2, 0 - 50, width, 100);


  Composite.add(world, ground);
  Composite.add(world, wall1);
  Composite.add(world, wall2);
  Composite.add(world, ceil);

  render = Render.create({
    element: mat,
    engine: engine
  });

  b1 = new Body(Math.random() * width, Math.random() * height, newP, illu2);
  b2 = new Body(Math.random() * width, Math.random() * height, newp2, illu3);
  b3 = new Body(Math.random() * width, Math.random() * height, newp3, illu4);
  b4 = new Body(Math.random() * width, Math.random() * height, newP, illu2);
  b5 = new Body(Math.random() * width, Math.random() * height, newp2, illu3);
  b6 = new Body(Math.random() * width, Math.random() * height, newp3, illu4);



  //mouse
  let canvasMouse = Mouse.create(canvas.elt);
  canvasMouse.pixelRatio = pixelDensity();
  let mOptions = {
    mouse: canvasMouse
  }
  mConstraint = MouseConstraint.create(engine, mOptions);
  Composite.add(world, mConstraint);


  //     // create a body with an attractor
  // var attractiveBody = Bodies.circle(
  //     width/2,
  //     height/2,
  //     50,
  //     {
  //       render: {
  //         fillStyle: `rgb(20,240,240)`,
  //         strokeStyle: `rgb(240,240,240)`,
  //         lineWidth: 0
  //       },
  //       isStatic: true,
  //       plugin: {
  //         attractors: [
  //           function(bodyA, bodyB) {
  //             return {
  //               x: (bodyA.position.x - bodyB.position.x) * 1e-6,
  //               y: (bodyA.position.y - bodyB.position.y) * 1e-6,
  //             };
  //           }
  //         ]
  //       }
  //     });

  // World.add(world, attractiveBody);

  // console.log(attractiveBody);

}



function draw() {
  clear()

  Engine.update(engine);
  b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();
  world.gravity.x = Math.sin(num / 700) / 60;
  world.gravity.y = Math.cos(num / 700) / 60;
  num += 1.7;
  // drawingContext.clip(); // p5clip
  // image(bg2,0,0,width,height); // p5clip
  // drawingContext.restore(); // p5clip
  fill('white');
  // rect(0,0, width, height);
  ground.show();
}