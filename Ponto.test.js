const Ponto = require('./Ponto');
const jogador = require('./Jogador');

beforeEach(()=>{
    novoPonto = new Ponto;
    novoJogador = new jogador('alysson',10);
})

test('obter nome do jogador',()=>{
     
    expect(novoPonto.getJogador()).toBe('alysson');
})