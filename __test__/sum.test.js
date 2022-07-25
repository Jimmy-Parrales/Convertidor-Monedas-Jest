const funcion= require('../src/sum.js');
const Multipliar=require('../src/multiplicar.js');


describe('pruebas para suma',()=>{
    test('1 + 2 es 3',()=>{
        expect(funcion(1,2)).toBe(3);
    });
});


describe('multiplicador de nuemeros 2*9',()=>{
    test('2*9 es 18',()=>{
        expect(Multipliar(2,9)).toBe(18);
    });
});


test('numero suma negativos',()=>{ 
    expect(funcion(-2,2)).toBe(0);
});