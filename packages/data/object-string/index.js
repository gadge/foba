export { CarPlants, DarkTraits, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, MovieQuotes, Pastas, ShakesQuote } from './resources'

import { FlopShuffle }                                                                                                       from '@foba/util'
import { CarPlants, DarkTraits, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, MovieQuotes, Pastas, ShakesQuote } from './resources'

export class ObjectCollection {
  static CarPlants = CarPlants
  static DarkTraits = DarkTraits
  static FilmActors = FilmActors
  static FilmActresses = FilmActresses
  static FilmDirectors = FilmDirectors
  static MilitaryRobots = MilitaryRobots
  static Pastas = Pastas
  static MovieQuotes = MovieQuotes
  static ShakesQuote = ShakesQuote
  static flopShuffle(options) { return FlopShuffle.object(ObjectCollection, options) }
}



