import { decoLog } from '@spare/deco'
import { HansenSamuelson } from '../archive/hansenSamuelsonClass'
import { hansenSamuelson } from '../../src/functions/hansenSamuelson'

const g = 100, c = 20, i = 100, a = 0.28, b = 5
new HansenSamuelson(g, c, i, a, b).timeSeries(15) |> decoLog

hansenSamuelson(15, { g, c, i, a, b }) |> decoLog
