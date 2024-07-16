let prueba = "hola Hola hielo hule hilo halo helio ola HoLa hooooola"; //Creo un String



console.log(prueba.match(/h?[aeiou]l[aeiou]/gi))  //Los corchetes indican las posibles wildcards en esa posicion
//El h? indica que ese caracter es opcional que este
// El gi despues del regex indica que no le importa el case sensitive y que me devuelva una rray con todos no con el primero
