import { toTable }             from '@analys/convert'
import { MUT }                 from '@analys/enum-mutabilities'
import { AVERAGE }             from '@analys/enum-pivot-mode'
import { NUM_ASC, NUM_DESC }   from '@aryth/comparer'
import { roundD1 }             from '@aryth/math'
import { esvar }               from '@flua/utils'
import { Vinylize }            from '@flua/vinylize'
import { AgeOfEmpiresIIUnits } from '@foba/table/resources/real/AgeOfEmpiresIIUnits'
import { decoCrostab, says }   from '@spare/logger'
import { Verse }               from '@spare/verse'
import { isNumeric }           from '@typen/num-strict'
import gulp                    from 'gulp'

const RANKED_AGES = ['Dark', 'Feudal', 'Castle', 'Imperial']
const RANKED_BUILDINGS = ['Barracks', 'Archery Range', 'Stable', 'Siege Workshop']
const DEST = 'packages/tabulars/crostab/resources'
const crosTabCollection = {}
export const saveAgeOfEmpiresIICrosTab = async () => {
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
  crosTabCollection.AOEIIUnitsAttackByStages = table
    .crosTab({ side: 'age', banner: 'building', field: { attack: AVERAGE } })
    .map(({ value }) => isNumeric(value) ? roundD1(value) : value, MUT)
  crosTabCollection.AOEIIUnitsHpByStages = table
    .crosTab({ side: 'age', banner: 'building', field: { hp: AVERAGE } })
    .map(({ value }) => isNumeric(value) ? roundD1(value) : value, MUT)

  for (let [key, crosTab] of Object.entries(crosTabCollection)) {
    crosTab |> decoCrostab |> says[key]
    await Vinylize(key + '.js')
      .p(esvar(key))
      .p(Verse.crostab(crosTab))
      .asyncPipe(gulp.dest(DEST))
  }

}