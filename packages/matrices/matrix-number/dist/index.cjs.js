'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var matrixInit = require('@vect/matrix-init');
var vectorInit = require('@vect/vector-init');
var math = require('@aryth/math');
var roulett = require('roulett');
require('@vect/swap');
var util = require('@foba/util');
var objectInit = require('@vect/object-init');

const identityMatrix = (h, w) => matrixInit.init(h, w !== null && w !== void 0 ? w : h, (x, y) => x === y ? 1 : 0);

const upperPascalMatrix = size => {
  const m = matrixInit.init(size, size, () => null);

  for (let c = 0; c < size; c++) m[0][c] = 1;

  for (let r = 1; r < size; r++) {
    for (let c = r; c < size; c++) {
      var _m$r;

      m[r][c] = m[r - 1][c - 1] + ((_m$r = m[r][c - 1]) !== null && _m$r !== void 0 ? _m$r : 0);
    }
  }

  return m;
};
const lowerPascalMatrix = size => {
  const m = matrixInit.init(size, size, () => null);

  for (let r = 0; r < size; r++) m[r][0] = 1;

  for (let c = 1; c < size; c++) {
    for (let r = c; r < size; r++) {
      var _m$c;

      m[r][c] = m[r - 1][c - 1] + ((_m$c = m[r - 1][c]) !== null && _m$c !== void 0 ? _m$c : 0);
    }
  }

  return m;
};
const symmetricPascalMatrix = size => {
  const m = matrixInit.draft(size, size);

  for (let i = 0; i < size; i++) m[0][i] = m[i][0] = 1;

  for (let r = 1; r < size; r++) {
    for (let c = 1; c < size; c++) {
      m[r][c] = m[r - 1][c] + m[r][c - 1];
    }
  }

  return m;
};

function zigZagMatrix(n) {
  const mx = vectorInit.init(n, () => Array(n));

  for (let i = 1, j = 1, x = 0; x < n * n; x++) {
    mx[i - 1][j - 1] = x;

    if ((i + j) % 2) {
      // Odd stripes
      i < n ? i++ : (j++, j++);
      if (j > 1) j--;
    } else {
      // Even stripes
      j < n ? j++ : (i++, i++);
      if (i > 1) i--;
    }
  }

  return mx;
}

const progressiveRandomMatrix = (h, w, fn) => {
  var _h, _w, _fn;

  let l = (h = (_h = h) !== null && _h !== void 0 ? _h : 5) * (w = (_w = w) !== null && _w !== void 0 ? _w : h);
  let zigg;
  fn = (_fn = fn) !== null && _fn !== void 0 ? _fn : (zigg = new roulett.Ziggurat(l, ~~(l * 2 / 3)), () => math.abs(~~zigg.next()));
  const ar = Array(l),
        mx = Array(h);

  for (--l; l >= 0; l--) ar[l] = fn(l);

  ar.sort((a, b) => a - b);

  for (let i = 0, j, r; i < h; i++) for (mx[i] = r = Array(w), j = 0; j < w; j++) r[j] = ar[++l];

  return mx;
};

const {
  random
} = Math;

const rand = l => ~~(random() * l);

const flopIndex = ar => rand(ar.length);

const flop = ar => ar[flopIndex(ar)];

const flopKey = ob => {
  var _Object$keys;

  return _Object$keys = Object.keys(ob), flop(_Object$keys);
};

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */

const MatrixCollection = {
  identityMatrix(height = 5, width) {
    return identityMatrix(height, width);
  },

  upperPascalMatrix(size = 5) {
    return upperPascalMatrix(size);
  },

  lowerPascalMatrix(size = 5) {
    return lowerPascalMatrix(size);
  },

  symmetricPascalMatrix(size = 5) {
    return symmetricPascalMatrix(size);
  },

  progressiveRandomMatrix(height = 5, width) {
    return progressiveRandomMatrix(height, width);
  },

  zigZagMatrix(size = 5) {
    return zigZagMatrix(size);
  }

};
Reflect.defineProperty(MatrixCollection, util.FLOP_SHUFFLE, {
  value(options = {}) {
    const p = options.p || flopKey(this);
    const size = options.size || 6;
    const start = options.start || 0;
    let matrix = start ? this[p].call(null, start + size).slice(-size) : this[p].call(null, size);
    return options.keyed ? objectInit.pair(p, matrix) : matrix;
  },

  enumerable: false
});

exports.MatrixCollection = MatrixCollection;
exports.identityMatrix = identityMatrix;
exports.lowerPascalMatrix = lowerPascalMatrix;
exports.progressiveRandomMatrix = progressiveRandomMatrix;
exports.symmetricPascalMatrix = symmetricPascalMatrix;
exports.upperPascalMatrix = upperPascalMatrix;
exports.zigZagMatrix = zigZagMatrix;
