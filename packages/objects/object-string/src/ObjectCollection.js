import { FlopShuffleMaker } from '@foba/util'
import { CarPlants } from '../resources/CarPlants'
import { FilmActors } from '../resources/FilmActors'
import { FilmActresses } from '../resources/FilmActresses'
import { FilmDirectors } from '../resources/FilmDirectors'
import { MilitaryRobots } from '../resources/MilitaryRobots'
import { Pastas } from '../resources/Pastas'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export const ObjectCollection = {
  get CarPlants () { return CarPlants },
  get FilmActors () { return FilmActors },
  get FilmActresses () { return FilmActresses },
  get FilmDirectors () { return FilmDirectors },
  get MilitaryRobots () { return MilitaryRobots },
  get Pastas () { return Pastas },
}

FlopShuffleMaker.defineForObject(ObjectCollection)

