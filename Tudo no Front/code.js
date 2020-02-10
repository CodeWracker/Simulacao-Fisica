let miliAux;
let segAux;
let tela = {
	largura: 640,
	altura: 480
};
let chao = {
	inicioX: 0,
	inicioY: tela.altura - 100,
	comprimento: tela.largura,
	altura: tela.altura - 50
}
quantBola = 3;
metro = tela.largura / 10;
let bol = [];
function setup() {
	createCanvas(tela.largura, tela.altura);
	for (let i = 0; i < quantBola; i++) {
		bol[i] = new Bola(1);
	}

	miliAux = millis();
	segAux = second();
}

function draw() {
	background(43, 43, 43);
	rect(chao.inicioX, chao.inicioY, chao.comprimento, chao.altura);
	for (let i = 0; i < 10; i++) {
		a = i * metro;
		line(a, tela.altura - 105, a, tela.altura - 95);
	}
	if (millis() > miliAux) {
		miliAux = millis();
		for (let i = 0; i < quantBola; i++) {
			bol[i].show();
		}

		for (let i = 0; i < quantBola; i++) {
			for (let b = i; b < quantBola; b++) {
				if (b != i) {
					if (bol[i].encosta(bol[b])) {
						let aux = bol[i].velX;
						bol[i].velX = bol[b].velX;
						bol[b].velX = aux;
						print(bol[i].velX);
						print(bol[b].velX);

						//print(bol[b].velX);
					}
				}
			}
		}
	}

}
