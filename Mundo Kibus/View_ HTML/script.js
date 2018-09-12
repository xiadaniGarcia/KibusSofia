var matrixO ={};
for (var i=0;i<15;i++){
    for (var j=0;j<15;j++){
      matrixO[i,j] = 0;
    }
}

var bressenhamLine = [];
function inicialize(s) {
  //inicializa cuadricula
  var matrix={};

  for (var i=0;i<15;i++)
    for (var j=0;j<15;j++)
      matrix [i,j]= s.rect(j*39, i*39, 38, 38, 0, 0).attr('fill','green');

}

function createMap(porcentage){
  //Calcula los cuadros que tendrán obstaculo.
  var amount = parseInt((225*porcentage)/100);

  //Genera obstaculos aleatorios
  for(var i = 0; i < amount; i++){
    var x = parseInt(Math.random()*15);
    var y = parseInt(Math.random()*15);

    matrixO[x,y] = 1;
    x = x*39;
    y = y*39;
    var c = s.image("imagenesChidas/amigo.png",x, y, 38, 38);

  }

}

function bressenham(house,kibus,s){
  pf = house;
  pi = kibus;


  //bressenhamLine.push(pi);
  dx = parseInt(pf[0]) - parseInt(pi[0]);
  sx = (dx < 0) ? -1 : 1;
  dy = parseInt(pf[1]) - parseInt(pi[1]);
  sy = (dy < 0) ? -1 : 1;

  if (Math.abs(dy) < Math.abs(dx)){
    m = dy/dx;
    b = parseInt(pi[1]- m*pi[0]);

    while(pi[0] != pf[0]){
      newX = parseInt(pi[0]);
      newY = parseInt(m*pi[0] +b);
      pi[0] += sx;
      point = [newX,newY];
      bressenhamLine.push(point);
    }
  }
  else{
    m = dx/dy;
    b = parseInt(pi[0]- m*pi[1]);

    while(pi[1] != pf[1]){
      newX = parseInt(m* pi[1]+b);
      newY = parseInt(pi[1]);
      pi[1] += sy;
      point = [newX,newY];
      bressenhamLine.push(point);
    }

  }
  bressenhamLine.push(pf);
  console.log(bressenhamLine);
  //var c = s.image("img/Stitch2.png",11*39, 14*39, 38, 38);
  //moveKibus(s);
  trajectory(s);
}

function wait(ms)
{
  var d = new Date();
  var d2 = null;
  do { d2 = new Date(); }
  while(d2-d < ms);
}

function moveKibus(){
  //inicialize(s);
  xi = origin[0]*39;
  yi = origin[1]*39;
  xf = destination[0]*39;
  yf = destination[1]*39;
  console.log("mover al kibus");
  s.rect(xi, yi, 38, 38, 0, 0).attr('fill','green');
  var c = s.image("img/Stitch2.png",xf, yf, 38, 38);
}
function trajectory(s){
  actualX = bressenhamLine[0][0];
  actualY = bressenhamLine[0][1];
  actual = [actualX,actualY];

  for(var i = 0; i < bressenhamLine.length;i++){
    destinationX = bressenhamLine[i][0];
    destinationY = bressenhamLine[i][1];
    destination =[destinationX,destinationY];
    //console.log(actual,destination);
    wait(2000);
    moveKibus(actual,destination,s);
    //actual = destination;



  }
}
