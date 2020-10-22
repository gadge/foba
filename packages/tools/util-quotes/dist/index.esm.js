import { min } from '@aryth/comparer';
import { flopValue, flop } from '@aryth/rand';
import { acquire } from '@vect/vector-merge';
import { shuffle } from '@vect/vector-select';

const FLOP = 'flop';
const FLOP_SHUFFLE = 'flopShuffle';
class FlopShuffleMaker {
  static defineFlop(target) {
    Reflect.defineProperty(target, FLOP, {
      value(options = {}) {
        var _target, _samples;

        const key = options.key;
        const samples = key && key in target ? target[key] : (_target = target, flopValue(_target));
        return _samples = samples, flop(_samples);
      },

      enumerable: false
    });
  }

  static defineFlopShuffle(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        var _options$size;

        const key = options.key;
        const samples = key && key in target ? target[key] : Object.values(target).reduce((ac, ve) => acquire(ac, ve), []);
        const size = (_options$size = options.size) !== null && _options$size !== void 0 ? _options$size : min(samples.length, 3);
        return shuffle(samples, size);
      },

      enumerable: false
    });
  }

}

export { FLOP, FLOP_SHUFFLE, FlopShuffleMaker };
