// Variáveis e tipos de dados
// declaração or declaration
var name

// assignment or atribuição de valores
name = 'Ednario'

// que tipo de dado foi colocado na variável

//console.log(typeof name)

let age, isHuman

age = 18
isHuman = true

// multiplos argumentos na funcao
//console.log(name, age, isHuman)

// escrita de texto + variáveis

// concatenando valores
//console.log('O ' + name + ' tem ' + age + ' anos.')

// interpolando valores com template literals or template strings
//console.log(`O ${name} tem ${age} anos`)

// Object

const person = {
  name: 'John',
  age: 21,
  weight: 1.88,
  isAdmin: true
}

//console.log(`${person.name} tem ${person.age} anos`)

//Array

const animals = ['Lion', 'Monkey', 'Cat', { name: 'cat', age: 18 }]
//console.log(animals[3].age)

// 1. declare uma variavel de name weight
//let weight

// 2. que tipo é a variável acima?
//console.log(typeof weight)

/*
  3. Declare uma variavel e atribua valor para cada um dos dados:
  * name
  * age
  * stars
  * isSubscribed
*/
//let name = 'Ednario'
//let age = 18
//let stars = 5.1
//let isSubscribed = true

/* 4. A variavel studente abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.
    4.2 mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.

    Atencao, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
    */
let student = {
  name: 'Ednario',
  age: 18,
  weight: 62.5,
  isSubscribed: true
}
/*console.log(
  `${student.name} de idade ${student.age} pesa ${student.weight} kg.`
)*/
let students = []

const john = {
  name: 'John',
  age: 18,
  weight: 62.5,
  isSubscribed: true
}
students[0] = student
students[1] = john
//console.log(students)

//console.log(a)
var a = 1
