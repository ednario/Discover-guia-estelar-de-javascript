const notas = function (n1, n2, n3, n4) {
  soma = n1 + n2 + n3 + n4
  return soma
}
const media = function (n1, n2, n3, n4) {
  medias = (n1 + n2 + n3 + n4) / 4
  return medias
}
let n1 = 7
let n2 = 7
let n3 = 7
let n4 = 7

console.log(`A soma das notas é: ${notas(n1, n2, n3, n4)}`)
console.log(`A media das notas é: ${media(n1, n2, n3, n4)}`)
console.log(soma)
