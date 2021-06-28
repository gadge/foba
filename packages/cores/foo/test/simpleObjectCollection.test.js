import { Deco }                   from '@spare/deco'
import { logger, says }           from '@spare/logger'
import { SimpleObjectCollection } from '../src/SimpleObjectCollection'

SimpleObjectCollection |> Deco({ vert: 2 }) |> says['SimpleObjects']

'' |> logger