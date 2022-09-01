export { ArmSales, BrentPrices, MegaCities, MortalityRates, PowerCars, Recessions } from './resources'

import { ArmSales, BrentPrices, MegaCities, MortalityRates, PowerCars, Recessions } from './resources'

import { flopKey, rand } from '@aryth/rand'
import { swap }          from '@vect/vector-index'

export class ObjectCollection {
  static ArmSales = ArmSales
  static BrentPrices = BrentPrices
  static MegaCities = MegaCities
  static MortalityRates = MortalityRates
  static PowerCars = PowerCars
  static Recessions = Recessions
  static flopShuffle({ key, size = 6, entry = false } = {}) {
    key = key ?? flopKey(ObjectCollection)
    const raw = ObjectCollection[key], ks = Object.keys(raw)
    let ob = {}, hi = ks?.length, k
    while (--size >= 0) ob[k = swap.call(ks, rand(--hi), hi)] = raw[k]
    return entry ? [ key, ob ] : ob
  }
}


