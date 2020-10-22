'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var rand = require('@aryth/rand');
var crostab = require('@foba/crostab');
var objectNumber = require('@foba/object-number');
var objectString = require('@foba/object-string');
var util = require('@foba/util');
var matrixNumber = require('@foba/matrix-number');
var objectMapper = require('@vect/object-mapper');
var vector = require('@foba/vector');

const crostabMatrixCollection = ({
  h,
  w
} = {}) => {
  var _CrostabCollection;

  let key = (_CrostabCollection = crostab.CrostabCollection, rand.flopKey(_CrostabCollection));
  const {
    side,
    head,
    rows
  } = crostab.CrostabCollection.flopShuffle({
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
const CrostabMatrixCollection = crostabMatrixCollection();

const SP = ' ';

const actors = ['Jeremy', 'Kevin', 'Robert', 'Gérard', 'Richard', 'Anthony', 'Warren', 'Robert', 'Nick', 'Robin', 'Al', 'Robert', 'Clint', 'Stephen', 'Denzel', 'Tom', 'Daniel', 'Laurence', 'Anthony', 'Liam', 'Tom', 'Morgan', 'Nigel', 'Paul', 'John', 'Nicolas', 'Richard', 'Anthony', 'Sean', 'Massimo', 'Geoffrey', 'Tom', 'Ralph', 'Woody', 'Billy', 'Jack', 'Matt', 'Robert', 'Peter', 'Dustin', 'Roberto', 'Tom', 'Ian', 'Nick', 'Edward', 'Kevin', 'Russell', 'Richard', 'Sean', 'Denzel', 'Russell', 'Javier', 'Tom', 'Ed', 'Geoffrey', 'Denzel', 'Russell', 'Sean', 'Will', 'Tom', 'Adrien', 'Nicolas', 'Michael', 'Daniel', 'Jack', 'Sean', 'Johnny', 'Ben', 'Jude', 'Bill', 'Jamie', 'Don', 'Johnny', 'Leonardo', 'Clint', 'Philip', 'Terrence', 'Heath', 'Joaquin', 'David', 'Forest', 'Leonardo', 'Ryan', 'Peter', 'Will', 'Daniel', 'George', 'Johnny', 'Tommy', 'Viggo', 'Sean', 'Richard', 'Frank', 'Brad', 'Mickey', 'Jeff', 'George', 'Colin', 'Morgan', 'Jeremy'];
const actresses = ['Kathy', 'Anjelica', 'Julia', 'Meryl', 'Joanne', 'Jodie', 'Geena', 'Laura', 'Bette', 'Susan', 'Emma', 'Catherine', 'Mary', 'Michelle', 'Susan', 'Holly', 'Angela', 'Stockard', 'Emma', 'Debra', 'Jessica', 'Jodie', 'Miranda', 'Winona', 'Susan', 'Susan', 'Elisabeth', 'Sharon', 'Meryl', 'Emma', 'Frances', 'Brenda', 'Diane', 'Kristin', 'Emily', 'Helen', 'Helena', 'Julie', 'Judi', 'Kate', 'Gwyneth', 'Cate', 'Fernanda', 'Meryl', 'Emily', 'Hilary', 'Annette', 'Janet', 'Julianne', 'Meryl', 'Julia', 'Joan', 'Juliette', 'Ellen', 'Laura', 'Halle', 'Judi', 'Nicole', 'Sissy', 'Renée', 'Nicole', 'Salma', 'Diane', 'Julianne', 'Renée', 'Charlize', 'Keisha', 'Diane', 'Samantha', 'Naomi', 'Hilary', 'Annette', 'Catalina', 'Imelda', 'Kate', 'Reese', 'Judi', 'Felicity', 'Keira', 'Charlize', 'Helen', 'Penélope', 'Judi', 'Meryl', 'Kate', 'Marion', 'Cate', 'Julie', 'Laura', 'Ellen', 'Kate', 'Anne', 'Angelina', 'Melissa', 'Meryl', 'Sandra', 'Helen', 'Carey', 'Gabourey', 'Meryl'];
const directors = ['Kevin', 'Francis', 'Stephen', 'Barbet', 'Martin', 'Jonathan', 'Barry', 'Ridley', 'John', 'Oliver', 'Clint', 'Robert', 'Martin', 'James', 'Neil', 'Steven', 'Robert', 'Jane', 'James', 'Jim', 'Robert', 'Woody', 'Krzysztof', 'Robert', 'Quentin', 'Mel', 'Mike', 'Chris', 'Michael', 'Tim', 'Anthony', 'Joel', 'Miloš', 'Scott', 'Mike', 'James', 'Peter', 'Atom', 'Curtis', 'Gus', 'Steven', 'Roberto', 'John', 'Terrence', 'Peter', 'Sam', 'Lasse', 'Spike', 'Michael', 'M', 'Steven', 'Stephen', 'Ang', 'Ridley', 'Steven', 'Ron', 'Robert', 'Peter', 'David', 'Roman', 'Ridley', 'Pedro', 'Stephen', 'Rob', 'Peter', 'Martin', 'Sofia', 'Clint', 'Fernando', 'Peter', 'Clint', 'Taylor', 'Mike', 'Alexander', 'Martin', 'Ang', 'George', 'Paul', 'Bennett', 'Steven', 'Martin', 'Clint', 'Stephen', 'Alejandro', 'Paul', 'Joel', 'Ethan', 'Paul', 'Tony', 'Jason', 'Julian', 'Danny', 'Stephen', 'David', 'Ron', 'Gus', 'James', 'Kathryn', 'Lee', 'Jason', 'Quentin'];

const briefName = name => {
  name = name.split(SP);
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
    return Object.keys(objectString.CarPlants);
  },

  get actorBriefs() {
    return Object.values(objectString.FilmActors).map(briefName);
  },

  get actressBriefs() {
    return Object.values(objectString.FilmActresses).map(briefName);
  },

  get directorBriefs() {
    return Object.values(objectString.FilmDirectors).map(briefName);
  },

  get pastas() {
    return Object.keys(objectString.Pastas);
  },

  get armDealers() {
    return Object.keys(objectNumber.ArmSales);
  },

  get megaCities() {
    return Object.keys(objectNumber.MegaCities);
  },

  get deathCauses() {
    return Object.keys(objectNumber.MortalityRates);
  },

  get powerCars() {
    return Object.keys(objectNumber.PowerCars);
  },

  get recessionYears() {
    return Object.keys(objectNumber.Recessions);
  }

};
util.FlopShuffleMaker.defineForVector(VectorCollection);

const simpleMatrixCollection = ({
  h = 3,
  w = 4,
  fn
} = {}) => {
  let matrix = matrixNumber.progressiveRandomMatrix(h, w, fn);
  return {
    emptyMatrix: [[]],
    oneRow: [matrix[0].slice()],
    oneColumn: matrix.map(([x]) => [x]),
    simpleMatrix: matrix
  };
};
const SimpleMatrixCollection = simpleMatrixCollection();

const modestMatrixCollection = ({
  h = 3,
  w = 4,
  fn
} = {}) => {
  var _StringVectorCollecti;

  let key;
  const matrices = simpleMatrixCollection({
    h,
    w,
    fn
  });
  return {
    null: null,
    undefined: undefined,
    numeric: 0xff,
    string: key = (_StringVectorCollecti = VectorCollection, rand.flopKey(_StringVectorCollecti)),
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
const ModestMatrixCollection = modestMatrixCollection();

const simpleEntriesCollection = ({
  h = 4
} = {}) => {
  var _h, _h2, _h3;

  const objectCollection = Object.assign({}, objectNumber.ObjectCollection.flopShuffle({
    size: (_h = h, util.sizeOscillator(_h)),
    keyed: true
  }), objectString.ObjectCollection.flopShuffle({
    size: (_h2 = h, util.sizeOscillator(_h2)),
    keyed: true
  }));
  objectMapper.mutate(objectCollection, Object.entries);
  return Object.assign({}, objectCollection, crostab.CrostabCollection.flopHLookUp({
    size: (_h3 = h, util.sizeOscillator(_h3)),
    keyed: true
  }));
};
const SimpleEntriesCollection = simpleEntriesCollection();

const keyed = true;
const objectify = entriesByBannerInKeyValue => {
  let oneEntry = entriesByBannerInKeyValue;
  const [[k, entries]] = Object.entries(oneEntry),
        o = {};

  for (let [k, v] of entries) o[k] = v;

  return oneEntry = {}, oneEntry[k] = o, oneEntry;
};
const simpleObjectCollection = ({
  h = 4
} = {}) => {
  var _h, _h2, _CrostabCollection$fl, _h3;

  return Object.assign({
    empty: {}
  }, objectNumber.ObjectCollection.flopShuffle({
    size: (_h = h, util.sizeOscillator(_h)),
    keyed
  }), objectString.ObjectCollection.flopShuffle({
    size: (_h2 = h, util.sizeOscillator(_h2)),
    keyed
  }), (_CrostabCollection$fl = crostab.CrostabCollection.flopHLookUp({
    size: (_h3 = h, util.sizeOscillator(_h3)),
    keyed
  }), objectify(_CrostabCollection$fl)));
};
const SimpleObjectCollection = simpleObjectCollection();

const keyed$1 = true;
const simpleVectorCollection = ({
  h = 7
} = {}) => {
  var _h, _h2, _h3, _h4;

  return Object.assign({}, {
    empty: []
  }, vector.NumberVectorCollection.flopShuffle({
    size: (_h = h, util.sizeOscillator(_h)),
    keyed: keyed$1
  }), vector.NumberVectorCollection.flopShuffle({
    size: (_h2 = h, util.sizeOscillator(_h2)),
    keyed: keyed$1
  }), vector.StringVectorCollection.flopShuffle({
    size: (_h3 = h, util.sizeOscillator(_h3)),
    keyed: keyed$1
  }), vector.StringVectorCollection.flopShuffle({
    size: (_h4 = h, util.sizeOscillator(_h4)),
    keyed: keyed$1
  }));
};
const SimpleVectorCollection = simpleVectorCollection();

exports.CrostabMatrixCollection = CrostabMatrixCollection;
exports.ModestMatrixCollection = ModestMatrixCollection;
exports.SimpleEntriesCollection = SimpleEntriesCollection;
exports.SimpleMatrixCollection = SimpleMatrixCollection;
exports.SimpleObjectCollection = SimpleObjectCollection;
exports.SimpleVectorCollection = SimpleVectorCollection;
exports.crostabMatrixCollection = crostabMatrixCollection;
exports.modestMatrixCollection = modestMatrixCollection;
exports.simpleEntriesCollection = simpleEntriesCollection;
exports.simpleMatrixCollection = simpleMatrixCollection;
exports.simpleObjectCollection = simpleObjectCollection;
exports.simpleVectorCollection = simpleVectorCollection;
