class Objeto{
    constructor(kg){
        this.centroX = random(tela.largura);
		this.centroY = random(tela.altura/2);
		this.massa = kg;
		this.forcaY = 0;
		this.forcaX = 0;
		this.acelX = this.forcaX/kg;
		this.acelY = this.forcaY/kg;
		this.velX = 0;
		this.velY = 0;
    }
	
}
class Bola extends Objeto{
	constructor(mass){
		super(mass);
		this.diametro = metro/2;
		this.raio = this.diametro/2;
		this.teto = this.centroY-this.raio;
		this.base = this.centroY+this.raio;
		this.direita = this.centroX+this.raio;
		this.esquerda = this.centroX-this.raio;
	}
	calcularResultanteX(){
		if(mouseIsPressed && mouseY>this.teto && mouseY<this.base && mouseX>this.esquerda&&mouseX<this.direita){
			this.forcaX = 1000;
		}
		else{
			this.forcaX = 0
		}
		//this.encosta(other);
		this.acelX = this.forcaX/this.massa;
		this.velX += this.acelX;
	}
	calcularResultanteY(){
		this.forcaY = this.massa * 9.81*metro; //gravidade

		//this.encosta(other);
		this.acelY = this.forcaY/this.massa;
		this.velY += this.acelY;
	}
	atualizarPosX(){
		this.calcularResultanteX();
		if(this.esquerda+this.velX/1000>0){
			if(this.direita+this.velX/1000<tela.largura){
				this.centroX += this.velX/1000;
			}
			else{
				this.centroX = tela.largura-this.raio;
				this.velX = - this.velX;
			}
		}
		else{
			this.centroX = this.raio;
			this.velX = - this.velX;
		}
		

		this.direita = this.centroX+this.raio;
		this.esquerda = this.centroX-this.raio;
		
	}
	atualizarPosY(){
		this.calcularResultanteY();
		if(this.base+this.velY/1000<chao.inicioY){
			if(this.teto+this.velY/1000>0){
				this.centroY += this.velY/1000;
			}
			else{
				this.centroY = this.raio;
				this.velY= -this.velY;
			}
			
		}
		else{
			this.centroY = chao.inicioY-this.raio;
			this.velY= -this.velY;
		}
		
		this.base = this.centroY+this.raio;
		this.teto = this.centroY-this.raio;
	}
	mover(){
		this.atualizarPosX();
		this.atualizarPosY();
	}
	show(){
		circle(this.centroX,this.centroY,this.diametro);
		this.mover();
	}
	encosta(other){
		let d = dist(this.centroX,this.centroY,other.centroX,other.centroY);
		
		return(d<this.raio+other.raio);
		
	}
}
