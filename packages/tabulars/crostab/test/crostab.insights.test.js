import { toTable }               from '@analys/convert'
import { MUT }                   from '@analys/enum-mutabilities'
import { INCRE }                 from '@analys/enum-pivot-mode'
import { NUM_ASC }               from '@aryth/comparer'
import { BigMacAdjustedIndexes } from '@foba/table/static/BigMacAdjustedIndexes'

import { decoCrostab, DecoTable, logger, says } from '@spare/logger'

const COUNTRY_LIST = ['USA', 'CHN', 'CAN', 'AUS', 'RUS', 'JPN', 'IND', 'TWN', 'TUR', 'BRA']
const test = () => {
  /** @type {Table} */const table = (BigMacAdjustedIndexes|> toTable)
    .proliferateColumn({ key: 'country', to: x => COUNTRY_LIST.indexOf(x), as: 'countryId', }, MUT)
    .sort('countryId', NUM_ASC)
    .find({ country: x => COUNTRY_LIST.includes(x) }, MUT)
  table |> DecoTable({ top: 3, bottom: 2 }) |> logger
  /** @type {CrosTab} */ const crosTab = table
    .crosTab({
      side: 'date',
      banner: 'country',
      field: { priceUSD: INCRE }
    })
  // .map(({ value }) => isNumeric(value) ? roundD1(value) : value, MUT)

  crosTab |> decoCrostab |> says['big mac indexes']
}

test()