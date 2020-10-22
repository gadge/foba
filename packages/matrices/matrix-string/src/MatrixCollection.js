import { FlopShuffleMaker }                                                            from '@foba/util'
import { CompanyBrandTypes, Countries, IntegratedCultureFramework, MarketingMovement } from '../resources'


/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export const MatrixCollection = {
  get companyBrandTypes() { return CompanyBrandTypes },
  get integratedCultureFramework() { return IntegratedCultureFramework },
  get marketingMovement() { return MarketingMovement },
  get countries() { return Countries }
}

FlopShuffleMaker.defineForVector(MatrixCollection)














