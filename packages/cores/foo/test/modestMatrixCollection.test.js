import { decoMatrix, logger, says } from '@spare/logger'
import { ModestMatrixCollection }   from '../src/ModestMatrixCollection'

for (let [key, matrix] of Object.entries(ModestMatrixCollection)) {
  matrix |> decoMatrix |> says[key]
}

'' |> logger
