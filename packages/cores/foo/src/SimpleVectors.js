import { sizeOscillator }                                 from '@foba/util'
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector'

const keyed = true

export const simpleVectors = ({ h = 7 } = {}) => {
  return Object.assign({ empty: [], },
    NumberVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
    NumberVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
    StringVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
    StringVectorCollection.flopShuffle({ size: h |> sizeOscillator, keyed }),
  )
}

export const SimpleVectors = simpleVectors()
