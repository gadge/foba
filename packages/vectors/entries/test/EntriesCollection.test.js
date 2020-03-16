import { EntriesCollection } from '../src/EntriesCollection'
import { logger } from '@spare/logger'
import { deca } from '@spare/deco'

EntriesCollection.flopShuffle({
  size: 5,
  keyed: true
}) |> deca({ va: 2 }) |> logger
