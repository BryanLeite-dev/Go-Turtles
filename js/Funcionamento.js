//-------------------------------------------------------------------------//
//Função alert como inicialização do arquivo
alert('Tente adivinhar qual tartaruga tem a maior velocidade!')
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Definindo o canvas
var ilustrador = document.getElementById("janela do jogo").getContext("2d");
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
var direcao = "nenhuma";				
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Mostra o que vai acontecer ao iniciar o jogo	
function IniciaJogo (){
	
	
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
	window.addEventListener("keydown",ApertouTeclado);
	
	//Quando é solta uma tecla
	window.addEventListener("keyup", SoltouTeclado);
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Declara o objeto que põe as infomações na tela
	DesenhaJogo();
	//-------------------------------------------------------------------------//
	
	
}	
//-------------------------------------------------------------------------//		


//-------------------------------------------------------------------------//
//Função do objeto
function DesenhaJogo (){
	
	
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
	requestAnimationFrame(DesenhaJogo);
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades do Fundo
	ilustrador.drawImage(Fundo,FundoX,FundoY,FundoL,FundoA);
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades da Tartaruga Pai
	ilustrador.drawImage(TartarugaM,TartarugaMX,TartarugaMY,TartarugaMA,TartarugaML);	

	//Faz com que o Y da Tartaruga Pai volte a ser 285
	if(direcao=="cima1"){
		MY = 285;	
	}
	//Move o Y da Tartaruga Pai
	if(direcao=="baixo1"){
		MY = MY + 0.1;	
	}
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades da Tartaruga Mãe
	ilustrador.drawImage(TartarugaF,TartarugaFX,TartarugaFY,TartarugaFA,TartarugaFL);
	
	//Faz com que o Y da Tartaruga Mãe volte a ser 285
	if(direcao=="cima2"){
		FY = 285;	
	}
	//Move o Y da Tartaruga Mãe
	if(direcao=="baixo2"){
		FY = FY + 2;	
	}
	//-------------------------------------------------------------------------//
	
	
	//-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades da Tartaruga Filho
	ilustrador.drawImage(TartarugaI,TartarugaIX,TartarugaIY,TartarugaIA,TartarugaIL);
	//Faz com que o Y da Tartaruga Filho volte a ser 285
	if(direcao=="cima3"){
		IY = 283;	
	}
	//Move o Y da Tartaruga Filho
	if(direcao=="baixo3"){
		IY = IY + 0.5;	
	}
	//-------------------------------------------------------------------------//
	
	
}
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//			
//Cria uma função que vai definir o que vai acontecer quando uma  tecla for apertada			
function ApertouTeclado(teclaApertada){
	
	
	//-------------------------------------------------------------------------//
	//Reconhecendo teclas para o movimento das imagens
	if(teclaApertada.keyCode==100){
		direcao = "cima1";
	}
	if(teclaApertada.keyCode==97){
		direcao = "baixo1";
	}
	
	if(teclaApertada.keyCode==101){
		direcao = "cima2";
	}
	if(teclaApertada.keyCode==98){
		direcao = "baixo2";
	}
	
	if(teclaApertada.keyCode==102){
		direcao = "cima3";
	}
	if(teclaApertada.keyCode==99){
		direcao = "baixo3";
	}		
	//-------------------------------------------------------------------------//
	
	
}
//-------------------------------------------------------------------------//		


//-------------------------------------------------------------------------//
//Cria uma função que vai definir o que vai acontecer quando uma  tecla deixar de ser apertada			
function SoltouTeclado(){
	
	
	//-------------------------------------------------------------------------//
	//Para o movimento
	direcao = "nenhuma";	
	//-------------------------------------------------------------------------//	
	
	
}
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Inicia o sript		
IniciaJogo();
//-------------------------------------------------------------------------//
				
