// COMISION 5
// GUADALUPE VILLALONGA UNGAR, 85225/9
// TP1
// https://youtu.be/cyhvh9N-Of8

let opArt ;
let colorCirculos;
let centroX;
let centroY ;
let numeroDeCirculos;
let espaciado ;
let radioCentral ;
let cambioDeColor = false;
let distancia ;

function preload() {
  opArt = loadImage ("assets/opArt.jpg");
}

function setup() {
  loadImage ("assets/opArt.jpg");
  createCanvas (800, 400);
  colorCirculos = color(254, 47, 22);
  centroX = 6 * width /8;
  centroY = 2 * height /4;
  numeroDeCirculos = 24;
  espaciado = (min(width * 1.8, height) * 2) / numeroDeCirculos /4;
  radioCentral = espaciado * 2;
}

function draw() {
  background (169, 223, 129);

  // funcion que no retorna un valor
  dibujandoOpArt();
  
  // Cambia el fondo a rojo si el mouse está cerca del centro
  distancia = calcularDistanciaAlCentro();
  if (distancia < 100) {
    background(169, 223, 129); 
  }
  image(opArt, -6, 0, width / 2, height /1);
}

//funcion que retorna un valor
function calcularDistanciaAlCentro() {
  return dist(mouseX, mouseY, centroX, centroY); 
}


function mouseClicked() {
  colorCirculos = color(254, 47, 22);
}

function keyPressed() {
  if (key == 'c' || key == 'c') {
    for ( let i = 0; i < numeroDeCirculos; i++) {
      let   radio = espaciado * i + radioCentral / 6;
      distancia = dist(mouseX, mouseY, centroX, centroY);

      if (distancia >= radio * 1.8) {
        colorCirculos = color(random(255), random(255), random(255));
      }
    }
  }
}
