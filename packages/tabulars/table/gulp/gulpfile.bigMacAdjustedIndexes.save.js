import { Acq }                from '@acq/acq'
import { toTable }            from '@analys/convert'
import { MUT }                from '@analys/enum-mutabilities'
import { Table }              from '@analys/table'
import { NUM_DESC, STR_DESC } from '@aryth/comparer'
import { round, roundD2 }     from '@aryth/math'
import { esvar }              from '@flua/utils'
import { Vinylize }           from '@flua/vinylize'
import { DecoTable, says }    from '@spare/logger'
import { Verse }              from '@spare/verse'
import gulp                   from 'gulp'
import { NaiveCsv }           from 'naivecsv'

const STATIC = 'packages/tabulars/table/static'
const RESOURCES = 'packages/tabulars/table/resources/real'
const FILENAME = 'BigMacAdjustedIndexes'

/**
 * @todo if return connection refuse error, modify /etc/hosts and add
 * @todo [ip] raw.githubusercontent.com
 * @return {Promise<void>}
 */
export const saveBigMacAdjustedIndexes = async () => {
  const fieldMapping = [
    ['date', 'date'],
    ['iso_a3', 'country'],
    ['currency_code', 'currency'],
    ['name', 'name'],
    ['local_price', 'priceLocal'],
    ['dollar_ex', 'localToUSD'],
    ['dollar_price', 'priceUSD'],
    ['GDP_dollar', 'GDPinUSD'],
    ['adj_price', 'priceAdjusted'],
    ['USD', 'USD'],
    ['EUR', 'EUR'],
    ['GBP', 'GBP'],
    ['JPY', 'JPY'],
    ['CNY', 'CNY'],
  ]
  const table = (await Acq.fetch({
    title: 'bigMacIndex',
    base: 'https://raw.githubusercontent.com/TheEconomist/big-mac-data',
    url: '/master/output-data/big-mac-adjusted-index.csv',
    prep: csv => Table.from(NaiveCsv.toTable(csv, { popBlank: true })).select(fieldMapping),
    spin: true
  })) |> toTable
  table
    .sort('priceUSD', NUM_DESC, MUT)
    .sort('date', STR_DESC, MUT)
    .mutate(round, { fields: ['GDPinUSD'] })
    .mutate(roundD2, { fields: ['priceLocal', 'localToUSD', 'priceUSD', 'priceAdjusted'] })

  table |> DecoTable({ top: 3, bottom: 1 }) |> says[FILENAME + '.original']
  await Vinylize(FILENAME + '.js')
    .p(esvar(FILENAME))
    .p(table |> Verse.table)
    .asyncPipe(gulp.dest(STATIC))

  const latestDate = table.cell(0, 'date')
  const briefTable = table
    .sort('date', STR_DESC, MUT)
    .find({ date: x => x === latestDate },)
  briefTable |> DecoTable({ top: 3, bottom: 1 }) |> says[FILENAME + '.briefed']
  await Vinylize(FILENAME + '.js')
    .p(esvar(FILENAME))
    .p(briefTable |> Verse.table)
    .asyncPipe(gulp.dest(RESOURCES))
}
