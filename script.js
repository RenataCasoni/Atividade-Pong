let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let vxBolinha = 8;
let width = 1500;
let vyBolinha = 10;
let heigth = 680;
let raio = diametro / 2;
let x1 = 10;  
let y1 = 150; 
let comprimento = 10; 
let largura = 100; 

let x2 = 1480;
let y2 = 150; 

function setup() {
    createCanvas(width, heigth);
}

function draw() {
    background(0);
    criarBolinha();

   
    xBolinha += vxBolinha;
    yBolinha += vyBolinha;

    if (xBolinha + raio > width || xBolinha < 0) {
        vxBolinha *= -1;
    }

    if (yBolinha + raio > heigth || yBolinha < 0) {
        vyBolinha *= -1;
    }

    rect(x1, y1, comprimento, largura); 
    rect(x2, y2, comprimento, largura); 

    if (keyIsDown(UP_ARROW) === true && y1 > 0) {
        y1 -= 10;
    }

    if (keyIsDown(DOWN_ARROW) === true && y1 < 580) {
        y1 += 10;
    }

    if (keyIsDown(87) === true && y2 > 0) { 
        y2 -= 10;
    }

    if (keyIsDown(83) === true && y2 < 580) { 
        y2 += 10;
    }

    if (colidiu(x1, y1, comprimento, largura, xBolinha, yBolinha, raio)) {
        if (xBolinha + raio > x1 && xBolinha - raio < x1 + comprimento) {
            vxBolinha *= -1;
        }
        if (yBolinha + raio > y1 && yBolinha - raio < y1 + largura) {
            vyBolinha *= -1;
        }
    }

    if (colidiu(x2, y2, comprimento, largura, xBolinha, yBolinha, raio)) {
        if (xBolinha + raio > x2 && xBolinha - raio < x2 + comprimento) {
            vxBolinha *= -1;
        }
        if (yBolinha + raio > y2 && yBolinha - raio < y2 + largura) {
            vyBolinha *= -1;
        }
    }
}

function colidiu(xR, yR, wR, hR, xB, yB, raioB) {
    let dentroHorizontal = xB + raioB > xR && xB - raioB < xR + wR;
    let dentroVertical = yB + raioB > yR && yB - raioB < yR + hR;

    return dentroHorizontal && dentroVertical;
}

function criarBolinha() {
    fill(255);
    circle(xBolinha, yBolinha, diametro);
}

function incluirPlacar(){
    fill(255);
    text(meuspontos);
    text(pontosDoOponente, 321, 26);
}