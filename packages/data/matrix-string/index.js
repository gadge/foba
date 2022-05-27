export { CompanyBrandTypes, Countries, IntegratedCultureFramework, MarketingMovement } from './resources'

import { FlopShuffle }                                                                 from '@foba/util'
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
  flopShuffle(options) { return FlopShuffle.vector(MatrixCollection, options) }
}
















