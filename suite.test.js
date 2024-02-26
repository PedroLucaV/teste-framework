function concatenaString(str1, str2){
    return str1 + str2
}

describe('Exercicio de Teste', () =>{
    test('Verifica se um número é igual ao outro', () =>{
        expect(1).toBe(1)
    }),
    test('Verificar se o valor é estritamente igual', () =>{
        expect('1').not.toBe(1)
    }),
    test('Verificar a concatenação', () => {
        expect(concatenaString('a','b')).toBe('ab')
    })
})