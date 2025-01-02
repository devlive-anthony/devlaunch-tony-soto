/*

La Universidad de Harvard se ha dado cuenta de que manejar manualmente los criterios 
de becas no es eficiente. Ahora buscan una forma mejor de evaluar las numerosas solicitudes 
de estudiantes que reciben.

El nuevo sistema que planean implementar decidirá eficientemente quién califica para las becas. 
Normalmente, los estudiantes deben ayudar en clases de laboratorio y aprobar cuatro materias, 
con sus calificaciones promediadas para verificar la elegibilidad.

Las reglas de elegibilidad son estrictas:

- Los estudiantes necesitan tener un promedio de calificaciones de 9 o más en todas las materias, sin 
ninguna calificación individual menor a 8, independientemente de cómo les fue como asistentes de laboratorio.

- Alternativamente, si tienen un promedio de 8.5 o más, aún pueden calificar si obtuvieron una calificación 
de "A" o "B" como asistentes de laboratorio.

- Sin embargo, si obtuvieron una calificación de "C" como asistentes de laboratorio, no calificarán para 
la beca, incluso si sus calificaciones generales son buenas.

*/

const prompt = require('prompt-sync')()

const REJECT_ASSISTANT_GRADE = 'C'
const AMOUNT_OF_GRADES = 4
const MIN_GRADE = 8
const MIN_AVERAGE_GRADE = 8.5
const FAST_FORWARD_GRADE = 9

function validateScholarship(grade1, grade2, grade3, grade4, assistantGrade) {
  if (assistantGrade === REJECT_ASSISTANT_GRADE) return false

  if (grade1 < MIN_GRADE || grade1 < MIN_GRADE || grade1 < MIN_GRADE || grade1 < MIN_GRADE) {
    return false
  }

  const average = (grade1 + grade2 + grade3 + grade4) / AMOUNT_OF_GRADES

  if (average < MIN_AVERAGE_GRADE) {
    return false
  } else {
    if (average < FAST_FORWARD_GRADE && !(assistantGrade === 'A' || assistantGrade === 'B')) {
      return false
    }
  }

  return true
}


function main() {
  const grade1 = parseFloat(prompt('Grade #1: '))
  const grade2 = parseFloat(prompt('Grade #2: '))
  const grade3 = parseFloat(prompt('Grade #3: '))
  const grade4 = parseFloat(prompt('Grade #4: '))

  const assistantGrade = prompt('Assistant Grade (A, B, C): ').toUpperCase()

  const isEligible = validateScholarship(grade1, grade2, grade3, grade4, assistantGrade)

  if (isEligible) {
    console.log('Congrats! You are eligible for the scholarship')
  } else {
    console.log('Sorry, you are not eligible for the scholarship')
  }
}

main()