import { deco, decoLog } from '@spare/deco'

const GOV = 1

export const trimDigit = ob => {
  let v
  for (let k in ob)
    if (Object.hasOwnProperty.call(ob, k) && !isNaN(v = ob[k]))
      ob[k] = +v.toFixed(2)
  return ob
}
// a - marginal propensity to consume
// b - investment multiplier

export class HansenSamuelson {
  constructor (g, c, i, a, b) {
    this.a = a
    this.b = b
    this.g = g
    this.st = {
      c: c,
      i: i,
      y: c + i + this.g,
    }
  }

  next () {
    let { st, a, b } = this
    let c = a * st.y
    let i = b * (c - st.c)
    let y = c + i + this.g
    const next = { c, i, y } |> trimDigit
    this.st = next
    return next
  }

  timeSeries (l) {
    const ar = Array(l)
    ar[0] = this.st
    let i = 0
    while (++i < l) ar[i] = this.next()
    return ar
  }
}

