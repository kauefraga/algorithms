<h1 align="center">Binary Search Algorithm</h1>

<h2 align="center">Algorithm</h2>

```
- Create pointers -> left(l) and right(r)
- Create middle pointer(m) -> l+(r-l)/2
- While (array size > m)
  - Create middle number(mn) -> array[m]
  - Verifications
    - if (mn == target) return m
    - if (mn > target) r = m - 1
    - if (mn < target) l = m + 1
    - if (l > r) "Target not found"
  - m = l+(r-l)/2
- return -1 (if search don't start)
```

<p align="center">
  <img
    src='https://raw.githubusercontent.com/kauefraga/assets/main/BinarySearch/BinarySearch.png'
    width="500px"
    height="350px"
  />
</p>
