import { Flopper } from '@foba/util'
import { namesToBrief } from './util/namesToBrief'
import { ArmSales, CityPopulations, MortalityRates, PowerCars, Recessions } from '@foba/object-number'
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, Pastas } from '@foba/object-string'
import { actors } from '../resources/actors'
import { actresses } from '../resources/actresses'
import { directors } from '../resources/directors'

export class Foba extends Flopper {
  static actors = actors
  static actresses = actresses
  static directors = directors

  static get carPlants () {return Object.keys(CarPlants)}

  static get actorBriefs () { return Object.values(FilmActors) |> namesToBrief }

  static get actressBriefs () { return Object.values(FilmActresses) |> namesToBrief }

  static get directorBriefs () { return Object.values(FilmDirectors) |> namesToBrief }

  static get pastas () { return Object.keys(Pastas) }

  static get armDealers () { return Object.keys(ArmSales) }

  static get megaCities () { return Object.keys(CityPopulations) }

  static get deathCauses () { return Object.keys(MortalityRates) }

  static get powerCars () { return Object.keys(PowerCars) }

  static get recessionYears () { return Object.keys(Recessions) }
}










