/*
    Function() contructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/
function Person(name) {
  this.name = name
  this.walk = function () {
    return name + ' está andando'
  }
}
const vitoria = new Person('Vitória')
const ednario = new Person('Ednario')
console.log(vitoria.walk())
console.log(ednario.walk())
