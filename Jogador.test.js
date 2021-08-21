const jogador = require('./Jogador');

beforeEach(()=>{
    novoJogador = new jogador('alysson',15,5);
})


test('recuperar nome do jogador',

    () =>{
        expect(novoJogador.getTotalPontoJogador()).toBe(5);
    }
)