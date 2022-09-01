export { CompanyBrandTypes, Countries, IntegratedCultureFramework, MarketingMovement } from './resources'

import { flopKey }                                                                     from '@aryth/rand'
import { shuffle }                                                                     from '@vect/vector-select'
import { CompanyBrandTypes, Countries, IntegratedCultureFramework, MarketingMovement } from './resources'


/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export class MatrixCollection {
  static companyBrandTypes = CompanyBrandTypes
  static integratedCultureFramework = IntegratedCultureFramework
  static marketingMovement = MarketingMovement
  static countries = Countries
  static flopShuffle({ key, size = 6, entry = false } = {}) {
    key = key ?? flopKey(MatrixCollection)
    const matrix = shuffle(MatrixCollection[key], size)
    return entry ? [ key, matrix ] : matrix
  }
}
















