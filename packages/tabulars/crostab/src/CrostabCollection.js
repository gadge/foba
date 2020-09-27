import { CrosTab }                  from '@analys/crostab'
import { crostabShuffle }           from '@analys/crostab-select'
import { flop, flopKey, randBetw }  from '@aryth/rand'
import { FinancialAssetsToGDP }     from '@foba/table/static/worldbank/FinancialAssetsToGDP'
import { FLOP_SHUFFLE }             from '@foba/util'
import { wind }                     from '@vect/entries-init'
import { pair }                     from '@vect/object-init'
import { shuffle }                  from '@vect/vector-select'
import { AoEIIUnitsAttackByStages } from '../resources/AoEIIUnitsAttackByStages'
import { AoEIIUnitsHpByStages }     from '../resources/AoEIIUnitsHpByStages'
import { AreaByCountry }            from '../resources/AreaByCountry'
import { BigMacAdjustedIndexes }    from '../resources/BigMacAdjustedIndexes'
import { CountryGDPByYear }         from '../resources/CountryGDPByYear'
import { MilitaryByCountry2019 }    from '../resources/MilitaryByCountry2019'

/**
 * @property {Function|function(Object):*[]} flopHLookUp
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export const CrostabCollection = {
  get AoEIIUnitsAttackByStages() { return AoEIIUnitsAttackByStages },
  get AoEIIUnitsHpByStages() { return AoEIIUnitsHpByStages },
  get BigMacAdjustedIndexes() { return BigMacAdjustedIndexes },
  get AreaByCountry() { return AreaByCountry },
  get CountryGDPByYear() { return CountryGDPByYear },
  get FinancialAssetsToGDP() { return FinancialAssetsToGDP },
  get MilitaryByCountry2019() { return MilitaryByCountry2019 },
}

Reflect.defineProperty(CrostabCollection, FLOP_SHUFFLE, {
  value(options = {}) {
    options.oscillate = options.oscillate || true
    const key = options.p || flopKey(this)
    const crostab = crostabShuffle(this[key], options)
    return options.keyed ? pair(key, crostab) : crostab
  },
  enumerable: false
})

Reflect.defineProperty(CrostabCollection, 'flopHLookUp', {
  value(options = {}) {
    const key = options.p || flopKey(this)
    const size = options.size || randBetw(4, 7)
    const crostab = CrosTab.from(this[key])
    const label = crostab.side |> flop
    const entries = wind(crostab.head, crostab.row(label))
    return options.keyed
      ? pair(`${ key }_${ label }`, shuffle(entries, size))
      : shuffle(entries, size)
  },
  enumerable: false
})











