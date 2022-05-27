export { ArmSales, BrentPrices, MegaCities, MortalityRates, PowerCars, Recessions } from './resources'

import { FlopShuffle }                                                              from '@foba/util'
import { ArmSales, BrentPrices, MegaCities, MortalityRates, PowerCars, Recessions } from './resources'


export class ObjectCollection {
  static ArmSales = ArmSales
  static BrentPrices = BrentPrices
  static MegaCities = MegaCities
  static MortalityRates = MortalityRates
  static PowerCars = PowerCars
  static Recessions = Recessions
  /** @param {{[p],[size],[start],[keyed],[mode]}} options */
  static flopShuffle(options) { return FlopShuffle.object(ObjectCollection, options)}
}


