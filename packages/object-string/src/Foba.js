import { Flopper } from '@foba/util'

import { CarPlants } from '../resources/CarPlants'
import { FilmActors } from '../resources/FilmActors'
import { FilmActresses } from '../resources/FilmActresses'
import { FilmDirectors } from '../resources/FilmDirectors'
import { MilitaryRobots } from '../resources/MilitaryRobots'
import { Pastas } from '../resources/Pastas'

export class Foba extends Flopper {
  static CarPlants = CarPlants
  static FilmActors = FilmActors
  static FilmActresses = FilmActresses
  static FilmDirectors = FilmDirectors
  static MilitaryRobots = MilitaryRobots
  static Pastas = Pastas
}

