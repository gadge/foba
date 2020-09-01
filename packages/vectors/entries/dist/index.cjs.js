'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var objectNumber = require('@foba/object-number');
var objectString = require('@foba/object-string');
var util = require('@foba/util');

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
    return Object.entries(objectNumber.ArmSales);
  },

  get MegaCities() {
    return Object.entries(objectNumber.MegaCities);
  },

  get MortalityRates() {
    return Object.entries(objectNumber.MortalityRates);
  },

  get PowerCars() {
    return Object.entries(objectNumber.PowerCars);
  },

  get Recessions() {
    return Object.entries(objectNumber.Recessions);
  },

  // string - string
  get CarPlants() {
    return Object.entries(objectString.CarPlants);
  },

  get FilmActors() {
    return Object.entries(objectString.FilmActors);
  },

  get FilmActresses() {
    return Object.entries(objectString.FilmActresses);
  },

  get FilmDirectors() {
    return Object.entries(objectString.FilmDirectors);
  },

  get MilitaryRobots() {
    return Object.entries(objectString.MilitaryRobots);
  },

  get Pastas() {
    return Object.entries(objectString.Pastas);
  },

  get MovieQuotes() {
    return Object.entries(objectString.MovieQuotes);
  },

  get ShakesQuote() {
    return Object.entries(objectString.ShakesQuote);
  }

};
util.FlopShuffleMaker.defineForVector(EntriesCollection);

exports.EntriesCollection = EntriesCollection;
exports.Foba = EntriesCollection;
