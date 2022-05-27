export { balanceByCompInterest } from './src/balanceByCompInterest'
export { fibonacci }             from './src/fibonacci'
export { hansenSamuelson }       from './src/hansenSamuelson'
export { nonSquares }            from './src/nonSquares'
export { primes }                from './src/primes'
export { range }                 from './src/range'
export { absoluteMirror }        from './src/absoluteMirror'

import { randBetw }              from '@aryth/rand'
import { FlopShuffle }           from '@foba/util'
import { absoluteMirror }        from './src/absoluteMirror'
import { balanceByCompInterest } from './src/balanceByCompInterest'
import { fibonacci }             from './src/fibonacci'
import { hansenSamuelson }       from './src/hansenSamuelson'
import { nonSquares }            from './src/nonSquares'
import { primes }                from './src/primes'
import { range }                 from './src/range'

/**
 * @property {Function|function(Object):*[]} flopShuffle
 * @param flopShuffle.p
 * @param flopShuffle.size
 * @param flopShuffle.start
 * @param flopShuffle.keyed
 */
export class VectorCollection {
  static range = (l) => { return range(l) }
  static primes = (l) => { return primes(l) }
  static fibonacci = (l) => { return fibonacci(l) }
  static nonSquares = (l) => { return nonSquares(l) }
  static absoluteMirror = (l, d) => { return absoluteMirror(l, d) }
  static balanceByCompInterest = (l = 6, r, d = 3) => {
    if (!r) r = randBetw(1, 30) / 100
    return balanceByCompInterest(l, r, d)
  }
  static hansenSamuelson = (l, { g, c, i, a, b, } = {}, d) => {
    let cb, ib
    if (!a) a = randBetw(15, 50) / 100
    if (!b) b = randBetw(30, 80) / 10
    if (!c) cb = randBetw(0, 3), c = cb * 50
    if (!i) ib = randBetw(1, 6), i = ib * 50
    if (!g) g = ~~((cb + ib) / 3) * 50
    return hansenSamuelson(l = 6, { g, c, i, a, b }, d).map(({ y }) => y)
  }
  static flopShuffle(options) { return FlopShuffle.numericVector(VectorCollection, options) }
}