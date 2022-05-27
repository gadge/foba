export { identityMatrix, }                                             from './src/identityMatrix'
export { lowerPascalMatrix, upperPascalMatrix, symmetricPascalMatrix } from './src/pascalMatrix'
export { zigZagMatrix }                                                from './src/zigZagMatrix'
export { progressiveRandomMatrix }                                     from './src/progressiveRandomMatrix'

import { FlopShuffle }                                                 from '@foba/util'
import { identityMatrix }                                              from './src/identityMatrix'
import { lowerPascalMatrix, symmetricPascalMatrix, upperPascalMatrix } from './src/pascalMatrix'
import { progressiveRandomMatrix }                                     from './src/progressiveRandomMatrix'
import { zigZagMatrix }                                                from './src/zigZagMatrix'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export class MatrixCollection {
  static identityMatrix = (height = 5, width) => { return identityMatrix(height, width) }
  static upperPascalMatrix = (size = 5) => { return upperPascalMatrix(size) }
  static lowerPascalMatrix = (size = 5) => { return lowerPascalMatrix(size) }
  static symmetricPascalMatrix = (size = 5) => { return symmetricPascalMatrix(size) }
  static progressiveRandomMatrix = (height = 5, width) => { return progressiveRandomMatrix(height, width)}
  static zigZagMatrix = (size = 5) => { return zigZagMatrix(size) }
  static flopShuffle(options) { return FlopShuffle.numericVector(MatrixCollection, options) }
}














