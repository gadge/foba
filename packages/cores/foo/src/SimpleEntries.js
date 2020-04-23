import { CrostabCollection }       from '@foba/crostab'
import { ObjectCollection as OCN } from '@foba/object-number'
import { ObjectCollection as OCS } from '@foba/object-string'
import { sizeOscillator }          from '@foba/util'

export const simpleEntries = ({ h = 4 } = {}) => {
  const ob = {
    numeric: Object.entries(OCN.flopShuffle({ size: h |> sizeOscillator })),
    string: Object.entries(OCS.flopShuffle({ size: h |> sizeOscillator }))
  }
  const another = CrostabCollection.flopHLookUp({ size: h |> sizeOscillator, keyed: true })
  return Object.assign(ob, another)
}

export const SimpleEntries = simpleEntries()



