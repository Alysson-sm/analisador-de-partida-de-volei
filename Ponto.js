const Jogador = require('./Jogador')

class Ponto{
    constructor(){
        this.vantagemDaCasa = false;
        this.jogador = new Jogador;
    }
    getJogador(){
        return this.jogador.nome;
    }
}


module.exports = Ponto;