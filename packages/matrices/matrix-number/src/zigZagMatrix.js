import { init as initVector } from '@vect/vector-init'


export function zigZagMatrix(n) {
  const mx = initVector(n, () => Array(n))
  for (
    let i = 1, j = 1, x = 0;
    x < n * n;
    x++
  ) {
    mx[i - 1][j - 1] = x
    if ((i + j) % 2) {   // Odd stripes
      i < n ? (i++) : (j++, j++)
      if (j > 1) j--
    } else {     // Even stripes
      j < n ? (j++) : (i++, i++)
      if (i > 1) i--
    }
  }
  return mx
}
