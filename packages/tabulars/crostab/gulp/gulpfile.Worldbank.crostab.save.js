import { toTable }                                  from '@analys/convert'
import { esvar }                                    from '@flua/utils'
import { Vinylize }                                 from '@flua/vinylize'
import { IndicatorCollection }                      from '@foba/table/gulp/gulpfile.Worldbank.table.save'
import { deco }                                     from '@spare/deco'
import { decoCrostab, DecoTable, logger, says, Xr } from '@spare/logger'
import { Verse }                                    from '@spare/verse'
import gulp                                         from 'gulp'

const DEST = 'packages/tabulars/crostab/resources'

export const saveWorldbankCrostab = async () => {
  for (let key in IndicatorCollection) {
    const file = process.cwd() + '/packages/tabulars/table/static/worldbank/' + key + '.js'
    /** @type {Table} */const content = await import(file)
    Xr().reading(file) |> says['saveWorldbankCrostab']
    const table = content[key] |> toTable
    const { spec } = IndicatorCollection[key]
    if (spec) {
      table |> DecoTable({ top: 3, bottom: 1 }) |> logger
      spec |> deco |> logger
      const crosTab = table.crosTab(spec)
      crosTab |> decoCrostab |> logger
      await Vinylize(spec.name + '.js')
        .p(esvar(spec.name))
        .p(Verse.crostab(crosTab))
        .asyncPipe(gulp.dest(DEST))
      Xr().save(DEST + '/' + spec.name) |> says['saveWorldbankCrostab']
    }
  }
}