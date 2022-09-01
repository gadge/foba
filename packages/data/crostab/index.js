import { Crostab }                    from '@analyz/crostab'
import { flop, flopKey, randBetw }    from '@aryth/rand'
import { wind }                       from '@vect/entries-init'
import { pair }                       from '@vect/object-init'
import { shuffle }                    from '@vect/vector-select'
import { AoEIIUnitsAttackByStages }   from './resources/AoEIIUnitsAttackByStages'
import { AoEIIUnitsHpByStages }       from './resources/AoEIIUnitsHpByStages'
import { AreaByCountry }              from './resources/AreaByCountry'
import { BigMacAdjustedIndexes }      from './resources/BigMacAdjustedIndexes'
import { CountryGDPByYear }           from './resources/CountryGDPByYear'
import { FinancialAssetsToGDPByYear } from './resources/FinancialAssetsToGDPByYear'
import { MilitaryByCountry2019 }      from './resources/MilitaryByCountry2019'
import { TeachersCountByYear }        from './resources/TeachersCountByYear'

/**
 * @property {Function|function(Object):*[]} flopHLookUp
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export class CrostabCollection {
  static AoEIIUnitsAttackByStages = Crostab.from(AoEIIUnitsAttackByStages)
  static AoEIIUnitsHpByStages = Crostab.from(AoEIIUnitsHpByStages)
  static BigMacAdjustedIndexes = Crostab.from(BigMacAdjustedIndexes)
  static AreaByCountry = Crostab.from(AreaByCountry)
  static CountryGDPByYear = Crostab.from(CountryGDPByYear)
  static FinancialAssetsToGDPByYear = Crostab.from(FinancialAssetsToGDPByYear)
  static MilitaryByCountry2019 = Crostab.from(MilitaryByCountry2019)
  static TeachersCountByYear = Crostab.from(TeachersCountByYear)

  static flopShuffle({ key, entry = false } = {}) {
    const table = CrostabCollection[key = key ?? flopKey(CrostabCollection)]
    return entry ? [ key, table ] : table
  }
  static flopHLookUp(options = {}) {
    const key = options.p ?? flopKey(CrostabCollection)
    const size = options.size ?? randBetw(4, 7)
    const crostab = CrostabCollection[key]
    const x = flop(crostab.side)
    const entries = wind(crostab.head, crostab.row(x))
    return options.keyed
      ? pair(`${key}_${x}`, shuffle(entries, size))
      : shuffle(entries, size)
  }


}











