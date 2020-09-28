import { decoMatrix, says }                                            from '@spare/logger'
import { lowerPascalMatrix, symmetricPascalMatrix, upperPascalMatrix } from '../src/pascalMatrix'

export const test = () => {
  {
    const mx = upperPascalMatrix(7)
    mx |> decoMatrix |> says['upperPascalMatrix']
  }
  {
    const mx = lowerPascalMatrix(7)
    mx |> decoMatrix |> says['lowerPascalMatrix']
  }
  {
    const mx = symmetricPascalMatrix(7)
    mx |> decoMatrix |> says['symmetricPascalMatrix']
  }
}

test()