let prueba = "hola Hola hielo hule hilo halo helio ola HoLa"; //Creo un String



console.log(prueba.match(/\bh?[aeiou]{1,2}l[aeiou]\b/gi))  //Los corchetes indican las posibles wildcards en esa posicion
//El h? indica que ese caracter es opcional que este
// El gi despues del regex indica que no le importa el case sensitive y que me devuelva una rray con todos no con el primero
// El [aeiou]+ indica qeu cualquiera de esos caracters puede aparecer mas de 1 vez
//El [aeiou]{1,2} indica que este caracter se puede repetir, minimo 1 vez maximo 2
// el \b busca un caracter invisible



"bla bla bla bla bla"