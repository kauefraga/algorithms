def BinarySearch(array: list, target: int):
	left = 0
	right = len(array) - 1
	middleIndex = 0

	while left <= right:

		middleIndex = left + (right - left) // 2

		if array[middleIndex] < target:
			left = middleIndex + 1

		elif array[middleIndex] > target:
			right = middleIndex - 1

		else:
			return middleIndex
	return -1
