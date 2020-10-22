'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var comparer = require('@aryth/comparer');
var rand = require('@aryth/rand');
var vectorMerge = require('@vect/vector-merge');
var vectorSelect = require('@vect/vector-select');

const FLOP = 'flop';
const FLOP_SHUFFLE = 'flopShuffle';
class FlopShuffleMaker {
  static defineFlop(target) {
    Reflect.defineProperty(target, FLOP, {
      value(options = {}) {
        var _target, _samples;

        const key = options.key;
        const samples = key && key in target ? target[key] : (_target = target, rand.flopValue(_target));
        return _samples = samples, rand.flop(_samples);
      },

      enumerable: false
    });
  }

  static defineFlopShuffle(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        var _options$size;

        const key = options.key;
        const samples = key && key in target ? target[key] : Object.values(target).reduce((ac, ve) => vectorMerge.acquire(ac, ve), []);
        const size = (_options$size = options.size) !== null && _options$size !== void 0 ? _options$size : comparer.min(samples.length, 3);
        return vectorSelect.shuffle(samples, size);
      },

      enumerable: false
    });
  }

}

exports.FLOP = FLOP;
exports.FLOP_SHUFFLE = FLOP_SHUFFLE;
exports.FlopShuffleMaker = FlopShuffleMaker;
