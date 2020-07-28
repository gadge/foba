import { delogger } from '@spare/deco'
import { logger }   from '@spare/logger'
import { Eta }      from '@valjoux/eta'
import { Quotes }   from '../index'

const eta = Eta.buildPretty()
eta.ini('start') |> logger
Quotes.flop() |> delogger
eta.lap('flopped') |> logger
Quotes.flopShuffle() |> delogger
eta.end('flop-shuffled') |> logger