import { sizeOscillator }                                 from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'

const keyed = true

export const simpleVectorCollection = ({ h = 7 } = {}) =>
  Object.assign({},
    { empty: [] },
    NumberVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
    NumberVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
    StringVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
    StringVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
  )

export const SimpleVectorCollection = simpleVectorCollection()
