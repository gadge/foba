import { progressiveRandomMatrix } from '@foba/matrix-number'

export const simpleMatrixCollection = ({ h = 3, w = 4, fn } = {}) => {
  let matrix = progressiveRandomMatrix(h, w, fn)
  return {
    emptyMatrix: [[]],
    oneRow: [matrix[0].slice()],
    oneColumn: matrix.map(([x]) => [x]),
    simpleMatrix: matrix
  }
}

export const SimpleMatrixCollection = simpleMatrixCollection()



