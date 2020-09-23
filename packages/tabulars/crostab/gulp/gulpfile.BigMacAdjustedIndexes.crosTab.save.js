import { toTable }                              from '@analys/convert'
import { MUT }                                  from '@analys/enum-mutabilities'
import { INCRE }                                from '@analys/enum-pivot-mode'
import { NUM_ASC }                              from '@aryth/comparer'
import { esvar }                                from '@flua/utils'
import { Vinylize }                             from '@flua/vinylize'
import { BigMacAdjustedIndexes }                from '@foba/table/static/BigMacAdjustedIndexes'
import { decoCrostab, DecoTable, logger, says } from '@spare/logger'
import { Verse }                                from '@spare/verse'
import gulp                                     from 'gulp'

const COUNTRY_LIST = ['USA', 'CHN', 'CAN', 'AUS', 'RUS', 'JPN', 'IND', 'TWN', 'TUR', 'BRA']
const DEST = 'packages/tabulars/crostab/resources'
const FILENAME = 'BigMacAdjustedIndexes'
export const saveBigMacAdjustedIndexesCrostab = async () => {
  /** @type {Table} */const table = (BigMacAdjustedIndexes|> toTable)
    .proliferateColumn({ key: 'country', to: x => COUNTRY_LIST.indexOf(x), as: 'countryId', }, MUT)
    .sort('countryId', NUM_ASC)
    .find({ country: x => COUNTRY_LIST.includes(x) }, MUT)
  table |> DecoTable({ top: 3, bottom: 2 }) |> logger
  const crosTab = table
    .crosTab({
      side: 'date',
      banner: 'country',
      field: { priceUSD: INCRE }
    })
  crosTab |> decoCrostab |> says[FILENAME]
  await Vinylize(FILENAME + '.js')
    .p(esvar(FILENAME))
    .p(Verse.crostab(crosTab))
    .asyncPipe(gulp.dest(DEST))
}