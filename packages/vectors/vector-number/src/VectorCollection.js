import { flopKey, randIntBetw }  from '@aryth/rand'
import { FLOP_SHUFFLE }          from '@foba/util'
import { pair }                  from '@vect/object-init'
import { absoluteMirror }        from './functions/absoluteMirror'
import { balanceByCompInterest } from './functions/balanceByCompInterest'
import { fibonacci }             from './functions/fibonacci'
import { hansenSamuelson }       from './functions/hansenSamuelson'
import { nonSquares }            from './functions/nonSquares'
import { primes }                from './functions/primes'
import { range }                 from './functions/range'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 */
export const VectorCollection = {
  range (l) { return range(l) },
  primes (l) { return primes(l) },
  fibonacci (l) { return fibonacci(l) },
  nonSquares (l) { return nonSquares(l) },
  absoluteMirror (l, d) { return absoluteMirror(l, d) },
  balanceByCompInterest (l = 6, r, d = 3) {
    if (!r) r = randIntBetw(1, 30) / 100
    return balanceByCompInterest(l, r, d)
  },
  hansenSamuelson (l, { g, c, i, a, b, } = {}, d) {
    let cb, ib
    if (!a) a = randIntBetw(15, 50) / 100
    if (!b) b = randIntBetw(30, 80) / 10
    if (!c) cb = randIntBetw(0, 3), c = cb * 50
    if (!i) ib = randIntBetw(1, 6), i = ib * 50
    if (!g) g = ~~((cb + ib) / 3) * 50
    return hansenSamuelson(l = 6, { g, c, i, a, b }, d).map(({ y }) => y)
  }
}

Reflect.defineProperty(VectorCollection, FLOP_SHUFFLE, {
  value (options = {}) {
    const p = options.p || flopKey(this)
    const size = options.size || 6
    const start = options.start || 0
    let vector = start
      ? this[p].call(null, start + size).slice(-size)
      : this[p].call(null, size)
    return options.keyed ? pair(p, vector) : vector
  },
  enumerable: false
})










