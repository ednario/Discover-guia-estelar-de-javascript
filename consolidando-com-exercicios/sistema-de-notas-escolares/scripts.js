n1 = Number(window.prompt('Digite a 1° nota'))
n2 = Number(window.prompt('Digite a 2° nota'))
n3 = Number(window.prompt('Digite a 3° nota'))
n4 = Number(window.prompt('Digite a 4° nota'))

media = (n1 + n2 + n3 + n4) / 4

if (media >= 90){
    console.log('a')
}else if (media <= 89 && media >= 80){
    console.log('b')
}else if (media <= 79 && media >= 70){
    console.log('c')
}else if (media <= 69 && media >= 60){
    console.log('d')
}else{console.log('f')}