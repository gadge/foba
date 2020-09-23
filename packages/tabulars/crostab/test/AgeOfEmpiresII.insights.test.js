import { toTable }             from '@analys/convert'
import { MUT }                 from '@analys/enum-mutabilities'
import { AVERAGE }             from '@analys/enum-pivot-mode'
import { NUM_ASC, NUM_DESC }   from '@aryth/comparer'
import { roundD1 }             from '@aryth/math'
import { AgeOfEmpiresIIUnits } from '@foba/table/resources/real/AgeOfEmpiresIIUnits'
import { decoCrostab, says }   from '@spare/logger'
import { isNumeric }           from '@typen/num-strict'


const RANKED_AGES = ['Dark', 'Feudal', 'Castle', 'Imperial']
const RANKED_BUILDINGS = ['Barracks', 'Archery Range', 'Stable', 'Siege Workshop']
const test = () => {
  /** @type {Table} */const table = AgeOfEmpiresIIUnits|> toTable
  table
    .proliferateColumn(
      [
        { key: 'age', to: x => RANKED_AGES.indexOf(x), as: 'ageIndex' },
        { key: 'building', to: x => RANKED_BUILDINGS.indexOf(x), as: 'buildingIndex' },
      ],
      MUT
    )
    .sort('ageIndex', NUM_DESC, MUT)
    .sort('buildingIndex', NUM_ASC, MUT)
  /** @type {CrosTab} */ const attackByStages = table
    .crosTab({
      side: 'age',
      banner: 'building',
      field: { attack: AVERAGE }
    })
    .map(({ value }) => isNumeric(value) ? roundD1(value) : value, MUT)
  /** @type {CrosTab} */ const hpByStages = table
    .crosTab({
      side: 'age',
      banner: 'building',
      field: { hp: AVERAGE }
    })
    .map(({ value }) => isNumeric(value) ? roundD1(value) : value, MUT)
  attackByStages |> decoCrostab |> says['attackByStages']
  hpByStages |> decoCrostab |> says['hpByStages']
}

test()