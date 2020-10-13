import { deco }          from '@spare/deco'
import { logger, says }           from '@spare/logger'
import { SimpleObjectCollection } from '../src/SimpleObjectCollection'

SimpleObjectCollection |> deco |> says['SimpleObjects']

'' |> logger