import { Flopper } from '@foba/util'
import { ArmSales, CityPopulations, MortalityRates, PowerCars, Recessions } from '@foba/object-number'
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, Pastas } from '@foba/object-string'

export class Foba extends Flopper {
  // string - number
  static get ArmSales () { return Object.entries(ArmSales) }
  static get CityPopulations () { return Object.entries(CityPopulations) }
  static get MortalityRates () { return Object.entries(MortalityRates) }
  static get PowerCars () { return Object.entries(PowerCars) }
  static get Recessions () { return Object.entries(Recessions) }
  // string - string
  static get CarPlants () { return Object.entries(CarPlants) }
  static get FilmActors () { return Object.entries(FilmActors) }
  static get FilmActresses () { return Object.entries(FilmActresses) }
  static get FilmDirectors () { return Object.entries(FilmDirectors) }
  static get MilitaryRobots () { return Object.entries(MilitaryRobots) }
  static get Pastas () { return Object.entries(Pastas) }
}
