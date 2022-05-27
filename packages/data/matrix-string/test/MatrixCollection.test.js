import { decoMatrix, DecoMatrix, logger, says } from '@spare/logger'
import { MatrixCollection }                     from '../src/MatrixCollection'

MatrixCollection.flopShuffle({
  size: 5,
  keyed: false
}) |> decoMatrix |> says['test MatrixCollection']

'' |> logger

MatrixCollection.flopShuffle({
  size: 10
}) |> DecoMatrix() |> says['test MatrixCollection']
