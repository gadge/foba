import { NaiveCsv } from 'naivecsv'
import { promises } from 'fs'
import { decoTable, logger } from '@spare/logger'
import { Verse } from '@spare/verse'
import { Table } from '@analys/table'

const transpile = async () => {
  const data = await promises.readFile(__dirname + '/assets/AirplaneEngineSpecs.csv')
  const table = await NaiveCsv.toTable(data) |> Table.from
  table
    .mutateColumn('app', x => Verse.vector(x.split(/,\s*/g)))
    .mutateColumn('manu', x => typeof x === 'string' && x.includes('\'') ? x.replace(/'/g, '\\\'') : x)
  table |> decoTable |> logger
  const prefix = 'export const AeroEngineSpecs = '
  const body = prefix + Verse.table(table)
  body |> logger
  await promises.writeFile(__dirname + '/../resources/real/AeroEngineSpecs.js', body)
}

transpile().then()
