import { decoMatrix }   from '@spare/deco-matrix'
import { zigZagMatrix } from '../src/zigZagMatrix'

const matrix = zigZagMatrix(5)
matrix |> decoMatrix |> console.log