import { Flopper } from '@foba/util'
import { ArmSales } from '../resources/ArmSales'
import { BrentPrices } from '../resources/BrentPrices'
import { CityPopulations } from '../resources/CityPopulations'
import { MortalityRates } from '../resources/MotarlityRates'
import { PowerCars } from '../resources/PowerCars'
import { Recessions } from '../resources/Recessions'

export class Foba extends Flopper {
  static ArmSales = ArmSales
  static BrentPrices = BrentPrices
  static CityPopulations = CityPopulations
  static MortalityRates = MortalityRates
  static PowerCars = PowerCars
  static Recessions = Recessions
}
