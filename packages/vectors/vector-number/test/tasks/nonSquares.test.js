import { seq } from '../../utils/seq'
import { decoLog } from '@spare/deco'
import { nonSquares } from '../../src/functions/nonSquares'

const test = () => ({
  first22: seq(22, i => nonSquares(i + 1)),
  first1E3NotSquare: seq(1e+3, i => nonSquares(i + 1)).filter(isSquare).length === 0
})

test() |> decoLog
