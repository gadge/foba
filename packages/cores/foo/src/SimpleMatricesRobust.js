import { VectorCollection } from '@foba/vector-string'
import { flopKey } from '@aryth/rand'
import { simpleMatrices } from './SimpleMatrices'

export const simpleMatricesRobust = ({ h = 3, w = 4, fn } = {}) => {
  let key
  const matrices = simpleMatrices({ h, w, fn })
  return {
    null: null,
    undefined: undefined,
    numeric: 0xff,
    string: key = VectorCollection|> flopKey,
    emptyVector: [],
    emptyEntry: [,],
    stringVector: VectorCollection.flopShuffle({ p: key, size: w }),
    numberVector: matrices.oneRow[0].slice(),
    ...
      matrices
  }
}

export const SimpleMatricesRobust = simpleMatricesRobust()


