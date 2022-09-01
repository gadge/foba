export { actors, actresses, directors } from './resources'

import { actors, actresses, directors }                                from './resources'
import { briefName }                                                   from './src/briefName'
import { ArmSales, MegaCities, MortalityRates, PowerCars, Recessions } from '@foba/object-number'
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, Pastas } from '@foba/object-string'

import { shuffle } from '@vect/vector-select'
import { flopKey } from '@aryth/rand'

export class VectorCollection {
  static actors = actors
  static actresses = actresses
  static directors = directors
  static carPlants = Object.keys(CarPlants)
  static actorBriefs = Object.values(FilmActors).map(briefName)
  static actressBriefs = Object.values(FilmActresses).map(briefName)
  static directorBriefs = Object.values(FilmDirectors).map(briefName)
  static pastas = Object.keys(Pastas)
  static armDealers = Object.keys(ArmSales)
  static megaCities = Object.keys(MegaCities)
  static deathCauses = Object.keys(MortalityRates)
  static powerCars = Object.keys(PowerCars)
  static recessionYears = Object.keys(Recessions)
  static flopShuffle({ key, size = 6, entry = false } = {}) {
    key = key ?? flopKey(VectorCollection)
    const vector = shuffle(VectorCollection[key], size)
    return entry ? [ key, vector ] : vector
  }
}