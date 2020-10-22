import { min }             from '@aryth/comparer'
import { flop, flopValue } from '@aryth/rand'
import { acquire }         from '@vect/vector-merge'
import { shuffle }         from '@vect/vector-select'

export const FLOP = 'flop'
export const FLOP_SHUFFLE = 'flopShuffle'

export class FlopShuffleMaker {
  static defineFlop(target) {
    Reflect.defineProperty(target, FLOP, {
      value(options = {}) {
        const key = options.key
        const samples = key && key in target
          ? target[key]
          : (target |> flopValue)
        return samples|> flop
      },
      enumerable: false
    })
  }
  static defineFlopShuffle(target) {
    Reflect.defineProperty(target, FLOP_SHUFFLE, {
      value(options = {}) {
        const key = options.key
        const samples = key && key in target
          ? target[key]
          : Object.values(target).reduce((ac, ve) => acquire(ac, ve), [])
        const size = options.size ?? min(samples.length, 3)
        return shuffle(samples, size)
      },
      enumerable: false
    })
  }
}

