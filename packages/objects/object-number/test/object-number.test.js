import { delogger } from '@spare/deco'
import { ObjectCollection } from '../src/ObjectCollection'

ObjectCollection.flopShuffle({ size: 5, keyed: true }) |> delogger
