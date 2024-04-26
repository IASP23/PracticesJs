// region INVERTIR CADENA

/* console.log(invertirCadena("Hola mundo")); // debería imprimir "odnum aloH"
console.log(invertirCadena("JavaScript")); // debería imprimir "tpircSavaJ" */

/* cadena = "Hola mundo";
for (let i = 1; i <= cadena.length; i++) {
  console.log(cadena[cadena.length - i]);
} */

// region PALINDROMO
/* Un palindromo es un texto que se lee de igual manera de izq a der 
por ejemplo 
level = level
oso = oso  */

const palindromoMasLargo = (cadena) => {
  console.log(cadena.length); /* --> numero de caracteres de una cadena */
  console.log(
    cadena[2]
  ); /* la cadena se vuelve un array y todo array empieza desde 0 */
  for (let i = 0; i <= cadena.length - 1; i++) {
    if (cadena[i] != cadena[cadena.length - 1 - i]) {
      console.log("No es Palindromo");
      return false;
    }
    return true;
  }
};

console.log(palindromoMasLargo("oso")); // debería imprimir "abadaba"
// region PALINDROMO


