import { FlopShuffleMaker } from '@foba/util'
import { briefName } from './util/briefName'
import { actors, actresses, directors } from '../resources'
import { ArmSales, CityPopulations, MortalityRates, PowerCars, Recessions } from '@foba/object-number'
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, Pastas } from '@foba/object-string'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export const VectorCollection = {
  get actors () { return actors },
  get actresses () { return actresses },
  get directors () { return directors },
  get carPlants () {return Object.keys(CarPlants) },
  get actorBriefs () { return Object.values(FilmActors).map(briefName) },
  get actressBriefs () { return Object.values(FilmActresses).map(briefName) },
  get directorBriefs () { return Object.values(FilmDirectors).map(briefName) },
  get pastas () { return Object.keys(Pastas) },
  get armDealers () { return Object.keys(ArmSales) },
  get megaCities () { return Object.keys(CityPopulations) },
  get deathCauses () { return Object.keys(MortalityRates) },
  get powerCars () { return Object.keys(PowerCars) },
  get recessionYears () { return Object.keys(Recessions) },
}

FlopShuffleMaker.defineForVector(VectorCollection)














