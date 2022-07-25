test('2+2 es 4',()=>{
    expect(2+2).toBe(4);
});

test(('validar objetos'),()=>{
    const data={username:'raul'}
    const data2={username:'rauls'}

    expect(data).toEqual({username:'raul'});
    expect(data).not.toEqual(data2);
});