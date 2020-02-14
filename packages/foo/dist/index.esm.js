import { Foba } from '@foba/crostab';
import { flopPropKey, sizeOscillator } from '@foba/util';
export { makeEmbedded } from '@foba/util';
import { FobaStr, FobaNum } from '@foba/vector';
import { Ziggurat } from 'roulett';
import { Foba as Foba$1 } from '@foba/object-number';
import { Foba as Foba$2 } from '@foba/object-string';

const crosXMatricesRobust = ({
  h,
  w
} = {}) => {
  var _FobaCX;

  let key = (_FobaCX = Foba, flopPropKey(_FobaCX));
  const {
    side,
    banner,
    matrix
  } = Foba.flopShuffle({
    p: key,
    h,
    w
  });
  return {
    null: null,
    undefined: undefined,
    numeric: key.length,
    string: key,
    emptyVector: [],
    emptyEntry: [,],
    side: side,
    banner: banner,
    oneRow: [banner.slice()],
    oneColumn: side.map(x => [x]),
    matrix: matrix
  };
};
const CrosXMatricesRobust = crosXMatricesRobust();

const DEFAULT_SIZE = 3;
const randMatrix = ({
  h,
  w,
  fn
} = {}) => {
  let l = (h = h || DEFAULT_SIZE) * (w = w || h);
  let zigg;
  fn = fn || (zigg = new Ziggurat(l, ~~(l * 2 / 3)), () => Math.abs(~~zigg.next()));
  const ar = Array(l),
        mx = Array(h);

  for (--l; l >= 0; l--) ar[l] = fn(l);

  ar.sort((a, b) => a - b);

  for (let i = 0, j, r; i < h; i++) for (mx[i] = r = Array(w), j = 0; j < w; j++) r[j] = ar[++l];

  return mx;
};

const simpleMatrices = ({
  h = 3,
  w = 4,
  fn
} = {}) => {
  let matrix = randMatrix({
    h,
    w,
    fn
  });
  return {
    emptyMatrix: [[]],
    oneRow: [matrix[0].slice()],
    oneColumn: matrix.map(([x]) => [x]),
    simpleMatrix: matrix
  };
};
const SimpleMatrices = simpleMatrices();

const simpleMatricesRobust = ({
  h = 3,
  w = 4,
  fn
} = {}) => {
  var _FobaVec;

  let key;
  const matrices = simpleMatrices({
    h,
    w,
    fn
  });
  return {
    null: null,
    undefined: undefined,
    numeric: 0xff,
    string: key = (_FobaVec = FobaStr, flopPropKey(_FobaVec)),
    emptyVector: [],
    emptyEntry: [,],
    stringVector: FobaStr.flop({
      p: key,
      size: w
    }),
    numberVector: matrices.oneRow[0].slice(),
    ...matrices
  };
};
const SimpleMatricesRobust = simpleMatricesRobust();

const simpleEntries = ({
  h = 4
} = {}) => {
  var _h, _h2, _h3;

  const ob = {
    numeric: Object.entries(Foba$1.flop({
      size: (_h = h, sizeOscillator(_h))
    })),
    string: Object.entries(Foba$2.flop({
      size: (_h2 = h, sizeOscillator(_h2))
    }))
  };
  const another = Foba.flopEntriesByBanner({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyValuePair: true
  });
  return Object.assign(ob, another);
};
const SimpleEntries = simpleEntries();

const keyValuePair = true;
const objectify = entriesByBannerInKeyValuePair => {
  let oneEntry = entriesByBannerInKeyValuePair;
  const [[k, entries]] = Object.entries(oneEntry),
        o = {};

  for (let [k, v] of entries) o[k] = v;

  return oneEntry = {}, oneEntry[k] = o, oneEntry;
};
const simpleObjects = ({
  h = 4
} = {}) => {
  var _h, _h2, _FobaCrX$flopEntriesB, _h3;

  return Object.assign({
    empty: {}
  }, Foba$1.flop({
    size: (_h = h, sizeOscillator(_h)),
    keyValuePair
  }), Foba$2.flop({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyValuePair
  }), (_FobaCrX$flopEntriesB = Foba.flopEntriesByBanner({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyValuePair
  }), objectify(_FobaCrX$flopEntriesB)));
};
const SimpleObjects = simpleObjects();

const keyValuePair$1 = true;
const simpleVectors = ({
  h = 7
} = {}) => {
  var _h, _h2, _h3, _h4;

  return Object.assign({
    empty: []
  }, FobaNum.flop({
    size: (_h = h, sizeOscillator(_h)),
    keyValuePair: keyValuePair$1
  }), FobaNum.flop({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyValuePair: keyValuePair$1
  }), FobaStr.flop({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyValuePair: keyValuePair$1
  }), FobaStr.flop({
    size: (_h4 = h, sizeOscillator(_h4)),
    keyValuePair: keyValuePair$1
  }));
};
const SimpleVectors = simpleVectors();

export { CrosXMatricesRobust, SimpleEntries, SimpleMatrices, SimpleMatricesRobust, SimpleObjects, SimpleVectors, crosXMatricesRobust, randMatrix, simpleEntries, simpleMatrices, simpleMatricesRobust, simpleObjects, simpleVectors };
