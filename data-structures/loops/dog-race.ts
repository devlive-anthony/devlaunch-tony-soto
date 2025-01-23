/*
dogs-race.ts

En este ejercicio, desarrollarás un programa que simula una carrera entre dos perros
en una pista de 20 metros. Cada perro comenzará al final de la pista y se moverá hacia
la izquierda en cada iteración del juego.

Cada perro se moverá aleatoriamente entre 1 y 3 pasos en cada turno.
Esto se simulará utilizando una función que generará un número aleatorio.

La pista se representará como una cadena de caracteres que muestra la posición actual de
cada perro, utilizando emojis para los perros (un perro amarillo 🦮 y un perro blanco 🐩) 
y huellas de perro 🐾 para indicar el camino recorrido.

🏁|-----------------🦮🐾🐾|
🏁|------------------🐩🐾|

El programa debe determinar cuándo un perro cruza la línea de meta.
En este caso, se mostrará un mensaje indicando qué perro ha ganado la carrera.

🏁|--🦮🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
🏁|🐩🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
¡Tenemos un ganador!

Si ambos perros cruzan la línea de meta en la misma iteración, el programa debe identificarlo
como un empate y mostrar un mensaje indicando que ha habido un empate entre los perros.

🏁|🦮🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
🏁|🐩🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾🐾|
¡Tenemos un empate!

*/

const MAX_STEP = 3
const LANE_LENGTH = 20
const FINISH_LINE_POSITION = 0

const moveDog = (position: number): number => {
  const steps = Math.floor(Math.random() * MAX_STEP) + 1
  const newPosition = position - steps
  const isFinishLine = newPosition <= FINISH_LINE_POSITION
  return isFinishLine ? FINISH_LINE_POSITION : newPosition
}

const getLane = (laneLength: number, dogPosition: number, dog: string): string => {
  let lane = '-'.repeat(laneLength).split('')

  lane[dogPosition] = dog

  for (let i = laneLength - 1; i > dogPosition; i--) {
    if (lane[i] === '-') lane[i] = '🐾'
  }

  return `🏁|${lane.join('')}|`
}

const dogsRace = (): void => {
  let dog1Position = LANE_LENGTH - 1
  let dog2Position = LANE_LENGTH - 1

  while (true) {
    const isThereAWinner = (
      dog1Position <= FINISH_LINE_POSITION ||
      dog2Position <= FINISH_LINE_POSITION
    );

    if (isThereAWinner) {
      const isDraw = dog1Position === dog2Position
      console.log(`¡Tenemos un ${isDraw ? 'empate' : 'ganador'}!`)
      break
    }

    dog1Position = moveDog(dog1Position)
    dog2Position = moveDog(dog2Position)

    const dogLane1 = getLane(LANE_LENGTH, dog1Position, '🦮')
    const dogLane2 = getLane(LANE_LENGTH, dog2Position, '🐩')

    console.log(`${dogLane1}\n${dogLane2}\n`)
  }
}

dogsRace()