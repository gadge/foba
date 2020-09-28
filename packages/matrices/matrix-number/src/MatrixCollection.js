import { FlopShuffleMaker }                                            from '@foba/util'
import { identityMatrix }                                              from './identityMatrix'
import { lowerPascalMatrix, symmetricPascalMatrix, upperPascalMatrix } from './pascalMatrix'
import { zigZagMatrix }                                                from './zigZagMatrix'


/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export const MatrixCollection = {
  identityMatrix(size = 5) { return identityMatrix(size) },
  upperPascalMatrix(size = 5) { return upperPascalMatrix(size) },
  lowerPascalMatrix(size = 5) { return lowerPascalMatrix(size) },
  symmetricPascalMatrix(size = 5) { return symmetricPascalMatrix(size) },
  zigZagMatrix(size = 5) { return zigZagMatrix(size) },
}

FlopShuffleMaker.defineForVector(MatrixCollection)














