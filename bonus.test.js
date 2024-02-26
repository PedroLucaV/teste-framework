const { default: expect } = require('expect')
const bonus = require('./index')

describe('Testa função Bonus', ()=>{
    test('verifica se o bonus de 10% está sendo aplicado', ()=>{
        const salario = 10000
        const salarioComBonus = bonus(salario)
        expect(salarioComBonus).toBe(11000)
    })
})