export default function BinarySearch(array: any[], target: number) {
  let left = 0
  let right = array.length - 1
  let middleIndex = Math.floor(left + (right - left) / 2)

  while (array.length > middleIndex) {
    let middleNumber = array[middleIndex]

    if (middleNumber === target) return middleIndex

    if (middleNumber > target) {
      right = middleIndex - 1
      BinarySearch(array[middleIndex], target)
    }

    if (middleNumber < target) {
      left = middleIndex + 1
      BinarySearch(array[middleIndex], target)
    }

    if (left > right) throw new Error('[error] Target not found')

    middleIndex = Math.floor(left + (right - left) / 2)
  }
  return -1
}
