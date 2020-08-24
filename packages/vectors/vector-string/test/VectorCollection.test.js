import { VectorCollection } from '../src/VectorCollection'
import { DecoVector, logger, says } from '@spare/logger'
import { deca } from '@spare/deco'

VectorCollection.flopShuffle({
  size: 5,
  keyed: true
}) |> deca({ va: 2 }) |> says['test MatrixCollection']

'' |> logger

VectorCollection.flopShuffle({
  size: 10
}) |> DecoVector({ indexed: true }) |> says['test MatrixCollection']
