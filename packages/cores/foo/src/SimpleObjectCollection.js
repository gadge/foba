import { CrostabCollection }       from '@foba/crostab'
import { ObjectCollection as OCN } from '@foba/object-number'
import { ObjectCollection as OCS } from '@foba/object-string'
import { sizeOscillator }          from '@foba/util'

const keyed = true

export const objectify = (entriesByBannerInKeyValue) => {
  let oneEntry = entriesByBannerInKeyValue
  const [[k, entries]] = Object.entries(oneEntry), o = {}
  for (let [k, v] of entries) o[k] = v
  return (oneEntry = {}, oneEntry[k] = o, oneEntry)
}

export const simpleObjectCollection = ({ h = 4 } = {}) => {
  return Object.assign({ empty: {}, },
    OCN.flopShuffle({ size: h |> sizeOscillator, keyed }),
    OCS.flopShuffle({ size: h |> sizeOscillator, keyed }),
    CrostabCollection.flopHLookUp(({ size: h |> sizeOscillator, keyed }))
      |> objectify
  )
}

export const SimpleObjectCollection = simpleObjectCollection()
