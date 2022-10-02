#include <iostream>
#include "binary-search.hpp"

using namespace std;

int main()
{
  int target, answer;
  int array[10] = { 1, 3, 4, 6, 8, 9, 20, 34, 41, 54 };

  for (int i = 0; i <= 10 - 1; i++)
  {
    cout << array[i] << " ";
  }
  cout << endl << "Which number do you choose? " << endl;
  cin >> target;

  // answer = index of target
  answer = binary_search(array, target);

  if (answer != -1)
  {
    cout << "The target index is " << answer << endl;
  } else
  {
    cout << "Target not found" << endl;
  }

  return 0;
}
