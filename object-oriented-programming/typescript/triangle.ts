/*

Un triángulo, una forma geométrica fundamental, es un polígono caracterizado por tener tres lados 
y tres vértices. De acuerdo con el teorema de la desigualdad del triángulo, en cualquier triángulo
válido, la suma de las longitudes de dos lados cualesquiera debe ser mayor que la longitud del 
tercer lado.

Tu tarea es crear un objeto que represente un triángulo.

Este objeto debe tener tres propiedades, cada una correspondiente a uno de sus lados.

Además, se requiere una función para validar si los lados dados cumplen con el teorema de la 
desigualdad del triángulo.

Por ejemplo, considera un triángulo con longitudes de lados: a = 7, b = 10, y c = 5.

Para determinar si estos lados forman un triángulo válido, evaluamos si la suma de cada par de 
lados es mayor que la longitud del lado restante.

En este caso, verificamos si (b + c) > a, (a + c) > b, y (a + b) > c.

Si se cumplen las tres condiciones, entonces los lados efectivamente forman un triángulo.

*/

interface Triangle {
  a: number
  b: number
  c: number
}

const t1: Triangle = {
  a: 7,
  b: 10,
  c: 5
}

const t2: Triangle = {
  a: 2,
  b: 3,
  c: 6
}

const isValidTriangle = ({ a, b, c }: Triangle): boolean => {
  return (b + c) > a && (a + c) > b && (a + b) > c
}

console.log(isValidTriangle(t1))
console.log(isValidTriangle(t2))
