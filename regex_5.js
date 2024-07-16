let prueba = "http://algo.org ftp://dominio.net"

console.log(prueba.match(/ (ht|f)tp:\/\/[a-z]+\.[a-z]{3}/g));