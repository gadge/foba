'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rand = require('@aryth/rand');
var objectInit = require('@vect/object-init');
var enumSelectStyles = require('@vect/enum-select-styles');
var comparer = require('@aryth/comparer');
var objectSelect = require('@vect/object-select');
var vectorSelect = require('@vect/vector-select');
require('@typen/enum-data-types');

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
  mode = mode || enumSelectStyles.RAND;
  start = start || rand.rand((_keys = keys) === null || _keys === void 0 ? void 0 : _keys.length);
  size = size || comparer.min(keys.length, 3);
  if (mode === enumSelectStyles.RAND) return objectSelect.shuffle.call({
    keys
  }, ob, size);
  if (mode === enumSelectStyles.LEAP) return objectSelect.leap.call({
    keys
  }, ob, start, size);
  if (mode === enumSelectStyles.HEAD) return objectSelect.select(ob, keys.slice(0, size));
  if (mode === enumSelectStyles.TAIL) return objectSelect.select(ob, keys.slice(-size));
  return ob;
}

function shuffleVector(vec) {
  var _vec$length;

  let {
    size,
    start,
    mode
  } = this;
  mode = mode || enumSelectStyles.RAND;
  start = start || rand.rand((_vec$length = vec === null || vec === void 0 ? void 0 : vec.length) !== null && _vec$length !== void 0 ? _vec$length : 0), size = size || 3;
  if (mode === enumSelectStyles.RAND) return vectorSelect.shuffle(vec, size);
  if (mode === enumSelectStyles.LEAP) return vectorSelect.leap(vec, start, size);
  if (mode === enumSelectStyles.HEAD) return vec.slice(0, size);
  if (mode === enumSelectStyles.TAIL) return vec.slice(-size);
  return vec;
}

class FlopShuffleMaker {
  static defineForObject(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        var _options$p;

        const key = (_options$p = options.p) !== null && _options$p !== void 0 ? _options$p : rand.flopKey(this);
        const rs = shuffleObject.call(options, this[key]);
        return options.keyed ? objectInit.pair(key, rs) : rs;
      },

      enumerable: false
    });
  }

  static defineForVector(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        var _options$p2;

        const key = (_options$p2 = options.p) !== null && _options$p2 !== void 0 ? _options$p2 : rand.flopKey(this);
        const rs = shuffleVector.call(options, this[key]);
        return options.keyed ? objectInit.pair(key, rs) : rs;
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

const sizeOscillator = (size, stdev = 1) => rand.randIntBetw(size - stdev, size + stdev);

const makeEmbedded = o => {
  const embedded = {};

  for (let [k, v] of Object.entries(o)) embedded[k] = [v];

  return embedded;
};

exports.FLOP = FLOP;
exports.FLOP_SHUFFLE = FLOP_SHUFFLE;
exports.FlopShuffleMaker = FlopShuffleMaker;
exports.getKeys = getKeys;
exports.makeEmbedded = makeEmbedded;
exports.shuffleObject = shuffleObject;
exports.shuffleVector = shuffleVector;
exports.sizeOscillator = sizeOscillator;
