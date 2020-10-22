import { decoMatrix, logger, says } from '@spare/logger'
import { SimpleMatrixCollection }   from '../src/SimpleMatrixCollection'

for (let [key, matrix] of Object.entries(SimpleMatrixCollection)) {
  matrix |> decoMatrix |> says[key]
}

'' |> logger
