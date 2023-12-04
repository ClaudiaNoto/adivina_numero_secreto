const readlineSync = require('readline-sync');
const { genenrarNumeroAleatorio, verificarAdivinanza} = require ('./adivinanza');

const obtenerNumeroUusario = () => {
    return readlineSync.question('ingrese un numero: ');
};
const juegoAdivinanza = () => {
    const numeroSecreto =genenrarNumeroAleatorio();
    let numeroAdivinado = 0;

    console.log('Bienvenido a Adivina el numero secreto!');
    console.log('Intenta adivinar el numero del 1 al 100 .\n');

    while (numeroAdivinado !== numeroSecreto) {
        numeroAdivinado = obtenerNumeroUusario();
        verificarAdivinanza (numeroSecreto, numeroAdivinado);
    }
};

juegoAdivinanza();