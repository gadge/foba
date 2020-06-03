import { ObjectCollection } from '../src/ObjectCollection'
import { deca }                     from '@spare/deco'
import { decoObject, logger, says } from '@spare/logger'

ObjectCollection.flopShuffle({
  size: 5,
  keyed: true
}) |> deca({ va: 2 }) |> says['test ObjectCollection']

'' |> logger

ObjectCollection.flopShuffle({
  size: 10
}) |> decoObject |> says['test ObjectCollection']
