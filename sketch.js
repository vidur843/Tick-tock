function setup() {
  createCanvas(800,800);
  angleMode(DEGREES)
}

function draw() { 
  background(0);
  translate(400,400);
  rotate(-90)
  //ellipseMode(RADIUS)
  //push()
  //rotate(-90)
  //stroke(255,0,0)
  //line(0,0,100,50)
  //pop()
  push()
  for(i=1;i<14;i++){
   
    rotate(30)
    stroke(255,200,0)
    strokeWeight(5)
    line(40,40,80,80)
    
  }
  pop()
  strokeWeight(8)
  noFill()

  let sec = second();
  let secAngle = map(sec, 0, 60, 0, 360);
  stroke(255,0,0)
  arc(0, 0, 300, 300, 0, secAngle)

  let min = minute();
  let minAngle = map(min, 0, 60, 0, 360);
  stroke(0,0,255)
  arc(0, 0, 280, 280, 0, minAngle)

  let hr = hour();
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  stroke(0,255,0)
  arc(0, 0, 260, 260, 0, hourAngle)

  //sec
  push()
  rotate(secAngle)
  stroke(255,0,0)
  line(0,0,100,0)
  pop()

  //min
  push()
  rotate(minAngle)
  stroke(0,0,255)
  line(0,0,75,0)
  pop()

  //hour
  push()
  rotate(hourAngle + minAngle/12)
  stroke(0,255,0)
  line(0,0,50,0)
  pop()

  stroke(255)
  point(0,0)
}
