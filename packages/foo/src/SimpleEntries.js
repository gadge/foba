import { Foba as FobaObN } from '@foba/object-number'
import { Foba as FobaObS } from '@foba/object-string'
import { Foba as FobaCrX } from '@foba/crostab'
import { sizeOscillator } from '../util/sizeOscillator'

export const simpleEntries = ({ h = 4 } = {}) => {
  const ob = {
    numeric: Object.entries(FobaObN.flop({ size: h |> sizeOscillator })),
    string: Object.entries(FobaObS.flop({ size: h |> sizeOscillator }))
  }
  const another = FobaCrX.flopEntriesByBanner({ size: h |> sizeOscillator, keyValuePair: true })
  return Object.assign(ob, another)
}

export const SimpleEntries = simpleEntries()



