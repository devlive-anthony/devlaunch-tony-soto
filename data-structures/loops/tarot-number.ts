/*
tarot-number.ts

En el Tarot, se usa la numerología para entender mejor a una persona. Para encontrar su número
de Tarot, observamos su fecha de nacimiento. Al sumar los dígitos de su fecha de nacimiento, 
podemos encontrar un número especial que los representa.

Para empezar, pensemos en alguien nacido el 28 de noviembre de 1989. 
Para descubrir el número, debemos seguir varios pasos:

Sumamos los números de su fecha de nacimiento: el día, el mes y el año.
Entonces, sumamos 28, 11 y 1989, obteniendo 2028.

Ahora, descomponemos este número grande en partes más pequeñas.
Así que, para 2028, sumamos 2 + 0 + 2 + 8, lo cual da 12.

Finalmente, simplificamos este número aún más. Para 12, sumamos 1 + 2, lo cual da 3.
¡Y ese es el número especial que estamos buscando!

Recuerda utiliza bucles para reducir al máximo los calculos numericos realizados y 
validar que la fecha ingresada sea correcta, no puedes recibir una fecha como 50/50/2020.

Aunque si podrías recibir una fecha como 12/12/10000 -> 7, ya que podría ser que alguien del futuro
este usando tu código! ;)

*/

const MIN_MONTH = 1
const MAX_MONTH = 12
const MIN_DAY = 1
const MIN_YEAR = 1

const isValidDate = (day: number, month: number, year: number): boolean => {
  if (year < MIN_YEAR || month < MIN_MONTH || month > MAX_MONTH || day < MIN_DAY) {
    return false
  }

  const daysInMonth: number = new Date(year, month, 0).getDate()

  return day <= daysInMonth
}

const sumDigits = (number: number): number => {
  let sum = 0

  const digits = number.toString()

  for(let i = 0; i < digits.length; i++) {
    sum += parseInt(digits[i])
  }

  return sum
}

const calculateTarotNumber = (day: number, month: number, year: number): number | null => {

  if (!isValidDate(day, month, year)) {
    console.error("Invalid date provided.")
    return null
  }

  let total: number = day + month + year

  while (total >= 10) {
    total = sumDigits(total)
  }

  return total
}

console.log(calculateTarotNumber(28, 8, 1997))