/*
casino-profits.ts

En un casino en línea han implementado un nuevo juego, que consiste en lanzar 
tres dados y anotar sus valores. Si la suma de estos valores es mayor o igual 
a 10, el apostador gana $10; de lo contrario, pierde $15.

Para probar el programa a fondo, simularás 50 intentos de personas jugando,
cada jugador simula un intento.

Después de que todos los jugadores hayan terminado sus intentos, 
encuentra el resultado de las ganancias del casino empezando de 0.

El resultado puede ser tanto positivo como negativo, donde negativo representa
que el casino perdio dinero ya que los jugadores ganaron más dinero del que
perdieron.

Si pruebas varias veces el código puedes topar con diferentes resultados como:
100, 150, -50, -25, 75

Pero mayormente dara números positivos que negativos en ganancias, porque recuerda,
"la casa (casino) nunca pierde..."

*/

const GAME_ATTEMPTS = 50
const MIN_DIE_FACE = 1
const MAX_DIE_FACE = 6

const rollDice = (): number => {
  return Math.floor(Math.random() * MAX_DIE_FACE) + MIN_DIE_FACE
} 

export const getCasinoProfits = (): number => {
  let profit = 0

  for (let i = 1; i <= GAME_ATTEMPTS; i++) {
    const dice1 = rollDice()
    const dice2 = rollDice()
    const dice3 = rollDice()

    const sum = dice1 + dice2 + dice3

    profit += (sum >= 10) ? -10 : 15
  }

  return profit
}

console.log(getCasinoProfits())