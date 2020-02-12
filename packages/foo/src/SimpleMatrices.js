import { randMatrix } from '../util/randMatrix'

export const simpleMatrices = ({ h = 3, w = 4, fn } = {}) => {
  let matrix = randMatrix({ h, w, fn })
  return {
    emptyMatrix: [[]],
    oneRow: [matrix[0].slice()],
    oneColumn: matrix.map(([x]) => [x]),
    simpleMatrix: matrix
  }
}

export const SimpleMatrices = simpleMatrices()



