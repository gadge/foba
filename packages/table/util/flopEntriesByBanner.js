import { flopPropKey, Shuffler } from '@foba/util'
import { CrosTab } from 'crostab'

export function flopEntriesByBanner (foba) {
  const { size, keyValuePair } = this
  let key = foba |> flopPropKey
  let crostab = foba[key],
    side = crostab.side |> Shuffler({ size: 1 }),
    banner = crostab.banner |> Shuffler({ size }),
    entries
  crostab = CrosTab.from(crostab).select({ side, banner })
  entries = crostab.row(0).map((x, i) => [banner[i], x])
  let o
  return keyValuePair
    ? (o = {}, o[`${key}_${side[0]}`] = entries, o)
    : entries
}
