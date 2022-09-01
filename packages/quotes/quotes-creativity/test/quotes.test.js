import { BISTRO, METRO, NORSE } from '@palett/presets'
import { Deco }                 from '@spare/deco'
import { Quotes }               from '../index'

const deco = Deco({ broad: true, pres: { str: BISTRO, pos: METRO, neg: NORSE } })

Quotes.flop() |> deco |> console.log

Quotes.flopShuffle() |> deco |> console.log