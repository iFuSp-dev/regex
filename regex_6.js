let prueba = "'algo entre comillas simples' \"algo  entre comillas dobles\" 'algo entre comillas mezcladas\"";

console.log(prueba.match(/("|')[a-z ]+\1/g));