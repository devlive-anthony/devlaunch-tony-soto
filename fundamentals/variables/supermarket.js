/*
  Voy al supermercado GreenCenter para hacer mis compras habituales y 
  planeo comprar manzanas y naranjas. 
  Cuando estoy allí, veo que no hay plátanos ni uvas, así que cambio un poco mi lista. 
  Veo que 3 cajeros están trabajando, así que me preparo para pagar. 
  Mis cosas cuestan $100 en total. 
  Entrego $150 en efectivo y recibo $50 de cambio.
*/

const supermarket = 'GreenCenter'

const favoriteFruit1 = 'manzanas'
const favoriteFruit2 = 'naranjas'

const areBananasAvailable = false
const areGrapesAvailable = false

const numberOfActiveCashiers = 3

const cashInWalletDollars = 150
const totalPurchaseDollars = 100
const changeDollars = cashInWalletDollars - totalPurchaseDollars

console.log(`
    Supermarket: ${supermarket}\n
    Payment: $${cashInWalletDollars}\n
    Total: $${totalPurchaseDollars}\n
    Change: $${changeDollars}\n
`)