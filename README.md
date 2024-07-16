Regular expressions ---> regex ---> patrones que definen STRINGS


match ---> buscar una expresion regular en un string (string)
test ---> comprobar que una string encaja con una expresion (regex)

STRING.match(REGEX)  ---Retrun--> array con matches


REGEX

delimitadores ---> / --> /regex/
flags ---> letras que modifican el comportamiento de la expresion --> i g

i --> case insensitive
g --> global


conjuntos ---> [avcsdts] --> devolvera cualquier string con esoe caracteres en la misma posicion

*conjunto negativo ---> [^abc] --> cualquier caracter menos los definidos
*rangos ---> 0-9 a-z A-Z 3-7 b-f

------------------------
operadores ----> caracteres que modifical el caracter precedente --> ? + *

? --> caracter OPCIONAL
+ --> el caracter puede aparecer mas de una vez
* --> el caracter es opcional, pero de estar, puede estar mas de una vez


---------
cantidad de repeticiones
{n} {min,max} {min,}

---------
caracteres especiales

. --> wildcard --> representa cualquier caracter

\ --> "escapa" un caracter --> activa/desactiva su funcion/significado | Convierte a literal y le quita la funcion al caracter


\d -->0-9
\t --> caracter tab
\r --> caracter return
\n --> nueva linea
\b --> boundary --> limte| un espacio ocupado por un cartacter invisible


[0-9\d]

---------------
OR ---> ||


---------------
grupos indexados -----> (segmentos dentro del patron que deben tomarse como una unidad)
*para referencia posterior --> \indice(num)

/////en php --> $indice

----------------
Ejemplo futuro

/28[0-9]{3}/       Esto seria un codigo postal de madrid  || Inicia por 28 y obtiene 3 numeros mas dle 0 al 9
