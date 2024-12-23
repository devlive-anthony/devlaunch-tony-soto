/*
  Crea un programa en JavaScript que calcule la factura total de una persona en un hotel, 
  donde cada habitación tiene un precio de $100 por noche, aprovechando una oferta promocional 
  que incluye un descuento del 5%.
  
  El programa debe solicitar al huésped el número de noches que pasó en el hotel para calcular 
  la factura final.

  Si el usuario ingresa que se quedó 5 noches, la salida será: $475.00
*/

const prompt = require('prompt-sync')()

const PRICE_PER_DAY = 100

const promoDiscount = 0.05

const days = parseInt(prompt('¿Cuántos días desea quedarse? -> '))

const subtotal = PRICE_PER_DAY * days
const discount = subtotal * promoDiscount
const total = subtotal - discount

console.log(`
  -------------
  | HOTEL RECEIPT
  -------------
  | Nights #: ${days}
  | Payment
  |  - Subtotal: $${subtotal}
  |  - Discount: $${discount}
  |  - Total: $${total}
`)