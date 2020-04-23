import { CrostabCollection } from '@foba/crostab';
import { flopKey } from '@aryth/rand';
import { ArmSales, CityPopulations, MortalityRates, PowerCars, Recessions, ObjectCollection } from '@foba/object-number';
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, Pastas, ObjectCollection as ObjectCollection$1 } from '@foba/object-string';
import { FlopShuffleMaker, sizeOscillator } from '@foba/util';
export { makeEmbedded } from '@foba/util';
import { Ziggurat } from 'roulett';
import { abs } from '@aryth/math';
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector';

const crosXMatricesRobust = ({
  h,
  w
} = {}) => {
  var _CrostabCollection;

  let key = (_CrostabCollection = CrostabCollection, flopKey(_CrostabCollection));
  const {
    side,
    head,
    rows
  } = CrostabCollection.flopShuffle({
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
    head: head,
    oneRow: [head.slice()],
    oneColumn: side.map(x => [x]),
    rows: rows
  };
};
const CrosXMatricesRobust = crosXMatricesRobust();

const actors = ['Jeremy', 'Kevin', 'Robert', 'Gérard', 'Richard', 'Anthony', 'Warren', 'Robert', 'Nick', 'Robin', 'Al', 'Robert', 'Clint', 'Stephen', 'Denzel', 'Tom', 'Daniel', 'Laurence', 'Anthony', 'Liam', 'Tom', 'Morgan', 'Nigel', 'Paul', 'John', 'Nicolas', 'Richard', 'Anthony', 'Sean', 'Massimo', 'Geoffrey', 'Tom', 'Ralph', 'Woody', 'Billy', 'Jack', 'Matt', 'Robert', 'Peter', 'Dustin', 'Roberto', 'Tom', 'Ian', 'Nick', 'Edward', 'Kevin', 'Russell', 'Richard', 'Sean', 'Denzel', 'Russell', 'Javier', 'Tom', 'Ed', 'Geoffrey', 'Denzel', 'Russell', 'Sean', 'Will', 'Tom', 'Adrien', 'Nicolas', 'Michael', 'Daniel', 'Jack', 'Sean', 'Johnny', 'Ben', 'Jude', 'Bill', 'Jamie', 'Don', 'Johnny', 'Leonardo', 'Clint', 'Philip', 'Terrence', 'Heath', 'Joaquin', 'David', 'Forest', 'Leonardo', 'Ryan', 'Peter', 'Will', 'Daniel', 'George', 'Johnny', 'Tommy', 'Viggo', 'Sean', 'Richard', 'Frank', 'Brad', 'Mickey', 'Jeff', 'George', 'Colin', 'Morgan', 'Jeremy'];
const actresses = ['Kathy', 'Anjelica', 'Julia', 'Meryl', 'Joanne', 'Jodie', 'Geena', 'Laura', 'Bette', 'Susan', 'Emma', 'Catherine', 'Mary', 'Michelle', 'Susan', 'Holly', 'Angela', 'Stockard', 'Emma', 'Debra', 'Jessica', 'Jodie', 'Miranda', 'Winona', 'Susan', 'Susan', 'Elisabeth', 'Sharon', 'Meryl', 'Emma', 'Frances', 'Brenda', 'Diane', 'Kristin', 'Emily', 'Helen', 'Helena', 'Julie', 'Judi', 'Kate', 'Gwyneth', 'Cate', 'Fernanda', 'Meryl', 'Emily', 'Hilary', 'Annette', 'Janet', 'Julianne', 'Meryl', 'Julia', 'Joan', 'Juliette', 'Ellen', 'Laura', 'Halle', 'Judi', 'Nicole', 'Sissy', 'Renée', 'Nicole', 'Salma', 'Diane', 'Julianne', 'Renée', 'Charlize', 'Keisha', 'Diane', 'Samantha', 'Naomi', 'Hilary', 'Annette', 'Catalina', 'Imelda', 'Kate', 'Reese', 'Judi', 'Felicity', 'Keira', 'Charlize', 'Helen', 'Penélope', 'Judi', 'Meryl', 'Kate', 'Marion', 'Cate', 'Julie', 'Laura', 'Ellen', 'Kate', 'Anne', 'Angelina', 'Melissa', 'Meryl', 'Sandra', 'Helen', 'Carey', 'Gabourey', 'Meryl'];
const directors = ['Kevin', 'Francis', 'Stephen', 'Barbet', 'Martin', 'Jonathan', 'Barry', 'Ridley', 'John', 'Oliver', 'Clint', 'Robert', 'Martin', 'James', 'Neil', 'Steven', 'Robert', 'Jane', 'James', 'Jim', 'Robert', 'Woody', 'Krzysztof', 'Robert', 'Quentin', 'Mel', 'Mike', 'Chris', 'Michael', 'Tim', 'Anthony', 'Joel', 'Miloš', 'Scott', 'Mike', 'James', 'Peter', 'Atom', 'Curtis', 'Gus', 'Steven', 'Roberto', 'John', 'Terrence', 'Peter', 'Sam', 'Lasse', 'Spike', 'Michael', 'M', 'Steven', 'Stephen', 'Ang', 'Ridley', 'Steven', 'Ron', 'Robert', 'Peter', 'David', 'Roman', 'Ridley', 'Pedro', 'Stephen', 'Rob', 'Peter', 'Martin', 'Sofia', 'Clint', 'Fernando', 'Peter', 'Clint', 'Taylor', 'Mike', 'Alexander', 'Martin', 'Ang', 'George', 'Paul', 'Bennett', 'Steven', 'Martin', 'Clint', 'Stephen', 'Alejandro', 'Paul', 'Joel', 'Ethan', 'Paul', 'Tony', 'Jason', 'Julian', 'Danny', 'Stephen', 'David', 'Ron', 'Gus', 'James', 'Kathryn', 'Lee', 'Jason', 'Quentin'];

const briefName = name => {
  name = name.split(' ');
  let last = '';

  do {
    last = name.pop() + last;
  } while (last === 'Jr.');

  return name.map(([initial]) => initial + '.').join('') + last;
};
/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 * @param flopShuffle.mode
 */


const VectorCollection = {
  get actors() {
    return actors;
  },

  get actresses() {
    return actresses;
  },

  get directors() {
    return directors;
  },

  get carPlants() {
    return Object.keys(CarPlants);
  },

  get actorBriefs() {
    return Object.values(FilmActors).map(briefName);
  },

  get actressBriefs() {
    return Object.values(FilmActresses).map(briefName);
  },

  get directorBriefs() {
    return Object.values(FilmDirectors).map(briefName);
  },

  get pastas() {
    return Object.keys(Pastas);
  },

  get armDealers() {
    return Object.keys(ArmSales);
  },

  get megaCities() {
    return Object.keys(CityPopulations);
  },

  get deathCauses() {
    return Object.keys(MortalityRates);
  },

  get powerCars() {
    return Object.keys(PowerCars);
  },

  get recessionYears() {
    return Object.keys(Recessions);
  }

};
FlopShuffleMaker.defineForVector(VectorCollection);

const DEFAULT_SIZE = 3;
const randMatrix = ({
  h,
  w,
  fn
} = {}) => {
  let l = (h = h || DEFAULT_SIZE) * (w = w || h);
  let zigg;
  fn = fn || (zigg = new Ziggurat(l, ~~(l * 2 / 3)), () => abs(~~zigg.next()));
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
  var _VectorCollection;

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
    string: key = (_VectorCollection = VectorCollection, flopKey(_VectorCollection)),
    emptyVector: [],
    emptyEntry: [,],
    stringVector: VectorCollection.flopShuffle({
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
    numeric: Object.entries(ObjectCollection.flopShuffle({
      size: (_h = h, sizeOscillator(_h))
    })),
    string: Object.entries(ObjectCollection$1.flopShuffle({
      size: (_h2 = h, sizeOscillator(_h2))
    }))
  };
  const another = CrostabCollection.flopHLookUp({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed: true
  });
  return Object.assign(ob, another);
};
const SimpleEntries = simpleEntries();

const keyed = true;
const objectify = entriesByBannerInKeyValue => {
  let oneEntry = entriesByBannerInKeyValue;
  const [[k, entries]] = Object.entries(oneEntry),
        o = {};

  for (let [k, v] of entries) o[k] = v;

  return oneEntry = {}, oneEntry[k] = o, oneEntry;
};
const simpleObjects = ({
  h = 4
} = {}) => {
  var _h, _h2, _CrostabCollection$fl, _h3;

  return Object.assign({
    empty: {}
  }, ObjectCollection.flopShuffle({
    size: (_h = h, sizeOscillator(_h)),
    keyed
  }), ObjectCollection$1.flopShuffle({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyed
  }), (_CrostabCollection$fl = CrostabCollection.flopHLookUp({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed
  }), objectify(_CrostabCollection$fl)));
};
const SimpleObjects = simpleObjects();

const keyed$1 = true;
const simpleVectors = ({
  h = 7
} = {}) => {
  var _h, _h2, _h3, _h4;

  return Object.assign({
    empty: []
  }, NumberVectorCollection.flopShuffle({
    size: (_h = h, sizeOscillator(_h)),
    keyed: keyed$1
  }), NumberVectorCollection.flopShuffle({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyed: keyed$1
  }), StringVectorCollection.flopShuffle({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed: keyed$1
  }), StringVectorCollection.flopShuffle({
    size: (_h4 = h, sizeOscillator(_h4)),
    keyed: keyed$1
  }));
};
const SimpleVectors = simpleVectors();

export { CrosXMatricesRobust, SimpleEntries, SimpleMatrices, SimpleMatricesRobust, SimpleObjects, SimpleVectors, crosXMatricesRobust, randMatrix, simpleEntries, simpleMatrices, simpleMatricesRobust, simpleObjects, simpleVectors };
