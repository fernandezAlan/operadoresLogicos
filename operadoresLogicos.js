// IF-ELSE

if (condición) {
  // Si la condición es true, ejecuta este código.
} else {
  // Sino, ejecuta este otro código (la condición es false).
}

//Operadores De Comparación En JavaScript
/*
... < ... : Indica que la condición de la izquierda es menor que la de la derecha.
... > ... : Indica que la condición de la izquierda es mayor que la de la derecha.
... >= ... : Indica que la condición de la izquierda es mayor o igual que la de la derecha.
... <= ... : Indica que la condición de la izquierda es menor o igual que la de la derecha.
... == ...: Hace una comparación blanda entre dos valores. Es decir, JavaScript hace una coerción de datos, para que ambos sean del mismo tipo y pueda compararlos.
...===... : Indica que la condición de la izquierda tiene una igualdad estricta respecto a la de la derecha. Es decir, evalúa que el contenido y el tipo de dato sea el mismo. Al usar este comparador evitarás bugs a futuro.
*/

/*
OPERADORES LOGICOS
Los operadores lógicos comparan valores booleanos y devuelven respuestas booleanas. Hay dos tipos de operadores lógicos AND y OR. Estos operadores por lo general se escriben && (AND) y || (OR).
*/

/*
Operador lógico AND (&&)
Este operador lógico compara dos expresiones. Si la primera se evalúa como "verdadera" (truthy), la sentencia devolverá el valor de la segunda expresión. Si la primera expresión se evalúa como "falsa"(falsy), la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve verdadero si las dos expresiones son verdaderas. Si una o ambas expresiones son falsas, la sentencia completa se devolverá como falsa.
*/

// ejemplos

true && true; //devuelve el segundo valor, verdadero
true && false; //devuelve el segundo valor, falso
false && false; //devuelve el primer valor, falso

// podemos tener la siguiente condicional

var numero = 10;

// en la condicion preguntamos si el numero es mayor a 5 Y si es menor 15
// la condicion es verdadera ya que 10 es mayor a 5 Y menor a 15
if (numero > 5 && numero < 15) {
  console.log("la condicion es verdadera");
}

// en este otro if la condicion es falsa, numero si es mayor a 0 pero NO es menor 5
if (numero > 0 && numero < 5) {
  // no se ejecuta este bloque de código porque la condicion es FALSA
} else {
  // al ser FALSA la condicion se ejecuta este bloque de codigo
}

/*
 Operador lógico OR ( || )
Este operador lógico compara dos expresiones. Si la primera se evalúa como "falsa", la sentencia devolverá el valor de la segunda expresión. Si la primera se evalúa como "verdadera", la sentencia devolverá el valor de la primera expresión.

Cuando solo se incluyen valores booleanos (true o false), se devuelve como true si cualquiera de las dos expresiones son verdaderas. Ambas expresiones pueden ser verdaderas, pero solo se necesita una para que el resultado sea verdadero.
 */

//ejemplos
true || true; //devuelve el primer valor, verdadero
true || false; //devuelve el primer valor, verdadero
false || false; //devuelve el segundo valor, falso
false || true; //devuelve el segundo valor, verdadero

var numero = 20;

// la condicion devolvería VERDADERO ya que numero No es 10 pero Si es 20
if (numero === 10 || numero === 20) {
}

// la condicion devolvería FALSO ya que numero No es 30 ni 40
if (numero === 30 || numero === 40) {
  // no se ejecuta este bloque de código porque la condicion es FALSA
} else {
  // al ser FALSA la condicion se ejecuta este bloque de codigo
}

// ejercicio 1- el bar
// vamos a crear un programa para un bar para que el dueño pueda saber la edad del cliente y ofrecer sus servicios

/**
 * preguntar al usuario con un promt su edad
 * si el usuario es mayor de 18 pero menor de 21 le mostramos un alert con el siguiente mensaje "puedes entrar pero no puedes beber"
 * si el usuario es menor a 18 años, mostramos en un alert "no puedes ingresar al bar"
 */
