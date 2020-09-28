import { decoMatrix, logger } from '@spare/logger'
import { identityMatrix }     from '../src/identityMatrix'

const test = () => {
  const mx = identityMatrix(5)
  mx |> decoMatrix |> logger
}

test()