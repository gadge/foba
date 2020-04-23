import { CrosTab }                    from '@analys/crostab'
import { crostabShuffle }             from '@analys/crostab-select'
import { flop, flopKey, randIntBetw } from '@aryth/rand'
import { FLOP_SHUFFLE }               from '@foba/util'
import { wind }                       from '@vect/entries-init'
import { pair }                       from '@vect/object-init'
import { shuffle }                    from '@vect/vector-select'
import AgricultureForestryFishingVA   from '../resources/AgricultureForestryFishingVA'
import ArmsExports                    from '../resources/ArmsExports'
import ArmsImports                    from '../resources/ArmsImports'
import BigMacIndex                    from '../resources/BigMacIndex'
import ConsumptionExpenditure         from '../resources/ConsumptionExpenditure'
import Gdp                            from '../resources/Gdp'
import IndustryVA                     from '../resources/IndustryVA'
import ManufacturingVA                from '../resources/ManufacturingVA'
import MarketCapListedDomestic        from '../resources/MarketCapListedDomestic'
import MilitaryExpenditure            from '../resources/MilitaryExpenditure'
import Population                     from '../resources/Population'
import RuralPopulation                from '../resources/RuralPopulation'
import StocksTradedValue              from '../resources/StocksTradedValue'
import UrbanPopulation                from '../resources/UrbanPopulation'

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
  get BigMacIndex () { return BigMacIndex },
  get Gdp () { return Gdp },
  get Population () { return Population },
  get RuralPopulation () { return RuralPopulation },
  get UrbanPopulation () { return UrbanPopulation },
  get ArmsImports () { return ArmsImports },
  get ArmsExports () { return ArmsExports },
  get MilitaryExpenditure () { return MilitaryExpenditure },
  get ConsumptionExpenditure () { return ConsumptionExpenditure },
  get IndustryVA () { return IndustryVA },
  get ManufacturingVA () { return ManufacturingVA },
  get AgricultureForestryFishingVA () { return AgricultureForestryFishingVA },
  get StocksTradedValue () { return StocksTradedValue },
  get MarketCapListedDomestic () { return MarketCapListedDomestic },
}

Reflect.defineProperty(CrostabCollection, FLOP_SHUFFLE, {
  value (options = {}) {
    options.oscillate = options.oscillate || true
    const key = options.p || flopKey(this)
    const crostab = crostabShuffle(this[key], options)
    return options.keyed ? pair(key, crostab) : crostab
  },
  enumerable: false
})

Reflect.defineProperty(CrostabCollection, 'flopHLookUp', {
  value (options = {}) {
    const key = options.p || flopKey(this)
    const size = options.size || randIntBetw(4, 7)
    const crostab = CrosTab.from(this[key])
    const label = crostab.side |> flop
    const entries = wind(crostab.head, crostab.row(label))
    return options.keyed
      ? pair(`${key}_${label}`, shuffle(entries, size))
      : shuffle(entries, size)
  },
  enumerable: false
})











