const jogo = require('./Jogo');


beforeEach(() => {
    novojogo = new jogo('12-12-2021');
});


test('Recuperar a data',

    () => {

        expect(novojogo.getData()).toBe('12-12-2021');
    }

)

test('Alterando a data',

    () => {
        novojogo.setData('13-09-2021');
        expect(novojogo.getData()).toBe('13-09-2021');
        
    }
)