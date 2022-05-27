import { flopKey }                      from '@aryth/rand'
import { pair }                         from '@vect/object-init'
import { FLOP_SHUFFLE }                 from '../resources/functionNames'
import { shuffleObject, shuffleVector } from './FlopShuffle'


export class FlopShuffleMaker {
  static defineForObject(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        const key = options.p ?? flopKey(this)
        const rs = shuffleObject.call(options, this[key])
        return options.keyed ? pair(key, rs) : rs
      },
      enumerable: false
    })
  }

  static defineForVector(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        const key = options.p ?? flopKey(this)
        const rs = shuffleVector.call(options, this[key])
        return options.keyed ? pair(key, rs) : rs
      },
      enumerable: false
    })
  }
}



