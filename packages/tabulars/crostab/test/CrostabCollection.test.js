import { deca }              from '@spare/deco'
import { logger, says }      from '@spare/logger'
import { CrostabCollection } from '../src/CrostabCollection'

CrostabCollection.flopShuffle({
  size: 5,
  keyed: true
}) |> deca({ va: 2 }) |> says['test CrostabCollection']

'' |> logger

CrostabCollection.flopHLookUp({
  size: 10,
  keyed: true
})
  |> deca({ va: 2 })
  // |> DecoEntries({ indexed: true })
  |> says['test CrostabCollection']
