//variáveis da tela
let alturaTela = 400;
let larguraTela = 700;

//design
let largPlay = 160, altPlay = 80;
let posxPlay = larguraTela/2 - largPlay/2;
let posyPlay = alturaTela/2 - altPlay/2;

let posxT1 = larguraTela/2 - largPlay/2 - 75, posyT1 = alturaTela/2 - altPlay/2 - 20;
let posxT2 = posxPlay + 18, posyT2 = posyPlay + 52;
let posxT3 = posxPlay - 45, posyT3 = posyPlay + 110;

//retângulos da pontuação
let largRect1 = 160, altRect1 = 40;
let posxRect1 = larguraTela/2 - (largRect1/2);
let posyRect1 = 20;

let largRect2 = 70, altRect2 = 30;
let posxRect2 = posxRect1 + 5;
let posyRect2 = posyRect1 + 5;

let largRect3 = largRect2, altRect3 = altRect2;
let posxRect3 = posxRect1 + largRect1/2 + 5;
let posyRect3 = posyRect1 + 5;

let posxText1 = posxRect2 + 29;
let posyText1 = posyRect2 + 24;

let posxText2 = posxText1 + (posxRect3 - posxRect2);
let posyText2 = posyText1;

//bolinha
let diametro = 40;
let raio = diametro/2;
let posX = larguraTela/2;
let posY = alturaTela/2;
let velx = 4;
let vely = 6;

//raquete
let alturaRaq = 100;
let larguraRaq = 20;
let velRaq = 8;

//jogadores
let posx_j1 = 680;
let posy_j1 = 200;

let posx_j2 = 0;
let posy_j2= 200;

let pontos_j1 = 0;
let pontos_j2 = 0;

let iniciar = false;
let movimentar = false;

//inicialização da tela
function setup () {
  createCanvas(larguraTela, alturaTela);
}

//início da partida
function keyPressed() {
    if (keyCode == 32) {
      movimentar = true;
    }
}

//botão jogar
function mouseClicked() {
  if (mouseX > posxPlay && mouseX < posxPlay + largPlay && mouseY > posyPlay && mouseY < posyPlay + altPlay) {
    iniciar = true;
  }
}

//estilização da tela
function draw () {
  background(0);
  
  //botão play
  if (iniciar == false) {
  strokeWeight(15);
  stroke("#2E64FE");
  fill(0);
  rect(10, 10, 680, 380);   

  strokeWeight(15);
  stroke("#FFFF00");
  fill(0);
  rect(40, 40, 620, 320);
  
  strokeWeight(15);
  stroke(255);
  fill(0);
  rect(70, 70, 560, 260);  
  
  noStroke();
  fill("#2E64FE");
  rect(posxPlay, posyPlay, largPlay, altPlay);
  
  textSize(40);
  noStroke();
  fill("#FFFF00");
  textFont('Comic Sans MS');
  text("JOGO DE PONG!", posxT1, posyT1);
  
  textSize(35);
  noStroke();
  fill(255);
  textFont('Comic Sans MS');
  text("JOGAR", posxT2, posyT2);
  
  textSize(18);
  noStroke();
  fill("#FFFF00");
  text("A game by Carol Santos, 2022", posxT3, posyT3)
  
  posx_j1 = 680;
  posy_j1 = 200;
  posx_j2 = 0;
  posy_j2= 200;
  }
  
  //início do jogo
  if (iniciar == true) {
  
  strokeWeight(20);
  stroke("#FFFF00");
  fill(0);
  rect(0, 0, larguraTela, alturaTela);
  
  //placar
  noStroke();
  fill(255);
  rect(posxRect1, posyRect1, largRect1, altRect1);
  
  noStroke();
  fill("#2E64FE");
  rect(posxRect2, posyRect2, largRect2, altRect2);
  
  noStroke();
  fill("#2E64FE");
  rect(posxRect3, posyRect3, largRect3, altRect3);
    
  noStroke();
  fill("#FFFF00");
  rect(larguraTela/2 - 5, 0, 10, alturaTela);
  
  //texto do placar
  textSize(25);
  noStroke();
  fill(0);
  text(pontos_j1, posxText2 + 5, posyText2);
    
  textSize(25);
  noStroke();
  fill(0);
  text(pontos_j2, posxText1 + 5, posyText1);
  
  //bolinha
  noStroke();
  fill("#FE5C00");
  circle(posX, posY, diametro)
  
  //raquetes
  noStroke();
  fill("#2E64FE");
  rect(posx_j2, posy_j2, larguraRaq, alturaRaq);
  
  noStroke();
  fill("#2E64FE");
  rect(posx_j1, posy_j1, larguraRaq, alturaRaq);
  
  //movimentação
  if (movimentar == true) {
    posX += velx;
    posY += vely;
  }
  else {
    //instruções
    textAlign("center");
    textSize(20);
    noStroke();
    fill(255);
    text("Digite espaço para", larguraTela/4, 100);
    text("iniciar o jogo!", larguraTela/4, 125);
    
    textAlign("center");
    textSize(20);
    noStroke();
    fill(255);
    text("Vence o jogador que", larguraTela - larguraTela/4, 100);
    text("fizer 10 pontos!", larguraTela - larguraTela/4, 125);
    
    textSize(20);
    noStroke();
    fill(255);
    text("JOGADOR 1:", larguraTela - larguraTela/4, 270);
    text("JOGADOR 2:", larguraTela/4, 270);
    
    textSize(18);
    noStroke();
    fill(255);
    text("Utilize as teclas setas", larguraTela - larguraTela/4, 295);
    text("para se movimentar.", larguraTela - larguraTela/4, 315);
    text("Utilize as teclas W e S", larguraTela/4, 295);
    text("para se movimentar.", larguraTela/4, 315);
  }
  
  //colisões da bolinha com a parede
  if (posX + raio > larguraTela) {
    velx *= -1;
  }
  
  if (posX - raio < 0) {
    velx *= - 1;
  }
  
  if (posY + raio > alturaTela) {
    vely *= - 1;
  }
  
  if (posY - raio < 0) {
    vely *= - 1;
  }
  
//controle das raquetes
  if (keyIsDown(UP_ARROW)) {
    posy_j1 -= velRaq;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
    posy_j1 += velRaq;
  } 
  
  if (keyIsDown(87)) {
    posy_j2 -= velRaq;
  }
  
  if (keyIsDown(83)) {
    posy_j2 += velRaq;
  } 
  
//colisão raquete com parede, decidi que a raquete não pode ultrapassar o Canvas do jogo
  if (posy_j2 <= 0) {
    posy_j2 = 0;
  }
  if (posy_j2 >= 300) {
    posy_j2 = 300;
  }
  
  if (posy_j1 <= 0) {
    posy_j1 = 0;
  }
  if (posy_j1 >= 300) {
    posy_j1 = 300;
  }
  
//colisão bolinha com parede (marcando ponto), decidi que quando um jogador perde, a bola inicia para o lado do vencedor da última rodada
if (posX - raio <= 0) {
  posX = larguraTela/2;
  posY = alturaTela/2;
  pontos_j1 += 1;
  movimentar = false;
  velx = 4;
}
  
if (posX + raio >= larguraTela) {
  posX = larguraTela/2;
  posY = alturaTela/2;
  pontos_j2 += 1;
  movimentar = false;
  velx = -4;
}

//colisão bolinha com raquete, decidi que o nível de dificuldade aumenta conforme o jogo está em andamento
if (posX - raio < posx_j2 + larguraRaq && posY - raio < posy_j2 + alturaRaq && posY + raio > posy_j2) {
  velx *= -1.1;
}

if (posX + raio > larguraTela - larguraRaq && posY - raio < posy_j1 + alturaRaq && posY + raio > posy_j1) {
  velx *= -1.1;
}

//fim de jogo, ou seja, decidi que retorna à tela inicial
if (pontos_j1 == 10) {
  alert("O jogador 1 fez " + pontos_j1 + " pontos, enquanto o jogador 2 fez " + pontos_j2 + " pontos, e ganhou o jogo! Parabéns!");
  pontos_j1 = 0;
  pontos_j2 = 0;
  posxT1 = larguraTela/2;
  posxT2 = larguraTela/2;
  posxT3 = larguraTela/2;
  iniciar = false;
}
else if (pontos_j2 == 10) {
  alert("O jogador 2 fez " + pontos_j2 + " pontos, enquanto o jogador 1 fez " + pontos_j1 + " pontos, e ganhou o jogo! Parabéns!");
  pontos_j1 = 0;
  pontos_j2 = 0;
  posxT1 = larguraTela/2;
  posxT2 = larguraTela/2;
  posxT3 = larguraTela/2;
  iniciar = false;
}
}
}
