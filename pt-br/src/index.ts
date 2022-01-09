import chalk from 'chalk'

import OrganizacaoRapida from './OrganizacaoRapida'
import BuscaBinaria from './BuscaBinaria'

const vetorImpar = [0, 2, 3, 4, 6, 7, 8, 10, 11, 22, 33, 43, 54]
const vetorPar = [1, 3, 4, 6, 8, 9, 20, 34, 41, 54, 67, 212, 434, 501, 502, 1002, 3403, 5000, 5001, 5002, 5003, 5004]

const alvo = Math.floor(Math.random() * 5005)

try {
  console.log(
    'Índice encontrado, ',
    chalk.green(
      BuscaBinaria(OrganizacaoRapida(vetorPar), alvo)
    )
  )
} catch (erro) {
  console.log(
    chalk.yellow(
      erro
    )
  )
}
