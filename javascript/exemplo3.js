let numeros  = [1, 2, 3];

//Mostrar e adicionar no FIM
console.log(numeros);
numeros.push(6)
console.log(numeros);

//Mostrar e reomver no INICIO
numeros.shift(1);
console.log(numeros);

//Mostrar e adicionaro no INICIO
numeros.unshift(-3)
console.log(numeros);

//Mostrar um numero especifico
console.log(numeros[4])



// =================================================
//  ARRAY DE CARROS


let garagem = ['BYD', 'TESLA', 'DODGE', 'AUDI', 'LAMBORGHINI', 'JAGUAR', 'SUBARU', 'PEUGEOT', 'MAZDA'];
garagem.push('TOYOYA');


for (let i = 0; i < garagem.length; i++) {
    console.log(`Carro nº ${Number(i) + 1}: ${garagem[i]}`);    
}

for (let carro in garagem) {
    console.log(carro.valueOf());
}