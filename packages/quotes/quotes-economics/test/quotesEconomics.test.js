import { flop, flopValue } from '@aryth/rand'
import { delogger }        from '@spare/deco'
import { fold }            from '@spare/fold'
import { Quotes }          from '../src/Quotes'

const sample = Quotes |> flopValue |> flop

sample.quote = sample.quote |> fold

sample |> delogger