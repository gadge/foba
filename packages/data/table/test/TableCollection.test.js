import { decoTable, says } from '@spare/logger'
import { TableCollection } from '../index'

const paired = TableCollection.flopShuffle({
  size: 5,
  keyed: true
})

for (const [ key, table ] of Object.entries(paired)) {
  table |> decoTable |> says[key]
}
