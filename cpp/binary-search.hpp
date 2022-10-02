int binary_search(int array[10], int target)
{
  int left = 0;
  int right = 10 - 1; // we already know the length of the array
  int middleIndex = 0;

  while (left <= right)
  {
    middleIndex = left + (right - left) / 2;

    if (array[middleIndex] < target)
    {
      left = middleIndex + 1;
    } else if (array[middleIndex] > target)
    {
      right = middleIndex - 1;
    } else
    {
      return middleIndex;
    }
  }

  return -1;
}
