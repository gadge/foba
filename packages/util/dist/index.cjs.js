'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var roulett = require('roulett');

const RAND = 0,
      HEAD = 1,
      TAIL = 2,
      LEAP = 3;
const SelectMode = {
  Rand: RAND,
  Head: HEAD,
  Tail: TAIL,
  Leap: LEAP
};

const {
  index: randIndex
} = roulett.Roulett;
const randShuffleVector = (ar, size) => {
  const l = ar.length,
        vec = Array(size = Math.min(size, l));

  for (let i = 0, set = new Set(), rand; i < size; i++) {
    do {
      var _l;

      rand = (_l = l, randIndex(_l));
    } while (set.has(rand));

    set.add(rand);
    vec[i] = ar[rand];
  }

  return vec;
};

const leapShuffleVector = (ar, {
  min,
  dif
}) => {
  const l = ar.length,
        vec = Array(dif = Math.min(dif, l));
  min = min || roulett.Roulett.rand(0, l);

  for (let i = min, j = 0; i < min + dif; i++) vec[j++] = ar[i < l ? i : i % l];

  return vec;
};

function shuffleVector(ar) {
  let {
    mode,
    size,
    start
  } = this;
  start = start || roulett.Roulett.rand(0, ar && ar.length);
  size = size || 3;

  switch (mode || RAND) {
    case RAND:
      return randShuffleVector(ar, size);

    case LEAP:
      return leapShuffleVector(ar, {
        min: start,
        dif: size
      });

    case HEAD:
      return ar.slice(0, size);

    case TAIL:
      return ar.slice(-size);
  }
}

const {
  index: randIndex$1
} = roulett.Roulett;
const randShuffleObject = (ob, size) => {
  const keys = Object.keys(ob),
        l = keys.length;
  size = Math.min(l, size);
  const o = {};

  for (let i = 0, set = new Set(), rand, key; i < size; i++) {
    do {
      var _l;

      rand = (_l = l, randIndex$1(_l));
    } while (set.has(rand));

    set.add(rand);
    o[key = keys[rand]] = ob[key];
  }

  return o;
};

const leapShuffleObject = (ob, {
  min,
  dif
}) => {
  const keys = Object.keys(ob),
        l = keys.length,
        o = {};
  min = min || roulett.Roulett.rand(0, l);
  dif = Math.min(dif, l);

  for (let i = min, key; i < min + dif; i++) {
    o[key = keys[i < l ? i : i % l]] = ob[key];
  }

  return o;
};

function shuffleObject(ob) {
  let {
    mode,
    size,
    start
  } = this;
  let keys = Object.keys(ob),
      o;
  start = start || roulett.Roulett.rand(0, keys && keys.length);
  size = size || 3;

  switch (mode || RAND) {
    case RAND:
      return randShuffleObject(ob, size);

    case LEAP:
      return leapShuffleObject(ob, {
        min: start,
        dif: size
      });

    case HEAD:
      o = {};
      keys.slice(0, size).forEach(key => o[key] = ob[key]);
      return keys;

    case TAIL:
      o = {};
      keys.slice(-size).forEach(key => o[key] = ob[key]);
      return keys;
  }
}

function shuffle(o) {
  return Array.isArray(o) ? shuffleVector.call(this, o) : shuffleObject.call(this, o);
}

const Shuffler = ({
  mode,
  size,
  start
}) => shuffle.bind({
  mode,
  size,
  start
});

const allPropKeys = candidates => Reflect.ownKeys(candidates).filter(p => typeof candidates[p] === 'object').slice(1);

const flopPropKey = candidates => {
  var _ref, _candidates;

  return _ref = (_candidates = candidates, allPropKeys(_candidates)), roulett.Roulett.element(_ref);
};
const flopProp = candidates => {
  var _candidates2;

  return candidates[(_candidates2 = candidates, flopPropKey(_candidates2))];
};

const allFuncKeys = candidates => Reflect.ownKeys(candidates).filter(p => typeof candidates[p] === 'function');

const allPropKeys$1 = candidates => Reflect.ownKeys(candidates).filter(p => typeof candidates[p] === 'object').slice(1);

const flopPropKey$1 = candidates => {
  var _ref, _candidates;

  return _ref = (_candidates = candidates, allPropKeys$1(_candidates)), roulett.Roulett.element(_ref);
};

const flopFunc = candidates => {
  var _candidates4;

  return candidates[(_candidates4 = candidates, flopPropKey$1(_candidates4))];
};

const flopFuncKey = candidates => {
  var _ref, _candidates;

  return _ref = (_candidates = candidates, allFuncKeys(_candidates)), roulett.Roulett.element(_ref);
};

function flopShuffleProp(o) {
  var _o;

  let {
    p,
    mode,
    size,
    start,
    keyValuePair
  } = this;
  p = p || (_o = o, flopPropKey(_o));
  const shuffled = shuffle.call({
    mode,
    size,
    start
  }, o[p]);
  let ro;
  return keyValuePair ? (ro = {}, ro[p] = shuffled, ro) : shuffled;
}

class Flopper {
  static flop({
    p,
    mode,
    size,
    start,
    keyValuePair
  } = {}) {
    return flopShuffleProp.call({
      p,
      mode,
      size,
      start,
      keyValuePair
    }, this);
  }

}

const sizeOscillator = (size, stdev = 1) => roulett.Roulett.between(size - stdev, size + stdev);

const makeEmbedded = o => {
  const embedded = {};

  for (let [k, v] of Object.entries(o)) embedded[k] = [v];

  return embedded;
};

exports.Flopper = Flopper;
exports.HEAD = HEAD;
exports.LEAP = LEAP;
exports.RAND = RAND;
exports.SelectMode = SelectMode;
exports.Shuffler = Shuffler;
exports.TAIL = TAIL;
exports.allFuncKeys = allFuncKeys;
exports.allPropKeys = allPropKeys;
exports.flopFunc = flopFunc;
exports.flopFuncKey = flopFuncKey;
exports.flopProp = flopProp;
exports.flopPropKey = flopPropKey;
exports.flopShuffleProp = flopShuffleProp;
exports.makeEmbedded = makeEmbedded;
exports.shuffle = shuffle;
exports.shuffleObject = shuffleObject;
exports.shuffleVector = shuffleVector;
exports.sizeOscillator = sizeOscillator;
