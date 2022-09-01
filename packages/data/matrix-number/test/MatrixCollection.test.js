import { decoMatrix }       from '@spare/deco-matrix'
import { logger }           from '@spare/logger'
import { MatrixCollection } from '../index'
import { says }             from '@spare/xr'

{
  const [ key, matrix ] = MatrixCollection.flopShuffle({ size: 5, entry: true })
  matrix |> decoMatrix |> says[key]
}

'' |> logger

{
  const [ key, matrix ] = MatrixCollection.flopShuffle({ size: 10, entry: true })
  matrix |> decoMatrix |> says[key]
}