import { rand, flopKey, randBetw } from '@aryth/rand';
import { pair } from '@vect/object-init';
import { RAND, LEAP, HEAD, TAIL } from '@vect/enum-select-styles';
import { min } from '@aryth/comparer';
import { shuffle, leap, select } from '@vect/object-select';
import { shuffle as shuffle$1, leap as leap$1 } from '@vect/vector-select';
import '@typen/enum-data-types';

const FLOP = 'flop';
const FLOP_SHUFFLE = 'flopShuffle';

function shuffleObject(ob) {
  var _keys;

  let {
    keys,
    size,
    start,
    mode
  } = this;
  keys = keys || Object.keys(ob);
  mode = mode || RAND;
  start = start || rand((_keys = keys) === null || _keys === void 0 ? void 0 : _keys.length);
  size = size || min(keys.length, 3);
  if (mode === RAND) return shuffle.call({
    keys
  }, ob, size);
  if (mode === LEAP) return leap.call({
    keys
  }, ob, start, size);
  if (mode === HEAD) return select(ob, keys.slice(0, size));
  if (mode === TAIL) return select(ob, keys.slice(-size));
  return ob;
}

function shuffleVector(vec) {
  var _vec$length;

  let {
    size,
    start,
    mode
  } = this;
  mode = mode || RAND;
  start = start || rand((_vec$length = vec === null || vec === void 0 ? void 0 : vec.length) !== null && _vec$length !== void 0 ? _vec$length : 0), size = size || 3;
  if (mode === RAND) return shuffle$1(vec, size);
  if (mode === LEAP) return leap$1(vec, start, size);
  if (mode === HEAD) return vec.slice(0, size);
  if (mode === TAIL) return vec.slice(-size);
  return vec;
}

class FlopShuffleMaker {
  static defineForObject(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        var _options$p;

        const key = (_options$p = options.p) !== null && _options$p !== void 0 ? _options$p : flopKey(this);
        const rs = shuffleObject.call(options, this[key]);
        return options.keyed ? pair(key, rs) : rs;
      },

      enumerable: false
    });
  }

  static defineForVector(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        var _options$p2;

        const key = (_options$p2 = options.p) !== null && _options$p2 !== void 0 ? _options$p2 : flopKey(this);
        const rs = shuffleVector.call(options, this[key]);
        return options.keyed ? pair(key, rs) : rs;
      },

      enumerable: false
    });
  }

}

const getKeys = function (o) {
  const {
    excludes,
    type
  } = this;
  const keys = Reflect.ownKeys(o).filter(p => typeof o[p] === type);
  return (excludes === null || excludes === void 0 ? void 0 : excludes.length) ? keys.filter(p => !excludes.includes(p)) : keys;
};

const sizeOscillator = (size, stdev = 1) => randBetw(size - stdev, size + stdev);

const makeEmbedded = o => {
  const embedded = {};

  for (let [k, v] of Object.entries(o)) embedded[k] = [v];

  return embedded;
};

export { FLOP, FLOP_SHUFFLE, FlopShuffleMaker, getKeys, makeEmbedded, shuffleObject, shuffleVector, sizeOscillator };
