import { seq } from '../../utils/seq'
import { TrimDigit } from '../../utils/td'
import {
  CONSUMPTION,
  GOV_EXPENDITURE,
  INV_MULTIPLIER,
  INVESTMENT,
  MP_CONSUME
} from '../../resources/hansenSamuelsonDefaults'

function * hansenSamuelsonGenerator ({ g, c, i, a, b }, d) {
  /** @type {number} gdp */ let y = 0
  /** @type {number} consumption of last term*/ let k = 0
  /** @type {function} */ const td = TrimDigit(d)
  while (true) {
    y = g + c + i
    yield { c: td(c), i: td(i), y: td(y) }
    k = c
    c = a * y
    i = b * (c - k)
  }
}



/**
 * A simulation to Hansen-Samuelson (Multiplier-Accelerator Model)
 * @param {number} l length of simulation array
 * @param {number} g government spending - constant each term
 * @param {number} c consumption - c=a*y
 * @param {number} i investment - i=b*(c[t]-c[t-1])
 * @param {number} a marginal propensity to consume
 * @param {number} b investment multiplier
 * @param {number} d trailing digits to keep
 * @returns {{c:number,i:number,y:number}[]}
 */
export const hansenSamuelson = (
  l,
  { g = GOV_EXPENDITURE, c = CONSUMPTION, i = INVESTMENT, a = MP_CONSUME, b = INV_MULTIPLIER } = {},
  d = 2
) => {
  const hsg = hansenSamuelsonGenerator({ g, c, i, a, b }, d)
  return seq(l, () => hsg.next().value)
}


