export default function BinarySearch(array: Array<any>, target: number) {
  let left = 0
  let right = array.length - 1
  let middlePosition: number = Math.floor(left + (right - left) / 2)

  while (array.length > middlePosition) {
    let middleElement = array[middlePosition]

    if (middleElement === target) return middlePosition

    if (middleElement > target) {
      right = middlePosition - 1
      BinarySearch(array[middlePosition], target)
    }

    if (middleElement < target) {
      left = middlePosition + 1
      BinarySearch(array[middlePosition], target)
    }

    if (left > right) throw new Error('[error] Target not found')

    middlePosition = Math.floor(left + (right - left) / 2)
  }
  return -1
}
