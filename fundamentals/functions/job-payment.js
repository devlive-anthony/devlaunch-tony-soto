/* 
  En una empresa hay un proceso donde cada trabajador debe registrar las horas de entrada 
  y salida diariamente. De esta forma, al final de cada dia, su empleador sabrá cuánto 
  tiene que pagarles por sus horas trabajas. 
  Pero, si una persona trabajó más de ocho horas, se le debe pagar un costo extra por 
  las horas adicionales, que es igual a 1.5 veces el monto de su tarifa por hora. 
  Haz un programa que, recibiendo la tarifa por hora, la hora de entrada y la hora de salida, 
  imprima el monto total de dinero que ese empleado recibió ese día.

  Tarifa por hora: $10
  Hora de entrada: 9:00
  Hora de salida: 18:00
    
  ✔️ Respuesta: $95
*/

const prompt = require('prompt-sync')()

const WORK_DAY_HOURS = 8
const EXTRA_HOURS_MULTIPLIER = 1.5

const calculateSalary = (hourlyRate, startTime, endTime) => {
  const [startHour] = startTime.split(':')
  const [endHour] = endTime.split(':')

  const workedHours = endHour - startHour

  let salary = 0

  if (workedHours <= WORK_DAY_HOURS) {
    salary = hourlyRate * workedHours
  } else {
    const extraHours = workedHours - WORK_DAY_HOURS
    salary = (hourlyRate * WORK_DAY_HOURS) + ((extraHours * hourlyRate) * EXTRA_HOURS_MULTIPLIER)
  }

  return salary
}

const main = () => {
  const hourlyRate = parseFloat(prompt('HOURLY RATE $: '))
  const startTime = prompt('START AT: ')
  const endTime = prompt('END AT: ')

  const salary = calculateSalary(hourlyRate, startTime, endTime)

  console.log(`SALARY: $${salary}`)
}

main()