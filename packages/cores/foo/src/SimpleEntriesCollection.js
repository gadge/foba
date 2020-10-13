import { CrostabCollection }                          from '@foba/crostab'
import { ObjectCollection as NumberObjectCollection } from '@foba/object-number'
import { ObjectCollection as StringObjectCollection } from '@foba/object-string'
import { sizeOscillator }                             from '@foba/util'
import { mutate }                                     from '@vect/object-mapper'

export const simpleEntriesCollection = ({ h = 4 } = {}) => {
  const objectCollection = Object.assign({},
    NumberObjectCollection.flopShuffle({ size: h |> sizeOscillator, keyed: true }),
    StringObjectCollection.flopShuffle({ size: h |> sizeOscillator, keyed: true }),
  )
  mutate(objectCollection, Object.entries)
  return Object.assign({},
    objectCollection,
    CrostabCollection.flopHLookUp({ size: h |> sizeOscillator, keyed: true })
  )
}

export const SimpleEntriesCollection = simpleEntriesCollection()



