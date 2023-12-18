console.log("-----Taza de interés plazo fijo según el banco----");
console.log(" ");

const calcularInteres = (monto, tasa) => {
    const interes = monto * (tasa / 100);
    return interes;
};

const mostrarMenu = () => {
    console.log('Seleccione un banco para calcular el interés de un plazo fijo:');
    console.log('1. Banco Supervielle');
    console.log('2. Banco BBVA');
    console.log('3. Banco NACION ARGENTINA');
    console.log('4. Salir');
};

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const division = (num1, num2) => num1 / num2;
const concatenacion = (str1, str2) => str1 + str2;
const porcentaje = (monto, porcentaje) => (monto * porcentaje) / 100;

const bancos = [
    { nombre: 'Banco Supervielle', tasa: 3.5 },
    { nombre: 'Banco BBVA', tasa: 4.0 },
    { nombre: 'Banco NACION ARGENTINA', tasa: 3.8 },
];

let opcion = 0;

while (opcion !== 4) {
    mostrarMenu();
    const input = prompt('Ingrese el número del banco (1-4):');
    const opcionMin = input.toLowerCase();

    switch (opcionMin) {
        case '1':
        case 'banco supervielle':
            const montoSupervielle = parseFloat(prompt('Ingrese el monto del plazo fijo en pesos en Banco Supervielle:'));
            const tasaSupervielle = 3.5;
            const interesSupervielle = calcularInteres(montoSupervielle, tasaSupervielle);
            console.log(`El interés en Banco Supervielle es: ${interesSupervielle}`);

            const resultadoSumaSupervielle = suma(montoSupervielle, interesSupervielle);
            const resultadoRestaSupervielle = resta(montoSupervielle, interesSupervielle);
            const resultadoDivisionSupervielle = division(montoSupervielle, tasaSupervielle);
            const textoConcatenadoSupervielle = concatenacion('El interés es ', ' pesos.');
            const porcentajeCalculadoSupervielle = porcentaje(1000, tasaSupervielle);

            console.log(`Suma: ${resultadoSumaSupervielle}`);
            console.log(`Resta: ${resultadoRestaSupervielle}`);
            console.log(`División: ${resultadoDivisionSupervielle}`);
            console.log(textoConcatenadoSupervielle);
            console.log(`El ${tasaSupervielle}% de 1000 es ${porcentajeCalculadoSupervielle}`);

            break;
        case '2':
        case 'banco bbva':
            const montoBBVA = parseFloat(prompt('Ingrese el monto del plazo fijo en pesos en Banco BBVA:'));
            const tasaBBVA = 4.0; 
            const interesBBVA = calcularInteres(montoBBVA, tasaBBVA);
            console.log(`El interés en Banco BBVA es: ${interesBBVA}`);

            const resultadoSumaBBVA = suma(montoBBVA, interesBBVA);
            const resultadoRestaBBVA = resta(montoBBVA, interesBBVA);
            const resultadoDivisionBBVA = division(montoBBVA, tasaBBVA);
            const textoConcatenadoBBVA = concatenacion('El interés es ', ' pesos.');
            const porcentajeCalculadoBBVA = porcentaje(1500, tasaBBVA);

            console.log(`Suma: ${resultadoSumaBBVA}`);
            console.log(`Resta: ${resultadoRestaBBVA}`);
            console.log(`División: ${resultadoDivisionBBVA}`);
            console.log(textoConcatenadoBBVA);
            console.log(`El ${tasaBBVA}% de 1500 es ${porcentajeCalculadoBBVA}`);

            break;
        case '3':
        case 'banco nacion argentina':
            const montoNacionArgentina = parseFloat(prompt('Ingrese el monto del plazo fijo en pesos en Banco NACION ARGENTINA:'));
            const tasaNacionArgentina = 3.8; 
            const interesNacionArgentina = calcularInteres(montoNacionArgentina, tasaNacionArgentina);
            console.log(`El interés en Banco NACION ARGENTINA es: ${interesNacionArgentina}`);

            const resultadoSumaNacionArgentina = suma(montoNacionArgentina, interesNacionArgentina);
            const resultadoRestaNacionArgentina = resta(montoNacionArgentina, interesNacionArgentina);
            const resultadoDivisionNacionArgentina = division(montoNacionArgentina, tasaNacionArgentina);
            const textoConcatenadoNacionArgentina = concatenacion('El interés es ', ' pesos.');
            const porcentajeCalculadoNacionArgentina = porcentaje(2000, tasaNacionArgentina);

            console.log(`Suma: ${resultadoSumaNacionArgentina}`);
            console.log(`Resta: ${resultadoRestaNacionArgentina}`);
            console.log(`División: ${resultadoDivisionNacionArgentina}`);
            console.log(textoConcatenadoNacionArgentina);
            console.log(`El ${tasaNacionArgentina}% de 2000 es ${porcentajeCalculadoNacionArgentina}`);

            break;
        case '4':
        case 'salir':
            console.log('Fin');
            opcion = 4;
            break;
        default:
            console.log('Opción inválida. Ingrese un número del 1 al 4 o el nombre del banco.');
            break;
    }
}