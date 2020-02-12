import { Foba as FobaVec } from '@foba/vector'
import { randPropertyKey } from '@foba/util'
import { simpleMatrices } from './SimpleMatrices'

export const simpleMatricesRobust = ({ h = 3, w = 4, fn } = {}) => {
  let key
  const matrices = simpleMatrices({ h, w, fn })
  return {
    null: null,
    undefined: undefined,
    numeric: 0xff,
    string: key = FobaVec|> randPropertyKey,
    emptyVector: [],
    emptyEntry: [,],
    stringVector: FobaVec.flop({ p: key, size: w }),
    numberVector: matrices.oneRow[0].slice(),
    ...
      matrices
  }
}

export const SimpleMatricesRobust = simpleMatricesRobust()


