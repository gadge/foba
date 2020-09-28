import { draft, init } from '@vect/matrix-init'

export const upperPascalMatrix = size => {
  const m = init(size, size, () => null)
  for (let c = 0; c < size; c++) m[0][c] = 1
  for (let r = 1; r < size; r++) {
    for (let c = r; c < size; c++) {
      m[r][c] = m[r - 1][c - 1] + (m[r][c - 1] ?? 0)
    }
  }
  return m
}

export const lowerPascalMatrix = size => {
  const m = init(size, size, () => null)
  for (let r = 0; r < size; r++) m[r][0] = 1
  for (let c = 1; c < size; c++) {
    for (let r = c; r < size; r++) {
      m[r][c] = m[r - 1][c - 1] + (m[r - 1][c] ?? 0)
    }
  }
  return m
}

export const symmetricPascalMatrix = size => {
  const m = draft(size, size)
  for (let i = 0; i < size; i++) m[0][i] = m[i][0] = 1
  for (let r = 1; r < size; r++) {
    for (let c = 1; c < size; c++) {
      m[r][c] = m[r - 1][c] + m[r][c - 1]
    }
  }
  return m
}
 