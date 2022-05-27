import { Table }                 from '@analyz/table'
import { flopKey }               from '@aryth/rand'
import { pair }                  from '@vect/object-init'
import { AeroEngineSpecs }       from './resources/real/AeroEngineSpecs'
import { AoEIIUnits }            from './resources/real/AoEIIUnits'
import { BigMacAdjustedIndexes } from './resources/real/BigMacAdjustedIndexes'
import { ChinaConceptFirms }     from './resources/real/ChinaConceptFirms'
import { FrontierEconomies }     from './resources/real/FrontierEconomies'
import { TopBoxOffice }          from './resources/real/TopBoxOffice'
import { USTechFirms }           from './resources/real/USTechFirms'
import { BistroDutyRoster }      from './resources/unreal/BistroDutyRoster'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.h
 * @param flopShuffle.w
 * @param flopShuffle.keyed
 * @param flopShuffle.oscillate
 */
export class TableCollection {
  static AeroEngineSpecs = Table.from(AeroEngineSpecs)
  static BistroDutyRoster = Table.from(BistroDutyRoster)
  static ChinaConceptFirms = Table.from(ChinaConceptFirms)
  static TopBoxOffice = Table.from(TopBoxOffice)
  static USTechFirms = Table.from(USTechFirms)
  static BigMaAdjustedIndexes = Table.from(BigMacAdjustedIndexes)
  static AgeOfEmpiresIIUnits = Table.from(AoEIIUnits)
  static FrontierEconomies = Table.from(FrontierEconomies)
  flopShuffle(options = {}) {
    const key = options.p ?? flopKey(TableCollection)
    return options.keyed ? pair(key, TableCollection[key]) : TableCollection[key]
  }
}












