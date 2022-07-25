const monedas=require('../src/convertidor.js');

describe('verificar convertidor moneda',()=>{
    test('1 euro es 1.2 USD, entonces, 2 euro es 2.4',()=>{
        expect(monedas(1,3)).toBe(3);
    });
});