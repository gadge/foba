import { decoTable }       from '@spare/deco-table'
import { TableCollection } from '../index.js'

{
  const table = TableCollection.flopShuffle()
  table|> decoTable |> console.log
}

{
  const table = TableCollection.flopShuffle({ key: 'AeroEngineSpecs' })
  table|> decoTable |> console.log
}
