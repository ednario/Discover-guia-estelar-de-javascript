/*
        new

        - left-hand-side extension
        - criar um novo objeto
*/

let name = new String('Ednario')
name.surName = 'Andrade'
let age = new Number(18)
console.log(name, age)

let date = new Date('2020-12-01')
console.log(date.__proto__)