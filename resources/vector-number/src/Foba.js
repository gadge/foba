import { allFuncKeys } from '@foba/util'
import { Roulett } from 'roulett'
import { balanceByCompInterest } from './balanceByCompInterest'
import { fibonacci } from './fibonacci'
import { hansenSamuelson } from './hansenSamuelson'
import { nonSquares } from './nonSquares'
import { primes } from './primes'
import { range } from './range'
import { absoluteMirror } from './absoluteMirror'

export class Foba {
  static range (l) {return range(l)}
  static primes (l) {return primes(l)}
  static fibonacci (l) {return fibonacci(l)}
  static nonSquares (l) {return nonSquares(l)}
  static absoluteMirror (l, d) { return absoluteMirror(l, d)}
  static balanceByCompInterest (l, r, d = 3) {
    if (!r) r = Roulett.rand(1, 30) / 100
    return balanceByCompInterest(l, r, d)
  }
  static hansenSamuelson (l, { g, c, i, a, b, } = {}, d) {
    if (!a) a = Roulett.rand(15, 50) / 100
    if (!b) b = Roulett.rand(30, 80) / 10
    let cb, ib
    if (!c) cb = Roulett.rand(0, 3), c = cb * 50
    if (!i) ib = Roulett.rand(1, 6), i = ib * 50
    if (!g) g = ~~((cb + ib) / 3) * 50
    return hansenSamuelson(l, { g, c, i, a, b }, d).map(({ y }) => y)
  }
  static flop ({ p, size = 6, keyValuePair } = {}) {
    const o = Foba
    p = p || ((o|> allFuncKeys).filter(x => !x.startsWith('flop')) |> Roulett.element)
    const shuffled = o[p].call(null, size)
    let ro
    return keyValuePair
      ? (ro = {}, ro[p] = shuffled, ro)
      : shuffled
  }
}










