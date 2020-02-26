import { delogger } from '@spare/logger'
import { Foba } from '../src/Foba'

Foba.flop() |> delogger

Foba.flopShuffle() |> delogger

Foba.flopEntriesByBanner() |>  delogger
