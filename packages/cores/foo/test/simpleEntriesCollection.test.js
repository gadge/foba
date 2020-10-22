import { decoEntries, logger, says } from '@spare/logger'
import { SimpleEntriesCollection }   from '../src/SimpleEntriesCollection'

for (let [key, entries] of Object.entries(SimpleEntriesCollection)) {
  entries |> decoEntries |> says[key]
}

'' |> logger