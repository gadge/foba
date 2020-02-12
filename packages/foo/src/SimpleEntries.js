import { Foba as FobaObN } from '@foba/object-number'
import { Foba as FobaObS } from '@foba/object-string'
import { Foba as FobaCrX } from '@foba/crostab'
import { randPropertyKey, Shuffler } from '@foba/util'
import { Roulett } from 'roulett'
import { CrosTab } from 'crostab'

export const randCrosTabBannerToEntry = (foba, { size = 4 } = {}) => {
  const key = foba |> randPropertyKey
  const crosTab = foba[key]
  const side = crosTab.side |> Shuffler({ size: 1 })
  const banner = crosTab.banner |> Shuffler({ size })
  const cx = CrosTab.from(crosTab).select({ side, banner })
  const [row] = cx.matrix, [sideLabel] = side
  const ob = {}
  ob[`${key}_${sideLabel}`] = row.map((x, i) => [banner[i], x])
  return ob
}
export const simpleEntries = ({ h = 4 } = {}) => {
  const ob = {
    numeric: Object.entries(FobaObN.flop({ size: Roulett.between(h - 1, h + 1) })),
    string: Object.entries(FobaObS.flop({ size: Roulett.between(h - 1, h + 1) }))
  }
  Object.assign(ob, randCrosTabBannerToEntry(FobaCrX, { size: Roulett.between(h - 1, h + 1) }))
  return ob
}
export const SimpleEntries = simpleEntries()


