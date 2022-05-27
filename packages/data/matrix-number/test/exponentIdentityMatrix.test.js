import { decoMatrix, logger }     from '@spare/logger'
import { exponentIdentityMatrix } from '../src/exponentIdentityMatrix'

const test = () => {
  const mx = exponentIdentityMatrix(5, 2)
  mx |> decoMatrix |> logger

}

test()