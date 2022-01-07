import chalk from 'chalk'
import BinarySearch from './BinarySearch'

// Implementar entrada de dados
// Perguntar se quer um array par ou ímpar
// Mostrar array
// Perguntar um número (target)

// Traduzir pra pt-br

const array = [1, 3, 4, 6, 8, 9, 20, 34, 41, 54, 67, 212, 434, 501, 502, 1002, 3403, 5000, 5001, 5002, 5003, 5004]
const target = 1

array.sort((a, b) => { return a - b })

try {
  console.log(
    chalk.green(
      BinarySearch(array, target)
    )
  )
} catch (error) {
  console.log(
    chalk.yellow(
      error
    )
  )
}

