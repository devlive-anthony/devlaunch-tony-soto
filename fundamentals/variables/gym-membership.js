/*
  El Elite Fitness Center es un gimnasio boutique ubicado en Palo Alto, California, 
  que ofrece membresías por $150 al mes.
  Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados 
  y cuenta con comodidades como sauna, piscina y clases grupales.
*/

const gymName = 'Elite Fitness Center'
const gymType = 'boutique'

const location = 'Palo Alto, California'

const price = 150
const currency = '$'
const duration = 'mes'

const openTime = 6
const closeTime = 22

const trainersAmount = 10

const amenity1 = 'sauna'
const amenity2 = 'piscina'
const amenity3 = 'clases grupales'

console.log(`
    Gym: ${gymName} (${gymType})\n
    Location: ${location}\n
    Price: ${currency}${price}/${duration}\n
    Time: ${openTime}:00AM-${closeTime-12}:00PM\n
    Team: ${trainersAmount} certified trainers\n
    Amenities: ${amenity1},${amenity2},${amenity3}\n
`)