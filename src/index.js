const assert = require('assert')
const Employee = require('./employee')
const EntityBase = require('./entityBase')

const GENDER = {
    male: 'male',
    female: 'female'
}


{
    const employee = new Employee({
        name: 'Paulin',
        age: 30,
        gender: GENDER.male
    })
    //testes
    //assert.deepStrictEqual(employee.name, "Mr. Paulin")
    //assert.deepStrictEqual(employee.age, undefined)
    //assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, 0)
}