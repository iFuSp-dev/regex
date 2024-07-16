let prueba = "3.456 2w33 56.12 .23452"; //Creo un String


console.log(prueba.match(/[0-9]*\.\d+/g));


// Explicacion:
// en el primer caracter, buscamos del 0 al 9. a partir de ahi buscamos tantas veces como sea
//posible del 0 al 9.  El siguiente caracter que buscamos es el .