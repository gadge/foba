'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var util = require('@foba/util');

const round = x => x + (x > 0 ? 0.5 : -0.5) << 0;

function trimDigit(n) {
  return round(n * this.m) / this.m;
}
/**
 *
 * @param {number} d - digits
 * @returns {function(number):number}
 * @constructor
 */


const TrimDigit = d => trimDigit.bind({
  m: 10 ** d
});
const td2 = TrimDigit(2);
const td4 = TrimDigit(4);

/**
 *
 * @param {number} l length
 * @param {function(number?):*} fn function
 * @param {number} [d]
 * @returns {*[]}
 */

const seq = (l, fn, d) => {
  if (d) return seqTd(l, fn, d);
  const ar = Array(l);

  for (let i = 0; i < l; i++) ar[i] = fn(i);

  return ar;
};
const seqTd = (l, fn, d = 2) => {
  const ar = Array(l);

  for (let i = 0, td = TrimDigit(d); i < l; i++) ar[i] = td(fn(i));

  return ar;
};

const balanceByCompInterest = (l, r = 0.1, d = 3) => {
  r++;
  let n = 1,
      td = TrimDigit(d);
  return seq(l, () => td(n *= r), d);
};

function* fiboGen() {
  let [prev, curr] = [0, 1];

  for (;;) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}
const fibonacci = l => {
  const gen = fiboGen();
  const ar = Array(l);

  for (let i = 0; i < l; i++) ar[i] = gen.next().value;

  return ar;
};

const GOV_EXPENDITURE = 100,
      CONSUMPTION = 50,
      INVESTMENT = 100,
      MP_CONSUME = 0.28,
      INV_MULTIPLIER = 5;

function* hansenSamuelsonGenerator({
  g,
  c,
  i,
  a,
  b
}, d) {
  /** @type {number} gdp */
  let y = 0;
  /** @type {number} consumption of last term*/

  let k = 0;
  /** @type {function} */

  const td = TrimDigit(d);

  while (true) {
    y = g + c + i;
    yield {
      c: td(c),
      i: td(i),
      y: td(y)
    };
    k = c;
    c = a * y;
    i = b * (c - k);
  }
}
/**
 * A simulation to Hansen-Samuelson (Multiplier-Accelerator Model)
 * @param {number} l length of simulation array
 * @param {number} g government spending - constant each term
 * @param {number} c consumption - c=a*y
 * @param {number} i investment - i=b*(c[t]-c[t-1])
 * @param {number} a marginal propensity to consume
 * @param {number} b investment multiplier
 * @param {number} d trailing digits to keep
 * @returns {{c:number,i:number,y:number}[]}
 */


const hansenSamuelson = (l, {
  g = GOV_EXPENDITURE,
  c = CONSUMPTION,
  i = INVESTMENT,
  a = MP_CONSUME,
  b = INV_MULTIPLIER
} = {}, d = 2) => {
  const hsg = hansenSamuelsonGenerator({
    g,
    c,
    i,
    a,
    b
  }, d);
  return seq(l, () => hsg.next().value);
};

const sqrt = Math.sqrt;

const nonSquares = l => {
  const HALF = 1 / 2;

  let nonSquare = n => n + ~~(HALF + sqrt(n));

  return seq(l, i => nonSquare(++i));
};

function isPrime(n) {
  if (n < 2) return false;
  if (!(n % 2)) return n === 2;
  if (!(n % 3)) return n === 3;
  let d = 5;

  while (d * d <= n) {
    if (!(n % d)) return false;
    d += 2;
    if (!(n % d)) return false;
    d += 4;
  }

  return true;
}

const primes = l => {
  const ar = Array(l);

  for (let n = 2, i = 0;; n++) {
    if (isPrime(n)) ar[i++] = n;else if (i >= l) break;
  }

  return ar;
};

const range = l => seq(l, i => i);

const swap = function (i, j) {
  const temp = this[i];
  this[i] = this[j];
  return this[j] = temp;
};

const max = (a, b) => a > b ? a : b;

const {
  random
} = Math;

const rand = l => ~~(random() * l);
/**
 * From [min, max) return a random integer.
 * Of [min, max), min is inclusive but max is exclusive.
 * @param {number} lo(inclusive) - int
 * @param {number} hi(exclusive) - int
 * @returns {number} int
 */


const randInt = (lo, hi) => rand(hi - lo) + lo;
/**
 * From [min, max] return a random integer.
 * Of [min, max], both min and max are inclusive.
 * @param {number} lo(inclusive) - int
 * @param {number} hi(inclusive) - int
 * @returns {number} int
 */


const randIntBetw = (lo, hi) => rand(++hi - lo) + lo;

const flopIndex = ar => rand(ar.length);

const flop = ar => ar[flopIndex(ar)];

const flopKey = ob => {
  var _Object$keys;

  return _Object$keys = Object.keys(ob), flop(_Object$keys);
};

/**
 * Fisher–Yates shuffle, a.k.a Knuth shuffle
 * @param {Array} ve
 * @param {number} [size] - if omitted, size will be keys.length
 * @returns {Array} mutated array
 */


const shuffle = function (ve, size) {
  let l = ve.length;
  const lo = max(0, l - (size !== null && size !== void 0 ? size : l));

  while (--l >= lo) swap.call(ve, l, rand(l));

  return lo ? (ve.splice(0, lo), ve) : ve;
};

const Specials = {
  PI: Math.PI,
  E: Math.E,
  SQR_2: Math.sqrt(2),
  SQR_3: Math.sqrt(3),
  SQR_5: Math.sqrt(5),
  GOLDEN: 1.61803398874989484820,
  MP10_3: 10 / 3,
  MP10_6: 10 / 6,
  GRAVITY: 6.67430,
  FEIGENBAUM: 4.669201609102990671853203821578,
  GAUSS_STDEV_1: 68.2689492137,
  GAUSS_STDEV_2: 95.4499736104,
  GAUSS_STDEV_3: 99.7300203937,
  LIGHT: 299792458,
  //m/s**2
  MOL: 6.02214076e+23,
  LOSCHMIDT: 2.6867811e+25,
  ABSOLUTE_ZERO: -273.15
};

const randF = () => 2 ** randInt(1, 12) - 1;

const absoluteMirror = (l = 5, d = 3) => {
  if (l < 4) l = 4;
  let h = ~~(l / 2),
      r = l % 2;
  let positives = shuffle(Object.values(Specials), --h);
  positives.push(randF());
  positives = positives.map(Math.abs).sort((a, b) => a - b);
  let negatives = positives.map(x => -x).reverse();
  if (r) negatives.push(0);
  const result = negatives.concat(positives);
  let td;
  return d ? (td = TrimDigit(d), result.map(td)) : result;
};

const pair = (key, value) => {
  const o = {};
  o[key] = value;
  return o;
};

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 */

const VectorCollection = {
  range(l) {
    return range(l);
  },

  primes(l) {
    return primes(l);
  },

  fibonacci(l) {
    return fibonacci(l);
  },

  nonSquares(l) {
    return nonSquares(l);
  },

  absoluteMirror(l, d) {
    return absoluteMirror(l, d);
  },

  balanceByCompInterest(l = 6, r, d = 3) {
    if (!r) r = randIntBetw(1, 30) / 100;
    return balanceByCompInterest(l, r, d);
  },

  hansenSamuelson(l, {
    g,
    c,
    i,
    a,
    b
  } = {}, d) {
    let cb, ib;
    if (!a) a = randIntBetw(15, 50) / 100;
    if (!b) b = randIntBetw(30, 80) / 10;
    if (!c) cb = randIntBetw(0, 3), c = cb * 50;
    if (!i) ib = randIntBetw(1, 6), i = ib * 50;
    if (!g) g = ~~((cb + ib) / 3) * 50;
    return hansenSamuelson(l = 6, {
      g,
      c,
      i,
      a,
      b
    }, d).map(({
      y
    }) => y);
  }

};
Reflect.defineProperty(VectorCollection, util.FLOP_SHUFFLE, {
  value(options) {
    const p = options.p || flopKey(this);
    const size = options.size || 6;
    const start = options.start || 0;
    let vector = start ? this[p].call(null, start + size).slice(-size) : this[p].call(null, size);
    return options.keyed ? pair(p, vector) : vector;
  },

  enumerable: false
});

exports.Foba = VectorCollection;
exports.VectorCollection = VectorCollection;
exports.absoluteMirror = absoluteMirror;
exports.balanceByCompInterest = balanceByCompInterest;
exports.fibonacci = fibonacci;
exports.hansenSamuelson = hansenSamuelson;
exports.nonSquares = nonSquares;
exports.primes = primes;
exports.range = range;
