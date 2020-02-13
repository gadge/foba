import { Shuffler, allFuncKeys } from '@foba/util';

// const { random } = Math
const {
  random,
  abs,
  exp,
  log,
  sqrt,
  pow,
  cos,
  sin,
  PI
} = Math;

const randIdx = arr => ~~(random() * arr.length);

const randSel = arr => arr[randIdx(arr)];

const R0 = 3.442619855899;
const R1 = 1.0 / R0;
const R0S = exp(-0.5 * R0 * R0);
const N2P32 = -pow(2, 32);
const M1 = 2147483648.0;
const VN = 9.91256303526217e-3;

class Ziggurat {
  constructor(mean = 0, stdev = 1) {
    this.jsr = 123456789;
    this.wn = Array(128);
    this.fn = Array(128);
    this.kn = Array(128);
    this.mean = mean;
    this.stdev = stdev;
    this.preset();
  }

  preset() {
    // seed generator based on current time
    this.jsr ^= new Date().getTime();
    let m1 = M1,
        dn = R0,
        tn = R0,
        vn = VN,
        q = vn / R0S;
    this.kn[0] = ~~(dn / q * m1);
    this.kn[1] = 0;
    this.wn[0] = q / m1;
    this.wn[127] = dn / m1;
    this.fn[0] = 1.0;
    this.fn[127] = R0S;

    for (let i = 126; i >= 1; i--) {
      dn = sqrt(-2.0 * log(vn / dn + exp(-0.5 * dn * dn)));
      this.kn[i + 1] = ~~(dn / tn * m1);
      tn = dn;
      this.fn[i] = exp(-0.5 * dn * dn);
      this.wn[i] = dn / m1;
    }
  }

  next() {
    return this.randSample() * this.stdev + this.mean;
  }

  nextInt() {
    return Math.round(this.next());
  }

  randSample() {
    let hz = this.xorshift(),
        iz = hz & 127;
    return abs(hz) < this.kn[iz] ? hz * this.wn[iz] : this.nfix(hz, iz);
  }

  nfix(hz, iz) {
    let r = R0,
        x,
        y;

    while (true) {
      x = hz * this.wn[iz];

      if (iz === 0) {
        do {
          x = -log(this.uni()) * R1;
          y = -log(this.uni());
        } while (y + y < x * x); // {
        //   x = -log(this.uni()) * r1
        //   y = -log(this.uni())
        // }


        return hz > 0 ? r + x : -r - x;
      }

      if (this.fn[iz] + this.uni() * (this.fn[iz - 1] - this.fn[iz]) < exp(-0.5 * x * x)) return x;
      hz = this.xorshift();
      iz = hz & 127;
      if (abs(hz) < this.kn[iz]) return hz * this.wn[iz];
    }
  }

  xorshift() {
    let m = this.jsr,
        n = m;
    n ^= n << 13;
    n ^= n >>> 17;
    n ^= n << 5;
    this.jsr = n;
    return m + n | 0;
  }

  uni() {
    return 0.5 + this.xorshift() / N2P32;
  }

}

class Roulett {
  /**
   * From [min, max] return a random integer.
   * Of [min, max], both min and max are inclusive.
   * @param {number} min(inclusive) - int
   * @param {number} max(inclusive) - int
   * @returns {number} int
   */
  static between(min, max) {
    return ~~(random() * (max - min + 1)) + min;
  }
  /**
   * From [min, max) return a random integer.
   * Of [min, max), min is inclusive but max is exclusive.
   * @param {number} min(inclusive) - int
   * @param {number} max(exclusive) - int
   * @returns {number} int
   */


  static rand(min, max) {
    return ~~(random() * (max - min)) + min;
  }

  static index(len) {
    return ~~(random() * len);
  }

  static arrayIndex(arr) {
    return randIdx(arr);
  }

  static element(arr) {
    return randSel(arr);
  }

  static key(obj) {
    return randSel(Object.keys(obj));
  }

  static value(obj) {
    return randSel(Object.values(obj));
  }

  static entry(obj) {
    return randSel(Object.entries(obj));
  }
  /**
   * Return an array of random number that follows gaussian distribution(normal distribution).
   * @param {number} len - length of the returned array
   * @param {number} mean - mean
   * @param {number} stdev - standard deviation
   * @returns {number[]}
   */


  static gaussSamples(len, mean = 0, stdev = 1) {
    const z = new Ziggurat(mean, stdev),
          arr = Array(len);

    for (let i = 0; i < len; i++) arr[i] = z.next();

    return arr;
  }

}

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

const sqrt$1 = Math.sqrt;

const nonSquares = l => {
  const HALF = 1 / 2;

  let nonSquare = n => n + ~~(HALF + sqrt$1(n));

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

const randF = () => 2 ** Roulett.rand(1, 12) - 1;

const absoluteMirror = (l = 5, d = 3) => {
  var _Object$values;

  if (l < 4) l = 4;
  let h = ~~(l / 2),
      r = l % 2;
  let positives = (_Object$values = Object.values(Specials), Shuffler({
    size: --h
  })(_Object$values));
  positives.push(randF());
  positives = positives.map(Math.abs).sort((a, b) => a - b);
  let negatives = positives.map(x => -x).reverse();
  if (r) negatives.push(0);
  const result = negatives.concat(positives);
  let td;
  return d ? (td = TrimDigit(d), result.map(td)) : result;
};

class Foba {
  static range(l) {
    return range(l);
  }

  static primes(l) {
    return primes(l);
  }

  static fibonacci(l) {
    return fibonacci(l);
  }

  static nonSquares(l) {
    return nonSquares(l);
  }

  static absoluteMirror(l, d) {
    return absoluteMirror(l, d);
  }

  static balanceByCompInterest(l, r, d = 3) {
    if (!r) r = Roulett.rand(1, 30) / 100;
    return balanceByCompInterest(l, r, d);
  }

  static hansenSamuelson(l, {
    g,
    c,
    i,
    a,
    b
  } = {}, d) {
    if (!a) a = Roulett.rand(15, 50) / 100;
    if (!b) b = Roulett.rand(30, 80) / 10;
    let cb, ib;
    if (!c) cb = Roulett.rand(0, 3), c = cb * 50;
    if (!i) ib = Roulett.rand(1, 6), i = ib * 50;
    if (!g) g = ~~((cb + ib) / 3) * 50;
    return hansenSamuelson(l, {
      g,
      c,
      i,
      a,
      b
    }, d).map(({
      y
    }) => y);
  }

  static flop({
    p,
    size = 6,
    keyValuePair
  } = {}) {
    var _filter, _o;

    const o = Foba;
    p = p || (_filter = (_o = o, allFuncKeys(_o)).filter(x => !x.startsWith('flop')), Roulett.element(_filter));
    const shuffled = o[p].call(null, size);
    let ro;
    return keyValuePair ? (ro = {}, ro[p] = shuffled, ro) : shuffled;
  }

}

export { Foba };
