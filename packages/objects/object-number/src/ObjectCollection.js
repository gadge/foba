import { FlopShuffleMaker } from '@foba/util'
import { ArmSales }         from '../resources/ArmSales'
import { BrentPrices }      from '../resources/BrentPrices'
import { MegaCities }       from '../resources/MegaCities'
import { MortalityRates }   from '../resources/MotarlityRates'
import { PowerCars }        from '../resources/PowerCars'
import { Recessions }       from '../resources/Recessions'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export const ObjectCollection = {
  ArmSales,
  BrentPrices,
  MegaCities,
  MortalityRates,
  PowerCars,
  Recessions,
}

FlopShuffleMaker.defineForObject(ObjectCollection)


