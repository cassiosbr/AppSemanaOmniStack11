const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    //para saber o teste que falhou
    it('should generate an unique ID', () => { // exemplo de teste, do ingles para portugues= isto
        //exemplo: espero(expect) que 2 + 2 = 4
        //expect(2 + 2).toBe(4);
        const id =   generateUniqueId();
        expect(id).toHaveLength(8); // espera que tem 8 caracters
    });
});

/// verificar os estes pois esta dando erro