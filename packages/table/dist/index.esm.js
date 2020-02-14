import { flopProp } from '@foba/util';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const BistroDutyRoster = {
  head: ['day', 'name', 'served', 'sold', 'adt'],
  rows: [[1, 'Joyce', 70, 7, ''], [1, 'Joyce', 66, 15, ''], [2, 'Joyce', 86, 10, ''], [2, 'Joyce', NaN, NaN, ''], [3, 'Joyce', 96, 2, ''], [1, 'Lance', 98, 15, ''], [1, 'Lance', 66, 15, ''], [2, 'Lance', 85, 12, ''], [2, 'Lance', 63, 12, ''], [3, 'Lance', NaN, NaN, ''], [1, 'Naomi', 90, 14, ''], [1, 'Naomi', 66, 9, ''], [2, 'Naomi', NaN, NaN, ''], [2, 'Naomi', 93, 16, ''], [3, 'Naomi', 78, 8, '']]
};

class Foba {
  static flop() {
    var _Foba;

    return _Foba = Foba, flopProp(_Foba);
  }

}

_defineProperty(Foba, "BistroDutyRoster", BistroDutyRoster);

export { Foba };
