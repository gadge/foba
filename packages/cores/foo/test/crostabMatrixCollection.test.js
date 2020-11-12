import { deco }                    from '@spare/deco'
import { logger, says }            from '@spare/logger'
import { CrostabMatrixCollection } from '../src/CrostabMatrixCollection'

for (let [key, matrix] of Object.entries(CrostabMatrixCollection)) {
  matrix |> deco |> says[key]
}

'' |> logger
