import { LEAP, RAND, randProperty, shuffleVector } from '@foba/util'
import { Roulett } from 'roulett'
import { CrosTab } from 'crostab'
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

const MEAN_LEN = 4

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
    return Foba |> randProperty
  }

  static flopShuffle ({ p, h, w } = {}) {
    const ob = p ? Foba[p] : (Foba|> randProperty)
    h = h || Roulett.rand(MEAN_LEN - 1, MEAN_LEN + 1)
    w = w || Roulett.rand(MEAN_LEN - 1, MEAN_LEN + 1)
    const side = shuffleVector.call({ mode: LEAP, size: h }, ob.side)
    const banner = shuffleVector.call({ mode: RAND, size: w }, ob.banner)
    return CrosTab.from(ob).select({ side, banner }).toJson
  }
}











