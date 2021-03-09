import { flopKey } from '@aryth/rand';
import { CrostabCollection } from '@foba/crostab';
import { ArmSales, MegaCities, MortalityRates, PowerCars, Recessions, ObjectCollection } from '@foba/object-number';
import { CarPlants, FilmActors, FilmActresses, FilmDirectors, Pastas, ObjectCollection as ObjectCollection$1 } from '@foba/object-string';
import { FlopShuffleMaker, sizeOscillator } from '@foba/util';
import { progressiveRandomMatrix } from '@foba/matrix-number';
import { mutate } from '@vect/object-mapper';
import { NumberVectorCollection, StringVectorCollection } from '@foba/vector';

const crostabMatrixCollection = ({
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
    return Object.keys(MegaCities);
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

const simpleMatrixCollection = ({
  h = 3,
  w = 4,
  fn
} = {}) => {
  let matrix = progressiveRandomMatrix(h, w, fn);
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
    string: key = (_StringVectorCollecti = VectorCollection, flopKey(_StringVectorCollecti)),
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

  const objectCollection = Object.assign({}, ObjectCollection.flopShuffle({
    size: (_h = h, sizeOscillator(_h)),
    keyed: true
  }), ObjectCollection$1.flopShuffle({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyed: true
  }));
  mutate(objectCollection, Object.entries);
  return Object.assign({}, objectCollection, CrostabCollection.flopHLookUp({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed: true
  }));
};
const SimpleEntriesCollection = simpleEntriesCollection();

const keyed$1 = true;
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
  }, ObjectCollection.flopShuffle({
    size: (_h = h, sizeOscillator(_h)),
    keyed: keyed$1
  }), ObjectCollection$1.flopShuffle({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyed: keyed$1
  }), (_CrostabCollection$fl = CrostabCollection.flopHLookUp({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed: keyed$1
  }), objectify(_CrostabCollection$fl)));
};
const SimpleObjectCollection = simpleObjectCollection();

const keyed = true;
const simpleVectorCollection = ({
  h = 7
} = {}) => {
  var _h, _h2, _h3, _h4;

  return Object.assign({}, {
    empty: []
  }, NumberVectorCollection.flopShuffle({
    size: (_h = h, sizeOscillator(_h)),
    keyed
  }), NumberVectorCollection.flopShuffle({
    size: (_h2 = h, sizeOscillator(_h2)),
    keyed
  }), StringVectorCollection.flopShuffle({
    size: (_h3 = h, sizeOscillator(_h3)),
    keyed
  }), StringVectorCollection.flopShuffle({
    size: (_h4 = h, sizeOscillator(_h4)),
    keyed
  }));
};
const SimpleVectorCollection = simpleVectorCollection();

export { CrostabMatrixCollection, ModestMatrixCollection, SimpleEntriesCollection, SimpleMatrixCollection, SimpleObjectCollection, SimpleVectorCollection, crostabMatrixCollection, modestMatrixCollection, simpleEntriesCollection, simpleMatrixCollection, simpleObjectCollection, simpleVectorCollection };
