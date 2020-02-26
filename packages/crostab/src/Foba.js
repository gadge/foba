import { flopProp } from '@foba/util'
import BigMacIndex from '../resources/BigMacIndex'
import Gdp from '../resources/Gdp'
import Population from '../resources/Population'
import RuralPopulation from '../resources/RuralPopulation'
import UrbanPopulation from '../resources/UrbanPopulation'
import ArmsImports from '../resources/ArmsImports'
import ArmsExports from '../resources/ArmsExports'
import MilitaryExpenditure from '../resources/MilitaryExpenditure'
import ConsumptionExpenditure from '../resources/ConsumptionExpenditure'
import IndustryVA from '../resources/IndustryVA'
import ManufacturingVA from '../resources/ManufacturingVA'
import AgricultureForestryFishingVA from '../resources/AgricultureForestryFishingVA'
import StocksTradedValue from '../resources/StocksTradedValue'
import MarketCapListedDomestic from '../resources/MarketCapListedDomestic'
import { flopEntriesByBanner } from '../util/flopEntriesByBanner'
import { shuffleCrostab } from './shuffleCrostab'

export class Foba {
  static BigMacIndex = BigMacIndex
  static Gdp = Gdp
  static Population = Population
  static RuralPopulation = RuralPopulation
  static UrbanPopulation = UrbanPopulation
  static ArmsImports = ArmsImports
  static ArmsExports = ArmsExports
  static MilitaryExpenditure = MilitaryExpenditure
  static ConsumptionExpenditure = ConsumptionExpenditure
  static IndustryVA = IndustryVA
  static ManufacturingVA = ManufacturingVA
  static AgricultureForestryFishingVA = AgricultureForestryFishingVA
  static StocksTradedValue = StocksTradedValue
  static MarketCapListedDomestic = MarketCapListedDomestic

  static flop () {
    return Foba |> flopProp
  }

  static flopShuffle ({ p, h, w } = {}) {
    const { side, banner, matrix } = p ? Foba[p] : (Foba|> flopProp)
    return shuffleCrostab({ side, banner, matrix, p, h, w })
  }

  static flopEntriesByBanner ({ size, keyValuePair = false } = {}) {
    return flopEntriesByBanner.call({ size, keyValuePair }, Foba)
  }
}











