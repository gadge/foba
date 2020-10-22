import { flopKey }                                                     from '@aryth/rand'
import { FLOP_SHUFFLE }                                                from '@foba/util'
import { pair }                                                        from '@vect/object-init'
import { identityMatrix }                                              from './identityMatrix'
import { lowerPascalMatrix, symmetricPascalMatrix, upperPascalMatrix } from './pascalMatrix'
import { progressiveRandomMatrix }                                     from './progressiveRandomMatrix'
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
  identityMatrix(height = 5, width) { return identityMatrix(height, width) },
  upperPascalMatrix(size = 5) { return upperPascalMatrix(size) },
  lowerPascalMatrix(size = 5) { return lowerPascalMatrix(size) },
  symmetricPascalMatrix(size = 5) { return symmetricPascalMatrix(size) },
  progressiveRandomMatrix(height = 5, width) { return progressiveRandomMatrix(height, width)},
  zigZagMatrix(size = 5) { return zigZagMatrix(size) },
}


Reflect.defineProperty(MatrixCollection, FLOP_SHUFFLE, {
  value(options = {}) {
    const p = options.p || flopKey(this)
    const size = options.size || 6
    const start = options.start || 0
    let matrix = start
      ? this[p].call(null, start + size).slice(-size)
      : this[p].call(null, size)
    return options.keyed ? pair(p, matrix) : matrix
  },
  enumerable: false
})














