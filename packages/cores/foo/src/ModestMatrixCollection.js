import { flopKey }                                    from '@aryth/rand'
import { VectorCollection as StringVectorCollection } from '@foba/vector-string'
import { simpleMatrixCollection }                     from './SimpleMatrixCollection'

export const modestMatrixCollection = ({ h = 3, w = 4, fn } = {}) => {
  let key
  const matrices = simpleMatrixCollection({ h, w, fn })
  return {
    null: null,
    undefined: undefined,
    numeric: 0xff,
    string: key = StringVectorCollection|> flopKey,
    emptyVector: [],
    emptyEntry: [,],
    stringVector: StringVectorCollection.flopShuffle({ p: key, size: w }),
    numberVector: matrices.oneRow[0].slice(),
    ...matrices
  }
}

export const ModestMatrixCollection = modestMatrixCollection()


