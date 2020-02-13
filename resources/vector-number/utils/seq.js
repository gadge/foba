import { TrimDigit } from './td'

/**
 *
 * @param {number} l length
 * @param {function(number?):*} fn function
 * @param {number} [d]
 * @returns {*[]}
 */
export const seq = (l, fn, d) => {
  if (d) return seqTd(l, fn, d)
  const ar = Array(l)
  for (let i = 0; i < l; i++) ar[i] = fn(i)
  return ar
}

export const seqTd = (l, fn, d = 2) => {
  const ar = Array(l)
  for (let i = 0, td = TrimDigit(d); i < l; i++) ar[i] = td(fn(i))
  return ar
}
