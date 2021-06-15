//-------------------------------------------------------------------------//
//Função alert como inicialização do arquivo
alert('Tente adivinhar qual tartaruga tem a maior velocidade!')
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Definindo o canvas
var ilustrador = document.getElementById("canvas").getContext("2d");
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Adicionando as imagens a tela

//[Adiciona o Fundo]//
var Fundo = new Image();

//[Adiciona a TartarugaM]//
var TartarugaM = new Image();

//[Adiciona a TartarugaM]//
var TartarugaF = new Image();

//[Adiciona a TartarugaM]//
var TartarugaI = new Image();
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Variaveis de posição

//[Variavel Y da Tartaruga Pai]//
var MY = 285;

//[Variavel Y da Tartaruga Mãe]//
var FY = 285;

//[Variavel Y da Tartaruga Irmão]//
var IY = 283;
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Definir a movimentação parada
var movimentacao = "nula";				
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Mostra o que vai acontecer ao iniciar o jogo	
function jogoIniciado (){
	
	
	//-------------------------------------------------------------------------//
	//Localiza a imagem e põe na tela
	//[Imagem do Fundo]//
	Fundo.src = "Fundo.png";
	
	//[Imagem da Tartaruga Pai]//
	TartarugaM.src = "TartarugaM.png";
	
	//[Imagem da Tartaruga Mãe]//
	TartarugaF.src = "TartarugaF.png";
	
	//[Imagem da Tartaruga Filho]//
	TartarugaI.src = "TartarugaI.png";
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Cria um evento que reconhece a situalção da tecla
	//Quando é apertada uma tecla
	window.addEventListener("keydown",pressionouTecla);
	
	//Quando é solta uma tecla
	window.addEventListener("keyup", despressionouTecla);
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Declara o objeto que põe as infomações na tela
	jogoDesenhado();
	//-------------------------------------------------------------------------//
	
	
}	
//-------------------------------------------------------------------------//		


//-------------------------------------------------------------------------//
//Função do objeto
function jogoDesenhado (){
	
	
	//-------------------------------------------------------------------------//
	//Definindo Fundo
	//Definindo x
	FundoX = 0;
	
	//Definindo y
	FundoY = -1;

	//Definindo altura
	FundoA = 620;
	
	//Definindo largura
	FundoL = 450;
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Definindo Tartaruga Pai
	//Definindo x
	TartarugaMX = 25;
	
	//Definindo y
	TartarugaMY = MY;
	
	//Definindo altura
	TartarugaMA = 75;
	
	//Definindo largura
	TartarugaML = 75;
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Definindo Tartaruga Mãe
	//Definindo x
	TartarugaFX = 190;
	
	//Definindo y
	TartarugaFY = FY;
	
	//Definindo altura
	TartarugaFA = 75;
	
	//Definindo largura
	TartarugaFL = 75;
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Definindo Tartaruga Filho
	//Definindo x
	TartarugaIX = 355;
	
	//Definindo y
	TartarugaIY = IY;
	
	//Definindo altura
	TartarugaIA = 75;
	
	//Definindo largura
	TartarugaIL = 75;
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Faz uma animação no navegador		
	requestAnimationFrame(jogoDesenhado);
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades do Fundo
	ilustrador.drawImage(Fundo,FundoX,FundoY,FundoL,FundoA);
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades da Tartaruga Pai
	ilustrador.drawImage(TartarugaM,TartarugaMX,TartarugaMY,TartarugaMA,TartarugaML);	

	//Faz com que o Y da Tartaruga Pai volte a ser 285
	if(movimentacao=="up1"){
		MY = 285;	
	}
	//Move o Y da Tartaruga Pai
	if(movimentacao=="down1"){
		MY = MY + 0.1;	
	}
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades da Tartaruga Mãe
	ilustrador.drawImage(TartarugaF,TartarugaFX,TartarugaFY,TartarugaFA,TartarugaFL);
	
	//Faz com que o Y da Tartaruga Mãe volte a ser 285
	if(movimentacao=="up2"){
		FY = 285;	
	}
	//Move o Y da Tartaruga Mãe
	if(movimentacao=="down2"){
		FY = FY + 2;	
	}
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades da Tartaruga Filho
	ilustrador.drawImage(TartarugaI,TartarugaIX,TartarugaIY,TartarugaIA,TartarugaIL);
	//Faz com que o Y da Tartaruga Filho volte a ser 285
	if(movimentacao=="up3"){
		IY = 283;	
	}
	//Move o Y da Tartaruga Filho
	if(movimentacao=="down3"){
		IY = IY + 0.5;	
	}
	//-------------------------------------------------------------------------//
	
	
}
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//			
//Cria uma função que vai definir o que vai acontecer quando uma  tecla for apertada			
function pressionouTecla(teclaPressionada){
	
	
	//-------------------------------------------------------------------------//
	//Reconhecendo teclas para o movimento das imagens
	if(teclaPressionada.keyCode==100){
		movimentacao = "up1";
	}
	if(teclaPressionada.keyCode==97){
		movimentacao = "down1";
	}
	
	if(teclaPressionada.keyCode==101){
		movimentacao = "up2";
	}
	if(teclaPressionada.keyCode==98){
		movimentacao = "down2";
	}
	
	if(teclaPressionada.keyCode==102){
		movimentacao = "up3";
	}
	if(teclaPressionada.keyCode==99){
		movimentacao = "down3";
	}		
	//-------------------------------------------------------------------------//
	
	
}
//-------------------------------------------------------------------------//		


//-------------------------------------------------------------------------//
//Cria uma função que vai definir o que vai acontecer quando uma  tecla deixar de ser apertada			
function despressionouTecla(){
	
	
	//-------------------------------------------------------------------------//
	//Para o movimento
	movimentacao = "nula";	
	//-------------------------------------------------------------------------//	
	
	
}
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Inicia o sript		
jogoIniciado();
//-------------------------------------------------------------------------//
				
