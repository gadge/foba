import { ArmSales, CityPopulations, MortalityRates, PowerCars, Recessions } from '@foba/object-number'
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, Pastas } from '@foba/object-string'
import { FlopShuffleMaker } from '@foba/util'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export const EntriesCollection = {
  // string - number
  get ArmSales () { return Object.entries(ArmSales) },
  get CityPopulations () { return Object.entries(CityPopulations) },
  get MortalityRates () { return Object.entries(MortalityRates) },
  get PowerCars () { return Object.entries(PowerCars) },
  get Recessions () { return Object.entries(Recessions) },
  // string - string
  get CarPlants () { return Object.entries(CarPlants) },
  get FilmActors () { return Object.entries(FilmActors) },
  get FilmActresses () { return Object.entries(FilmActresses) },
  get FilmDirectors () { return Object.entries(FilmDirectors) },
  get MilitaryRobots () { return Object.entries(MilitaryRobots) },
  get Pastas () { return Object.entries(Pastas) },
}

FlopShuffleMaker.defineForVector(EntriesCollection)
