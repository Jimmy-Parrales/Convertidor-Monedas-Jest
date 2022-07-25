describe('ver estado o valor',()=>{
    test('valores nulo',()=>{
        const n=null;
        expect(n).toBeNull();
        expect(n).toBeDefined();
        expect(n).not.toBeUndefined();
        expect(n).not.toBeTruthy();
        expect(n).toBeFalsy();
    })
});
