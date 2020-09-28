import { roundD2 }                      from '@aryth/math'
import { DecoMatrix, decoMatrix, says } from '@spare/logger'
import { size }                         from '@vect/matrix'
import { draft, init }                  from '@vect/matrix-init'
import { swap }                         from '@vect/swap'

function gaussJordanInversion(mx) {
  const [l, w] = size(mx)
  if (w !== l) {throw new Error('Not a square matrix')}
  const aug = init(l, 2 * l, () => 0)
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l; j++)
      aug[i][j] = mx[i][j]
    aug[i][i + l] = 1.0 // augment by identity matrix to right
  }
  matrixToReducedRowEchelonForm(aug)
  const inv = draft(l, l)
  // remove identity matrix to left
  for (let i = 0; i < l; i++) {
    for (let j = l; j < 2 * l; j++)
      inv[i][j - l] = aug[i][j]
  }
  return inv
}

function matrixToReducedRowEchelonForm(mx) {
  const [rowCount, colCount] = size(mx)
  let lead = 0
  for (let r = 0; r < rowCount; r++) {
    if (colCount <= lead) return
    let i = r
    while (mx[i][lead] === 0.0) {
      i++
      if (rowCount === i) {
        i = r
        lead++
        if (colCount === lead) return
      }
    }
    swap.call(mx, i, r)
    if (mx[r][lead] !== 0.0) {
      const div = mx[r][lead]
      for (let j = 0; j < colCount; j++) mx[r][j] /= div
    }
    for (let k = 0; k < rowCount; k++) {
      if (k !== r) {
        const mult = mx[k][lead]
        for (let j = 0; j < colCount; j++) mx[k][j] -= mx[r][j] * mult
      }
    }
    lead++
  }
  return mx
}

export const test = () => {
  const candidates = {
    identity: [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 1]
    ],
    arch: [
      [2, -1, 0],
      [-1, 2, -1],
      [0, -1, 2]
    ]
  }
  for (let [key, mx] of Object.entries(candidates)) {
    mx |> decoMatrix |> says['original of ' + key]
    const inversed = gaussJordanInversion(mx)
    inversed |> DecoMatrix({ read: roundD2 }) |>  says['inversed ' + key]
  }

}

test()