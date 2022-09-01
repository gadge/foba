import { decoTable }       from '@spare/deco-table'
import { CrostabCollection } from '../index.js'

{
  const table = CrostabCollection.flopShuffle()
  table|> decoTable |> console.log
}

{
  const table = CrostabCollection.flopShuffle({ key: 'BigMacAdjustedIndexes' })
  table|> decoTable |> console.log
}
