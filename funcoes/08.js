// Callback Function

function sayMyName(name) {
  console.log('Antes')
  name()
  console.log('Depois')
}
sayMyName(() => {
  console.log('Dentro')
})
