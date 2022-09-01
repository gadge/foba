export { CarPlants, DarkTraits, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, MovieQuotes, Pastas, ShakesQuote } from './resources'

import { CarPlants, DarkTraits, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, MovieQuotes, Pastas, ShakesQuote } from './resources'

import { flopKey, rand } from '@aryth/rand'
import { swap }          from '@vect/vector-index'

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
  static flopShuffle({ key, size = 6, entry = false } = {}) {
    key = key ?? flopKey(ObjectCollection)
    const raw = ObjectCollection[key], ks = Object.keys(raw)
    let ob = {}, hi = ks?.length, k
    while (--size >= 0) ob[k = swap.call(ks, rand(--hi), hi)] = raw[k]
    return entry ? [ key, ob ] : ob
  }
}



