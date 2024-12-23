/*
  Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes
  en una escuela. Como parte de este desafío, primero configuras el entorno para recibir 
  entradas del usuario, permitiendo que ingresen tres notas. 
  
  Luego, procesas estos datos para calcular el promedio de manera precisa.
  
  Finalmente, presentas el resultado formateado con máximo dos decimales, para asegurar una 
  lectura clara.

  Si el usuario ingresa las calificaciones 80, 70 y 90, la salida será: 80
*/

const prompt = require('prompt-sync')()

const GRADES_AMOUNT = 3
const MAX_DIGITS = 2

const grade1 = parseFloat(prompt('Nota #1: '))
const grade2 = parseFloat(prompt('Nota #2: '))
const grade3 = parseFloat(prompt('Nota #3: '))

const average = (grade1 + grade2 + grade3) / GRADES_AMOUNT

console.log(`Final Grade: ${average.toFixed(MAX_DIGITS)}`)