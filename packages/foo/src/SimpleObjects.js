import { sizeOscillator } from '@foba/util'
import { Foba as FobaObN } from '@foba/object-number'
import { Foba as FobaObS } from '@foba/object-string'
import { Foba as FobaCrX } from '@foba/crostab'

const keyValuePair = true

export const objectify = (entriesByBannerInKeyValuePair) => {
  let oneEntry = entriesByBannerInKeyValuePair
  const [[k, entries]] = Object.entries(oneEntry), o = {}
  for (let [k, v] of entries) o[k] = v
  return (oneEntry = {}, oneEntry[k] = o, oneEntry)
}

export const simpleObjects = ({ h = 4 } = {}) => {
  return Object.assign({ empty: {}, },
    FobaObN.flop({ size: h |> sizeOscillator, keyValuePair }),
    FobaObS.flop({ size: h |> sizeOscillator, keyValuePair }),
    FobaCrX.flopEntriesByBanner(({ size: h |> sizeOscillator, keyValuePair }))
      |> objectify
  )
}

export const SimpleObjects = simpleObjects()
