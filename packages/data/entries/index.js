import { flopKey }                                                                                               from '@aryth/rand'
import { ArmSales, BrentPrices, MegaCities, MortalityRates, PowerCars, Recessions, }                             from '@foba/object-number'
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, MovieQuotes, Pastas, ShakesQuote } from '@foba/object-string'
import { shuffle }                                                                                               from '@vect/vector-select'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */
export class EntriesCollection {
  static ArmSales = Object.entries(ArmSales)
  static BrentPrices = Object.entries(BrentPrices)
  static MegaCities = Object.entries(MegaCities)
  static MortalityRates = Object.entries(MortalityRates)
  static PowerCars = Object.entries(PowerCars)
  static Recessions = Object.entries(Recessions)

  static CarPlants = Object.entries(CarPlants)
  static FilmActors = Object.entries(FilmActors)
  static FilmActresses = Object.entries(FilmActresses)
  static FilmDirectors = Object.entries(FilmDirectors)
  static MilitaryRobots = Object.entries(MilitaryRobots)
  static Pastas = Object.entries(Pastas)
  static MovieQuotes = Object.entries(MovieQuotes)
  static ShakesQuote = Object.entries(ShakesQuote)

  static flopShuffle({ key, size = 6, entry = false } = {}) {
    key = key ?? flopKey(EntriesCollection)
    const vector = shuffle(EntriesCollection[key], size)
    return entry ? [ key, vector ] : vector
  }
}
