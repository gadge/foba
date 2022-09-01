import { NORSE, ROCOCCO, SUBTLE } from '@palett/presets'
import { Deco }                   from '@spare/deco'
import { Quotes }                 from '../index'

const deco = Deco({ broad: true, pres: { str: SUBTLE, pos: ROCOCCO, neg: NORSE } })

Quotes.flop() |> deco |> console.log

Quotes.flopShuffle() |> deco |> console.log