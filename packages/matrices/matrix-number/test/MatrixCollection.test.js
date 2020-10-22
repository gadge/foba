import { decoMatrix, logger, says } from '@spare/logger'
import { MatrixCollection }         from '../src/MatrixCollection'


for (let [key, matrix] of Object.entries(MatrixCollection.flopShuffle({ size: 5, keyed: true }))) {
  matrix |> decoMatrix |> says[key]
}

'' |> logger

for (let [key, matrix] of Object.entries(MatrixCollection.flopShuffle({ size: 10, keyed: true }))) {
  matrix |> decoMatrix |> says[key]
}
