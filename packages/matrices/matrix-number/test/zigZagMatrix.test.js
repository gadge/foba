import { decoMatrix, logger } from '@spare/logger'
import { zigZagMatrix }       from '../src/zigZagMatrix'

export const test = () => {
  const mx = zigZagMatrix(5)
  mx |> decoMatrix |> logger
}

test()