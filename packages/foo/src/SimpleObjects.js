import { sizeOscillator } from '../util/sizeOscillator'
import { Foba as FobaObN } from '@foba/object-number'
import { Foba as FobaObS } from '@foba/object-string'
import { Foba as FobaCrX } from '@foba/crostab'

const keyValuePair = true

export const simpleObjects = ({ h = 4 } = {}) =>
  Object.assign({ empty: {}, },
    FobaObN.flop({ size: h |> sizeOscillator, keyValuePair }),
    FobaObS.flop({ size: h |> sizeOscillator, keyValuePair }),
    FobaCrX.flopEntriesByBanner(({ size: h |> sizeOscillator, keyValuePair }))
  )

export const SimpleObjects = simpleObjects()


