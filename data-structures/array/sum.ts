/*

Crea un programa en que sume los números en las posiciones correspondientes de dos arreglos.

Esto significa sumar el número en el índice 0 del primer arreglo con el número en el índice 0 
del segundo arreglo, y así sucesivamente.

Asegúrate de que el programa pueda manejar arreglos de diferentes longitudes y sume los números 
correctamente.

Ejemplo:
[1, 0, 2, 3, 4] + [3, 5, 6, 7, 8, 13, 9] = [4, 5, 8, 10, 12, 13, 9]

*/

const arraySum = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = []
  const maxLength = Math.max(arr1.length, arr2.length)

  for (let i = 0; i < maxLength; i++) {
    const value1 = arr1[i] || 0
    const value2 = arr2[i] || 0
    result.push(value1 + value2)
  }

  return result
}

console.log(arraySum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]))