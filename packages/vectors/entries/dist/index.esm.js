import { ArmSales, MegaCities, MortalityRates, PowerCars, Recessions } from '@foba/object-number';
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, MilitaryRobots, Pastas, MovieQuotes, ShakesQuote } from '@foba/object-string';
import { FlopShuffleMaker } from '@foba/util';

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */

const EntriesCollection = {
  // string - number
  get ArmSales() {
    return Object.entries(ArmSales);
  },

  get MegaCities() {
    return Object.entries(MegaCities);
  },

  get MortalityRates() {
    return Object.entries(MortalityRates);
  },

  get PowerCars() {
    return Object.entries(PowerCars);
  },

  get Recessions() {
    return Object.entries(Recessions);
  },

  // string - string
  get CarPlants() {
    return Object.entries(CarPlants);
  },

  get FilmActors() {
    return Object.entries(FilmActors);
  },

  get FilmActresses() {
    return Object.entries(FilmActresses);
  },

  get FilmDirectors() {
    return Object.entries(FilmDirectors);
  },

  get MilitaryRobots() {
    return Object.entries(MilitaryRobots);
  },

  get Pastas() {
    return Object.entries(Pastas);
  },

  get MovieQuotes() {
    return Object.entries(MovieQuotes);
  },

  get ShakesQuote() {
    return Object.entries(ShakesQuote);
  }

};
FlopShuffleMaker.defineForVector(EntriesCollection);

export { EntriesCollection, EntriesCollection as Foba };
