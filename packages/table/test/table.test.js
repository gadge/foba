import { TopBoxOffice } from '../resources/real/TopBoxOffice'
import { DecoTable, decoTable, delogger, logger } from '@spare/logger'
import { Foba } from '../src/Foba'

TopBoxOffice |> decoTable |> logger
const table = Foba.flopShuffle({ p: 'TopBoxOffice' })
table |> delogger
table|> DecoTable({ abstract: String }) |> logger
