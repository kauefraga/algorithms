from BinarySearch import BinarySearch

array = [1, 3, 4, 6, 8, 9, 20, 34, 41, 54, 67, 212, 434, 501, 502, 1002, 3403, 5000, 5001, 5002, 5003, 5004]
# arrayOdd = [0, 2, 3, 4, 6, 7, 8, 10, 11, 22, 33, 43, 54]
print(array)
target = input('\nWhich number do you choose? ')

result = BinarySearch(array, int(target))

if result != -1:
	print("Target is here, array[{index}]".format(index=result))
else:
	print("Target not found")
