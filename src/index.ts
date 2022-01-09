import chalk from 'chalk'

import Quicksort from './Quicksort'
import BinarySearch from './BinarySearch'

const array = [1, 3, 4, 6, 8, 9, 20, 34, 41, 54, 67, 212, 434, 501, 502, 1002, 3403, 5000, 5001, 5002, 5003, 5004]
// const arrayOdd = [0, 2, 3, 4, 6, 7, 8, 10, 11, 22, 33, 43, 54]

const target = 8 || 5002

try {
  console.log(
    chalk.green(
      BinarySearch(Quicksort(array), target)
    )
  )
} catch (error) {
  console.log(
    chalk.yellow(
      error
    )
  )
}
