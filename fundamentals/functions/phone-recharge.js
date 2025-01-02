/*

El proveedor principal de servicios de telefonía móvil en la ciudad está introduciendo una oferta
promocional basada tanto en el monto de recarga realizado por sus clientes como en la duración de 
su suscripción con la compañía. Para ser elegible para la promoción, los clientes deben recargar 
un mínimo de $20 y un máximo de $80 y haber estado suscritos durante al menos un año.

En la promoción SuperSaver, los clientes pueden disfrutar de un monto de recarga duplicado si su 
recarga es inferior a $38 y han estado afiliados al servicio por tres años o menos.

Por otro lado, la promoción MegaRecharge está dirigida a los clientes que han estado suscritos por 
más de tres años, ofreciéndoles un monto de recarga triplicado independientemente del monto recargado.

Tu tarea es desarrollar un programa que tome como entrada el nombre del cliente, el monto 
de la recarga y la duración de su suscripción, y determine si la promoción les aplica y calcule el monto 
total de recarga incluyendo la promoción.

*/

const prompt = require('prompt-sync')()

const MIN_MONTHS_DURATION = 12
const MIN_RECHARGE_AMOUNT = 20
const MAX_RECHARGE_AMOUNT = 80

const SUPER_PROMO_MIN_AMOUNT = 38
const SUPER_PROMO_MULTIPLIER = 2

const MEGA_PROMO_MIN_DURATION = 36
const MEGA_PROMO_MULTIPLIER = 3

function calculateRecharge(amount, duration) {
  if (duration < MIN_MONTHS_DURATION) return amount

  let multiplier = 1

  if (amount > MIN_RECHARGE_AMOUNT) {
    if (duration >= MEGA_PROMO_MIN_DURATION) {
      multiplier = MEGA_PROMO_MULTIPLIER
    } else if (
      amount >= SUPER_PROMO_MIN_AMOUNT &&
      amount <= MAX_RECHARGE_AMOUNT
    ) {
      multiplier = SUPER_PROMO_MULTIPLIER
    }
  }

  return amount * multiplier
}

function main() {
  const name = prompt('Name: ')
  const amount = parseInt(prompt('Monto $: '))
  const duration = parseInt(prompt('Duration (months): '))

  const recharge = calculateRecharge(amount, duration)
  const promo = recharge - amount

  console.log(`
    THANKS ${name}!
    _______________
    RECHARGE: $${recharge}
    PROMO: $${promo}
  `)
}

main()