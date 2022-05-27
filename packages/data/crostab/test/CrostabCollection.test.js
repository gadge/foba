import { deca }                      from '@spare/deco'
import { decoCrostab, logger, says } from '@spare/logger'
import { CrostabCollection }         from '../src/CrostabCollection'

const sampleCrostab = CrostabCollection.flopShuffle({
  size: 5,
  keyed: true
})

sampleCrostab |> deca({ va: 2 }) |> says['test CrostabCollection']
for (let [ key, crostab ] of Object.entries(sampleCrostab)) {
  crostab |> decoCrostab |> says[key]
}

'' |> logger

CrostabCollection.flopHLookUp({
  size: 10,
  keyed: true
})
  |> deca({ va: 2 })
  // |> DecoEntries({ indexed: true })
  |> says['test CrostabCollection']
