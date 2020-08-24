import { Table }                       from '@analys/table'
import { DecoPale, decoTable, logger } from '@spare/logger'
import { Verse }                       from '@spare/verse'
import { isString }                    from '@typen/literal'
import { promises }                    from 'fs'
import { NaiveCsv }                    from 'naivecsv'
import {tenseQuote} from '@spare/quote'

const quote_replacer = x => isString(x) && x.includes('\'') ? tenseQuote(x) : x
const transpile = async () => {
  const data = await promises.readFile(__dirname + '/assets/AirplaneEngineSpecs.csv')
  const table = await NaiveCsv.toTable(data) |> Table.from
  table
    .mutateColumn('app', x => Verse.vector(x.split(/,\s+/g), { read: tenseQuote }))
    .mutateColumn('plant', quote_replacer)
  table |> decoTable |> logger
  const prefix = 'export const AeroEngineSpecs = '
  const body = prefix + Verse.table(table)
  body |> logger
  await promises.writeFile(__dirname + '/../resources/real/AeroEngineSpecs.js', body)
}

transpile().then()
