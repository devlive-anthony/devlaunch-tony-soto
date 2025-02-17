/*

Desarrolla una función que procese un array de votos en una campaña electoral. 

Cada voto se representa mediante un objeto que contiene un id del votante y el nombre del 
candidato al que ha votado. 

La función debe contar cuántos votos ha recibido cada candidato y, al final, mostrar quién 
fue el candidato con más votos.

La función debe realizar lo siguiente:

Recibir un array de objetos, donde cada objeto tiene la siguiente estructura:

{ id: <votante_id>, candidate: <nombre_del_candidato> }

Utilizar un Map para contar los votos por candidato.

Determinar el candidato con más votos.

Retornar un objeto que contenga el nombre del candidato ganador y la cantidad de votos recibidos.

VOTOS: [
  { id: '114289451', candidate: "Alice" },
  { id: '414249420', candidate: "Bob" },
  { id: '116820394', candidate: "Alice" },
  { id: '478989489', candidate: "Charlie" },
  { id: '172838475', candidate: "Bob" },
  { id: '429393004', candidate: "Alice" }
]

RESULTADO: { candidate: 'Alice', votes: 3 }

*/

type Candidate = 'Alice' | 'Bob' | 'Charlie'

interface Vote {
  id: string
  candidate: Candidate
}

const tallyVotes = (votes: Vote[]) => {
  const voteCount = new Map<Candidate, number>()

  votes.forEach(({ candidate }) => {
    if (voteCount.has(candidate)) {
      const candidateVotes = voteCount.get(candidate) || 0
      voteCount.set(candidate, candidateVotes + 1)
    } else {
      voteCount.set(candidate, 1)
    }
  })

  let maxVotes = 0
  let winner = ''

  for (const [candidate, count] of voteCount.entries()) {
    if (count > maxVotes) {
      maxVotes = count
      winner = candidate
    }
  }

  return {
    candidate: winner,
    votes: maxVotes
  }
}

const votes: Vote[] = [
  { id: '114289451', candidate: 'Alice' },
  { id: '414249420', candidate: 'Bob' },
  { id: '116820394', candidate: 'Alice' },
  { id: '478989489', candidate: 'Charlie' },
  { id: '172838475', candidate: 'Bob' },
  { id: '429393004', candidate: 'Alice' }
]

console.log(tallyVotes(votes))
