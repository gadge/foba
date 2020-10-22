import { TopBoxOffice } from '../resources/real/TopBoxOffice'
import { DecoTable, decoTable, delogger, logger } from '@spare/logger'
import { TableCollection } from '../src/TableCollection'

TopBoxOffice |> decoTable |> logger
const table = TableCollection.flopShuffle({ p: 'AeroEngineSpecs' })
table |> delogger
table|> DecoTable({ abstract: String }) |> logger
